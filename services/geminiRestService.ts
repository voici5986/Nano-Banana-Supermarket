import type { GeneratedContent } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

// const API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
const API_BASE_URL = "https://gpt-load-latest-craf.onrender.com/proxy/gemini/v1beta";
const MODEL = "gemini-2.5-flash-image-preview";

export async function editImage(
    base64ImageData: string, 
    mimeType: string, 
    prompt: string,
    maskBase64: string | null,
    secondaryImage: { base64: string; mimeType: string } | null
): Promise<GeneratedContent> {
  try {
    let fullPrompt = prompt;
    const contents: any[] = [{
      parts: []
    }];

    // Add the main image
    contents[0].parts.push({
      inline_data: {
        mime_type: mimeType,
        data: base64ImageData,
      },
    });

    // The mask should immediately follow the image it applies to.
    if (maskBase64) {
      contents[0].parts.push({
        inline_data: {
          mime_type: 'image/png', // Masks are always drawn as PNGs
          data: maskBase64,
        },
      });
      fullPrompt = `Apply the following instruction only to the masked area of the image: "${prompt}". Preserve the unmasked area.`;
    }
    
    if (secondaryImage) {
      contents[0].parts.push({
        inline_data: {
          mime_type: secondaryImage.mimeType,
          data: secondaryImage.base64,
        },
      });
    }

    // Add the text prompt
    contents[0].parts.push({ text: fullPrompt });

    const response = await fetch(`${API_BASE_URL}/models/${MODEL}:generateContent`, {
      method: 'POST',
      headers: {
        'x-goog-api-key': process.env.API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: contents,
        generationConfig: {
          responseModalities: ["TEXT", "IMAGE"],
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      let errorMessage = "The model did not return an image. It might have refused the request. Please try a different image or prompt.";
      
      try {
        const parsedError = JSON.parse(errorData);
        if (parsedError.error && parsedError.error.message) {
          if (parsedError.error.status === 'RESOURCE_EXHAUSTED') {
            errorMessage = "You've likely exceeded the request limit. Please wait a moment before trying again.";
          } else if (parsedError.error.code === 500 || parsedError.error.status === 'UNKNOWN') {
            errorMessage = "An unexpected server error occurred. This might be a temporary issue. Please try again in a few moments.";
          } else {
            errorMessage = parsedError.error.message;
          }
        }
      } catch (e) {
        // Not JSON, use default message
      }
      
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    const result: GeneratedContent = { imageUrl: null, text: null };

    // Safely access response parts to prevent crashes
    const responseParts = responseData.candidates?.[0]?.content?.parts;

    if (responseParts) {
      for (const part of responseParts) {
        if (part.text) {
          result.text = (result.text ? result.text + "\n" : "") + part.text;
        } else if (part.inlineData) {
          const base64ImageBytes: string = part.inlineData.data;
          result.imageUrl = `data:${part.inlineData.mime_type};base64,${base64ImageBytes}`;
        }
      }
    }

    if (!result.imageUrl) {
      const finishReason = responseData.candidates?.[0]?.finishReason;
      const safetyRatings = responseData.candidates?.[0]?.safetyRatings;
      let errorMessage = "The model did not return an image. It might have refused the request. Please try a different image or prompt.";
      
      if (finishReason === 'SAFETY') {
        const blockedCategories = safetyRatings?.filter(r => r.blocked).map(r => r.category).join(', ');
        errorMessage = `The request was blocked for safety reasons. Categories: ${blockedCategories || 'Unknown'}. Please modify your prompt or image.`;
      }
      
      throw new Error(errorMessage);
    }

    return result;

  } catch (error) {
    console.error("Error calling Gemini API via REST:", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred while communicating with the API.");
  }
}