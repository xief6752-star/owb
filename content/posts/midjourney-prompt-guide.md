---
title: "Midjourney 提示词完全指南 2026 — 从基础语法到高级技巧，生成专业级 AI 图片"
titleEn: "Complete Midjourney Prompt Guide 2026"
date: "2025-06-08"
category: "AI 应用"
tags: ["Midjourney", "AI绘画", "提示词"]
image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&h=630&fit=crop"
excerpt: "如何写出高质量的 Midjourney 提示词？这篇完整指南涵盖基础语法、参数详解（--ar、--v、--chaos）、风格控制、光影设置、构图技巧等 10+ 个实用方法，帮你从零开始生成专业级 AI 图片，适合设计师、创作者和 AI 绘画爱好者。"
author: "OutsideWeb"
---

Midjourney 是 2025 年最强大的 AI 绘画工具之一。如何写出高质量的提示词（Prompt）生成理想的图片？这篇指南给你完整答案。

## 一、基础语法

### 1. 基本结构

```
[主体] + [风格] + [细节] + [参数]
```

**示例：**
```
a cat sitting on a chair, oil painting style, warm lighting, detailed fur --ar 16:9 --v 6
```

**解释：**
- **主体：** a cat sitting on a chair
- **风格：** oil painting style
- **细节：** warm lighting, detailed fur
- **参数：** --ar 16:9 --v 6

---

### 2. 常用参数

| 参数 | 作用 | 示例 |
|------|------|------|
| `--ar` | 宽高比 | `--ar 16:9` |
| `--v` | 版本 | `--v 6` |
| `--s` | 风格化程度 | `--s 1000` |
| `--q` | 质量 | `--q 2` |
| `--chaos` | 变化程度 | `--chaos 50` |
| `--tile` | 平铺图案 | `--tile` |
| `--no` | 排除元素 | `--no people` |

---

### 3. 权重控制

**语法：** `词语::权重`

**示例：**
```
red::2 blue::1 flowers
```
- 红色的权重是蓝色的 2 倍

---

## 二、风格控制

### 1. 艺术风格

| 风格 | 提示词 |
|------|--------|
| **油画** | oil painting, canvas texture |
| **水彩** | watercolor, soft edges |
| **素描** | pencil sketch, hand-drawn |
| **动漫** | anime style, Studio Ghibli |
| **赛博朋克** | cyberpunk, neon lights |
| **极简主义** | minimalist, clean design |
| **写实** | photorealistic, highly detailed |

---

### 2. 摄影风格

| 风格 | 提示词 |
|------|--------|
| **人像** | portrait photography, bokeh |
| **风光** | landscape photography, wide angle |
| **微距** | macro photography, close-up |
| **黑白** | black and white, high contrast |
| **电影感** | cinematic lighting, dramatic |

---

### 3. 艺术家风格

**示例：**
```
in the style of Van Gogh
in the style of Picasso
in the style of Studio Ghibli
```

**注意：** Midjourney 可能会过滤某些艺术家名字。

---

## 三、细节控制

### 1. 光照

| 效果 | 提示词 |
|------|--------|
| **自然光** | natural light, soft daylight |
| **戏剧性光** | dramatic lighting, side lighting |
| **背光** | backlit, rim light |
| **黄金时刻** | golden hour, warm sunset |
| **蓝调时刻** | blue hour, twilight |

---

### 2. 镜头

| 镜头 | 提示词 |
|------|--------|
| **广角** | wide angle lens, 14mm |
| **长焦** | telephoto lens, 200mm |
| **鱼眼** | fisheye lens, distorted |
| **微距** | macro lens, extreme close-up |

---

### 3. 景深

| 效果 | 提示词 |
|------|--------|
| **浅景深** | shallow depth of field, bokeh |
| **全景深** | deep focus, everything sharp |

---

## 四、构图技巧

### 1. 视角

| 视角 | 提示词 |
|------|--------|
| **平视** | eye level, straight on |
| **俯视** | bird's eye view, top down |
| **仰视** | low angle, looking up |
| **第一人称** | first person view, POV |

---

### 2. 构图规则

| 规则 | 提示词 |
|------|--------|
| **三分法** | rule of thirds composition |
| **中心构图** | centered composition |
| **对称** | symmetrical composition |
| **引导线** | leading lines |

---

## 五、10 个实用技巧

### 技巧 1：使用具体的形容词

❌ **不好：** beautiful landscape
✅ **更好：** misty mountain landscape with pine trees, morning fog, golden sunlight

---

### 技巧 2：指定相机和镜头

❌ **不好：** portrait of a woman
✅ **更好：** portrait of a woman, shot on Canon EOS R5, 85mm f/1.4, bokeh

---

### 技巧 3：使用 --no 排除不想要的元素

**示例：**
```
beach sunset --no people, buildings
```

