
import type { Transformation } from './types';

export const TRANSFORMATIONS: Transformation[] = [
  // Viral & Fun Transformations
  { 
    title: "自定义提示", 
    prompt: "CUSTOM", 
    emoji: "✍️",
    description: "描述你能想象的任何变化。你的创造力是唯一的限制！"
  },
  { 
    title: "3D手办", 
    prompt: "turn this photo into a character figure. Behind it, place a box with the character’s image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. set the scene indoors if possible", 
    emoji: "🧍",
    description: "将你的照片变成可收藏的3D角色手办，配有完整的包装。"
  },
  { 
    title: "Funko Pop手办", 
    prompt: "Transform the person into a Funko Pop figure, shown inside and next to its packaging.", 
    emoji: "📦",
    description: "将你的主题重新想象成盒子里可爱的Funko Pop！乙烯基玩偶。"
  },
  { 
    title: "乐高小人", 
    prompt: "Transform the person into a LEGO minifigure, inside its packaging box.", 
    emoji: "🧱",
    description: "为你的主体制作一个乐高小人仔，准备好玩耍。"
  },
  { 
    title: "钩针娃娃", 
    prompt: "Transform the subject into a handmade crocheted yarn doll with a cute, chibi-style appearance.", 
    emoji: "🧶",
    description: "将你的图像变成柔软的手工钩针娃娃。"
  },
  { 
    title: "动漫角色扮演", 
    prompt: "Generate a highly detailed, realistic photo of a person cosplaying the character in this illustration. Replicate the pose, expression, and framing.", 
    emoji: "🎭",
    description: "将动漫角色带进现实，成为逼真的角色扮演照片。"
  },
  { 
    title: "可爱毛绒玩具", 
    prompt: "Turn the person in this photo into a cute, soft plushie doll.", 
    emoji: "🧸",
    description: "将你的主题变成可爱柔软的毛绒玩具。"
  },
  { 
    title: "亚克力钥匙扣", 
    prompt: "Turn the subject into a cute acrylic keychain, shown attached to a bag.", 
    emoji: "🔑",
    description: "为你的主题创建一个可爱的亚克力钥匙扣，非常适合挂在包上。"
  },
  
  // Photorealistic & Enhancement
  { 
    title: "高清增强", 
    prompt: "Enhance this image to high resolution, improving sharpness and clarity.", 
    emoji: "🔍",
    description: "放大你的图像，增加清晰度、对比度和细节，呈现高分辨率效果。"
  },
  { 
    title: "姿势参考", 
    prompt: "Apply the pose from the second image to the character in the first image. Render as a professional studio photograph.",
    emoji: "💃",
    description: "将一个图像中的姿势应用到另一个图像中的角色上。",
    isMultiImage: true,
    primaryUploaderTitle: "Character",
    primaryUploaderDescription: "The main character",
    secondaryUploaderTitle: "Pose Reference",
    secondaryUploaderDescription: "The pose to apply",
  },
  { 
    title: "转写实照片", 
    prompt: "Turn this illustration into a photorealistic version.", 
    emoji: "🪄",
    description: "将绘画或插图变成令人惊叹的逼真照片。"
  },
  { 
    title: "时尚杂志", 
    prompt: "Transform the photo into a stylized, ultra-realistic fashion magazine portrait with cinematic lighting.", 
    emoji: "📸",
    description: "为你的照片赋予高级时尚、编辑风格的杂志封面外观。"
  },
  { 
    title: "超写实", 
    prompt: "Generate a hyper-realistic, fashion-style photo with strong, direct flash lighting, grainy texture, and a cool, confident pose.", 
    emoji: "✨",
    description: "应用颗粒感、直接闪光摄影风格，营造酷炫的超写实氛围。"
  },

  // Design & Product
  { 
    title: "建筑模型", 
    prompt: "Convert this photo of a building into a miniature architecture model, placed on a cardstock in an indoor setting. Show a computer with modeling software in the background.", 
    emoji: "🏗️",
    description: "将建筑变成详细的微缩建筑模型。"
  },
  { 
    title: "产品渲染", 
    prompt: "Turn this product sketch into a photorealistic 3D render with studio lighting.", 
    emoji: "💡",
    description: "将产品草图变成专业的逼真3D渲染。"
  },
  { 
    title: "苏打水罐设计", 
    prompt: "Design a soda can using this image as the main graphic, and show it in a professional product shot.", 
    emoji: "🥤",
    description: "将你的图像包裹在苏打水罐上，并将其放置在光滑的产品拍摄中。"
  },
  { 
    title: "工业设计渲染", 
    prompt: "Turn this industrial design sketch into a realistic product photo, rendered with light brown leather and displayed in a minimalist museum setting.", 
    emoji: "🛋️",
    description: "将工业设计草图渲染为极简主义博物馆环境中的真实产品。"
  },

  // Artistic & Stylistic
  { 
    title: "调色板交换",
    prompt: "Turn this image into a clean, hand-drawn line art sketch.", // Step 1 prompt
    stepTwoPrompt: "Color the line art using the colors from the second image.", // Step 2 prompt
    emoji: "🎨",
    description: "将图像转换为线条画，然后使用第二张图像作为调色板为其上色。",
    isMultiImage: true,
    isTwoStep: true,
    primaryUploaderTitle: "Original Image",
    primaryUploaderDescription: "The image to transform",
    secondaryUploaderTitle: "Color Palette",
    secondaryUploaderDescription: "The color reference",
  },
  { 
    title: "线条画", 
    prompt: "Turn the image into a clean, hand-drawn line art sketch.", 
    emoji: "✍🏻",
    description: "将你的照片简化为基本线条，创建清晰的素描。"
  },
  { 
    title: "绘画过程", 
    prompt: "Generate a 4-panel grid showing the artistic process of creating this image, from sketch to final render.", 
    emoji: "🖼️",
    description: "显示你的图像从素描到最终绘画的4步创作过程网格。"
  },
  { 
    title: "马克笔素描", 
    prompt: "Redraw the image in the style of a Copic marker sketch, often used in design.", 
    emoji: "🖊️",
    description: "将你的照片重新想象成用Copic马克笔绘制的生动素描。"
  },
  { 
    title: "添加插画", 
    prompt: "Add a cute, cartoon-style illustrated couple into the real-world scene, sitting and talking.", 
    emoji: "🧑‍🎨",
    description: "将迷人的手绘角色添加到你的真实世界照片中。"
  },
  { 
    title: "赛博朋克", 
    prompt: "Transform the scene into a futuristic cyberpunk city.", 
    emoji: "🤖",
    description: "将你的场景变成霓虹灯闪烁的未来赛博朋克城市。"
  },
  { 
    title: "梵高风格", 
    prompt: "Reimagine the photo in the style of Van Gogh's 'Starry Night'.", 
    emoji: "🌌",
    description: "用《星夜》标志性的漩涡笔触重新绘制你的照片。"
  },

  // Utility & Specific Edits
  { 
    title: "隔离并增强", 
    prompt: "Isolate the person in the masked area and generate a high-definition photo of them against a neutral background.", 
    emoji: "🎯",
    description: "裁剪出蒙版主题，创建清晰的高分辨率肖像。"
  },
  { 
    title: "3D屏幕效果", 
    prompt: "For an image with a screen, add content that appears to be glasses-free 3D, popping out of the screen.", 
    emoji: "📺",
    description: "使照片中屏幕上的内容以3D效果弹出。"
  },
  { 
    title: "化妆分析", 
    prompt: "Analyze the makeup in this photo and suggest improvements by drawing with a red pen.", 
    emoji: "💄",
    description: "分析肖像中的妆容，并用红笔标记提出改进建议。"
  },
  { 
    title: "更换背景", 
    prompt: "Change the background to a Y2K aesthetic style.", 
    emoji: "🪩",
    description: "将现有背景替换为酷炫复古的Y2K美学风格。"
  },
];