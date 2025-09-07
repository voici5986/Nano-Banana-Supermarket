# Nano-Banana-Supermarket

Nano Banana 超市，根据模板一键生成图片。

## 在本地运行

**先决条件：** Node.js
1. 安装依赖项：npm install
2. 在项目中创建 `.env.local`文件添加环境变量如下：

```
API_BASE_URL = 接口地址
GEMINI_API_KEY = 接口API密钥
```

**原生接口配置如下**

```
API_BASE_URL = https://generativelanguage.googleapis.com/v1beta
GEMINI_API_KEY = 官方API密钥
```

**中转API（以GPT-Load为例）配置如下：**

```
API_BASE_URL = https://xxx.com/proxy/gemini/v1beta
GEMINI_API_KEY = 自定义API密钥
```

3. 运行应用程序：npm run dev

## 致谢

[ZHO-ZHO-ZHO](https://github.com/ZHO-ZHO-ZHO/Nano-Bananary)

