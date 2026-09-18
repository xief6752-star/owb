# Cloudflare Pages 部署完整指南

## 🔍 问题诊断

从截图看，你的网站返回 404 错误。这通常是以下原因之一：

1. **构建配置不正确** - Cloudflare Pages 没有找到正确的输出目录
2. **路由配置问题** - Next.js 静态导出的路由没有正确配置
3. **部署未完成** - GitHub 推送后 Cloudflare 还没有完成构建

---

## ✅ 已完成的修复

我已经为你做了以下修复：

### 1. Next.js 静态导出配置
```typescript
// next.config.ts
{
  output: 'export',           // 启用静态导出
  images: { unoptimized: true }, // 禁用图片优化
  trailingSlash: true,        // URL 尾部斜杠
}
```

### 2. 添加 Cloudflare Pages 配置文件

**_headers** - 安全头配置
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

**_redirects** - 路由重定向
```
/about /about/ 301
/rankings /rankings/ 301
/* /404.html 404
```

### 3. 构建验证
- ✅ 137 个 HTML 文件已生成
- ✅ 包含 index.html、404.html
- ✅ 所有文章页面已生成

---

## 🚀 Cloudflare Pages 部署步骤

### 方法一：GitHub 自动部署（推荐）

#### 第 1 步：登录 Cloudflare Dashboard
访问: https://dash.cloudflare.com/

#### 第 2 步：创建 Pages 项目
1. 点击左侧菜单 **Workers & Pages**
2. 点击右上角 **Create** 按钮
3. 选择 **Pages** 标签
4. 点击 **Connect to Git**

#### 第 3 步：连接 GitHub 仓库
1. 选择 **GitHub** 作为 Git 提供商
2. 授权 Cloudflare 访问你的 GitHub
3. 选择仓库: **xief6752-star/owb**
4. 点击 **Begin setup**

#### 第 4 步：配置构建设置
填写以下配置：

```
Project name: outsideweb
Production branch: main

Build settings:
  Framework preset: Next.js
  Build command: npm run build
  Build output directory: out
  Root directory: /

Environment variables:
  NODE_VERSION = 20
```

**重要**: Build output directory 必须是 `out`，不是 `.next`

#### 第 5 步：点击 Save and Deploy
Cloudflare 会自动：
1. 从 GitHub 拉取代码
2. 安装依赖 (`npm install`)
3. 运行构建 (`npm run build`)
4. 部署到全球 CDN

**首次部署大约需要 3-5 分钟**

#### 第 6 步：等待部署完成
部署完成后，你会看到：
- ✅ Deployment successful
- 🔗 临时域名: `https://outsideweb-xxx.pages.dev`

点击链接测试网站是否正常。

#### 第 7 步：绑定自定义域名
1. 在项目页面，点击 **Custom domains** 标签
2. 点击 **Set up a custom domain**
3. 输入: `outsideweb.net`
4. Cloudflare 会自动配置 DNS（如果域名在 Cloudflare）
5. 如果域名不在 Cloudflare，按提示添加 CNAME 记录

**DNS 配置示例**：
```
类型: CNAME
名称: @
内容: outsideweb-xxx.pages.dev
代理状态: 已代理（橙色云朵）
```

---

### 方法二：Wrangler CLI 部署（备用）

如果 GitHub 自动部署有问题，可以用命令行直接部署：

```bash
# 1. 安装 Wrangler CLI
npm install -g wrangler

# 2. 登录 Cloudflare
wrangler login

# 3. 创建 Pages 项目（首次）
wrangler pages project create outsideweb

# 4. 部署
wrangler pages deploy out --project-name=outsideweb
```

---

## 🔧 常见问题排查

### 问题 1: 404 错误（当前问题）

**可能原因**:
- Cloudflare Pages 构建配置错误
- 输出目录设置为 `.next` 而不是 `out`
- 构建失败

**解决方法**:
1. 检查 Cloudflare Pages 项目设置
2. 确认 **Build output directory** 是 `out`
3. 查看构建日志，确认是否成功
4. 重新触发部署（点击 **Retry deployment**）

### 问题 2: 构建失败

**查看构建日志**:
在 Cloudflare Pages 项目页面 → Deployments → 点击最新部署 → 查看 Build log

**常见错误**:
```
Error: Cannot find module 'gray-matter'
→ 解决: package.json 中确认所有依赖都存在
```

```
Error: ENOENT: no such file or directory, open 'out/index.html'
→ 解决: 检查 next.config.ts 是否有 output: 'export'
```

### 问题 3: 页面白屏

**原因**: JavaScript 加载失败或路径错误

**解决**:
1. 打开浏览器开发者工具（F12）
2. 查看 Console 是否有错误
3. 检查 Network 标签，看哪些资源 404

### 问题 4: 图片不显示

**原因**: Unsplash 图片可能被墙或加载慢

**解决**:
- 图片已配置为 Unsplash CDN
- 如果被墙，可以考虑：
  1. 使用国内 CDN（七牛云、阿里云 OSS）
  2. 下载图片到本地 `/public/images/`

---

## 📊 部署后验证清单

### 1. 功能检查
```
✓ 首页加载正常
✓ 文章列表显示
✓ 点击文章能打开详情
✓ 筛选功能正常
✓ 排行榜页面正常
✓ 图片加载正常
```

### 2. URL 检查
```
✓ https://outsideweb.net/
✓ https://outsideweb.net/rankings/
✓ https://outsideweb.net/post/airport-review-yuntu/
✓ https://outsideweb.net/category/机场评测/
```

### 3. SEO 检查
```
✓ https://outsideweb.net/robots.txt
✓ https://outsideweb.net/sitemap.xml
✓ https://outsideweb.net/indexnow-key.txt
```

---

## 🎯 下一步操作

### 立即要做的：

1. **登录 Cloudflare Dashboard**
   - https://dash.cloudflare.com/

2. **检查现有部署状态**
   - 进入 Workers & Pages
   - 查看是否已有 outsideweb 项目
   - 如果有，检查构建日志

3. **确认构建配置**
   ```
   Build command: npm run build
   Build output directory: out  ← 最重要！
   Node version: 20
   ```

4. **重新触发部署**
   - 如果配置错误，修改后点击 Retry deployment
   - 或者在 GitHub 做一个小改动（比如修改 README）并推送，触发自动部署

### 部署成功后：

1. **提交 Google Search Console**
   - https://search.google.com/search-console
   - 添加网站验证
   - 提交 Sitemap: `https://outsideweb.net/sitemap.xml`

2. **监控 Bing 收录**
   - https://www.bing.com/webmasters
   - IndexNow 已提交，等待 24-48 小时

3. **配置 Google Analytics**（可选）
   - 添加 GA4 跟踪代码
   - 监控流量和用户行为

---

## 📞 需要帮助？

如果部署过程中遇到问题，请提供：

1. **Cloudflare Pages 构建日志截图**
   - 部署页面 → Build log

2. **浏览器开发者工具截图**
   - F12 → Console 标签
   - F12 → Network 标签

3. **当前配置截图**
   - Build settings 页面

---

## ✅ 快速检查命令

在部署前，你可以本地测试：

```bash
# 1. 构建
npm run build

# 2. 检查输出
ls -la out/

# 3. 本地预览（安装 serve）
npx serve out

# 4. 访问 http://localhost:3000 测试
```

如果本地预览正常，说明构建没问题，Cloudflare Pages 配置正确就能成功。