---

### 技巧 4：组合多个风格

**示例：**
```
cyberpunk city, in the style of Blade Runner, neon lights, rainy night
```

---

### 技巧 5：使用权重控制重点

**示例：**
```
red::2 rose::1.5 garden::1
```
- 强调红色和玫瑰

---

### 技巧 6：控制风格化程度

- `--s 0`：最写实
- `--s 1000`：最艺术化（默认）

---

### 技巧 7：使用 Remix 模式

**步骤：**
1. 输入 `/settings`
2. 开启 Remix Mode
3. 变化时可以修改提示词

---

### 技巧 8：利用 Seed 保持一致性

**步骤：**
1. 生成图片后，点击 ✉️ 获取 seed
2. 在新提示词中加入 `--seed 12345`
3. 生成相似风格的图片

---

### 技巧 9：使用图片作为参考

**语法：**
```
[图片URL] [提示词] --iw 0.5
```

**示例：**
```
https://example.com/image.jpg a cat in the same style --iw 1
```

**`--iw`：** 图片权重（0-2）

---

### 技巧 10：分步优化提示词

**流程：**
1. 先用简单提示词测试
2. 逐步添加细节
3. 调整参数
4. 使用 Remix 微调

---

## 六、常见场景模板

### 场景 1：人物肖像

```
portrait of [人物], [表情], [服装], shot on [相机], [光照], [背景] --ar 2:3 --v 6
```

**示例：**
```
portrait of a young woman, confident smile, elegant dress, shot on Canon EOS R5 85mm f/1.4, natural window light, soft background --ar 2:3 --v 6
```

---

### 场景 2：产品摄影

```
[产品], [材质], [光照], clean background, professional product photography --ar 1:1 --v 6
```

**示例：**
```
luxury watch, stainless steel, studio lighting, clean white background, professional product photography --ar 1:1 --v 6
```

---

### 场景 3：场景设计

```
[场景], [风格], [时间], [天气], [细节] --ar 16:9 --v 6
```

**示例：**
```
cyberpunk city street, neon signs, rainy night, crowded with people, reflections on wet ground --ar 16:9 --v 6
```

---

### 场景 4：Logo 设计

```
logo design for [品牌], [风格], simple, clean, vector style --ar 1:1 --v 6
```

**示例：**
```
logo design for tech startup, minimalist, geometric shapes, blue and white, simple, clean, vector style --ar 1:1 --v 6
```

---

## 七、进阶技巧

### 1. 多图混合（Blend）

**步骤：**
1. 输入 `/blend`
2. 上传 2-5 张图片
3. Midjourney 自动混合

---

### 2. 局部重绘（Vary Region）

**步骤：**
1. 生成图片
2. 点击 🖌️ Vary (Region)
3. 选择要修改的区域
4. 输入新的提示词

---

### 3. 放大优化（Upscale）

**选项：**
- **U1-U4：** 放大某个图
- **Upscale (Subtle)：** 细节优化
- **Upscale (Creative)：** 创意优化

---

## 八、常见问题

### Q1: 为什么我的图片不符合预期？
**A:** 
1. 提示词太简单 → 增加细节
2. 风格不明确 → 指定具体风格
3. 参数不合适 → 调整 --s 和 --chaos

### Q2: 如何生成一致风格的图片？
**A:** 
1. 使用 --seed 固定
2. 使用图片作为参考 (--iw)
3. 保持提示词结构一致

### Q3: 如何提高图片质量？
**A:** 
1. 使用 --v 6（最新版本）
2. 使用 --q 2（高质量）
3. 添加 "highly detailed", "8k", "professional"

### Q4: 如何排除不想要的元素？
**A:** 使用 --no 参数
```
portrait --no glasses, hat
```

### Q5: 如何生成特定比例的图片？
**A:** 使用 --ar 参数
- 正方形：--ar 1:1
- 横屏：--ar 16:9
- 竖屏：--ar 9:16

---

## 九、推荐资源

### 学习资源
- [Midjourney 官方文档](https://docs.midjourney.com/)
- [Midjourney 社区](https://discord.gg/midjourney)

### 提示词灵感
- [PromptHero](https://prompthero.com/)
- [Lexica](https://lexica.art/)

---

## 十、总结

**提示词写作核心原则：**
1. ✅ 具体 > 抽象
2. ✅ 细节 > 笼统
3. ✅ 分步优化 > 一次完美

**开始行动：**
1. 从简单提示词开始
2. 逐步添加细节
3. 调整参数优化
4. 使用 Remix 微调

---

**相关阅读：**
- [Midjourney 替代工具推荐](/post/midjourney-alternatives)
- [AI 编程效率提升指南](/post/ai-programming-productivity)
- [AI 助手与创意工具对比](/post/chatgpt-vs-claude-vs-gemini)
