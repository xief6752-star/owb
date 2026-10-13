# 文章内链优化映射表

## 内链策略

每篇文章添加 3-5 个相关内链，遵循以下原则：
1. 相关性强（同类别或相关主题）
2. 自然融入（在文章结尾"相关阅读"部分）
3. 双向链接（互相引用）
4. SEO 友好（使用关键词作为锚文本）

---

## 文章分类与内链关系

### A. 机场评测类

#### 综合评测文章
- `top5-airports-comparison-2026.md` - 5家机场横评
  - 链接到：云图、鲲鹏、瞬云评测、新手指南、Clash教程

#### 具体机场评测
- `airport-review-yuntu-2026.md` - 云图
- `airport-review-kunpeng-2026.md` - 鲲鹏
- `airport-review-shunyun-2026.md` - 瞬云

**应添加内链：**
- 横向对比文章（top5）
- 新手选购指南
- 使用教程（Clash）
- 线路科普（IEPL vs IPLC）

---

### B. 新手指南类

- `airport-beginner-guide.md` - 新手选购指南
- `airport-choose-guide-2024.md` - 机场选购指南

**应添加内链：**
- 具体机场评测（云图、鲲鹏、瞬云）
- 横向对比（top5）
- Clash 使用教程
- 线路科普

---

### C. 使用教程类

- `clash-complete-tutorial-2026.md` - Clash 完整教程
- `clash-verge-tutorial.md` - Clash Verge 教程
- `airport-setup-guide.md` - 机场配置教程

**应添加内链：**
- 新手选购指南
- 推荐机场评测
- 线路科普
- 故障排查

---

### D. 技术科普类

- `airport-iplc-vs-iepl.md` - IEPL vs IPLC 对比
- `line-comparison.md` - 线路对比

**应添加内链：**
- 机场评测（提到专线的）
- 新手指南
- 选购指南

---

### E. AI 工具类

- `chatgpt-vs-claude-vs-gemini-2026.md` - AI 大模型对比
- `ai-programming-productivity.md` - AI 编程生产力
- `copilot-vs-cursor-vs-codeium.md` - 代码工具对比

**应添加内链：**
- 互相引用
- 远程工作工具
- 生产力工具

---

### F. 远程工作/数字游民类

- `remote-work-tools-2026.md` - 远程工作工具
- `chiang-mai-digital-nomad-guide.md` - 清迈数字游民
- `digital-nomad-tax-guide.md` - 数字游民税务
- `portugal-d7-visa-guide.md` - 葡萄牙 D7 签证

**应添加内链：**
- 互相引用
- AI 工具（提升生产力）
- 隐私安全工具

---

### G. 隐私安全类

- `privacy-security-basics-2026.md` - 隐私安全基础
- `crypto-wallet-security.md` - 加密钱包安全
- `web3-wallet-security-guide.md` - Web3 钱包安全

**应添加内链：**
- 互相引用
- 远程工作安全
- 机场选择（安全考虑）

---

## 具体内链添加计划

### 优先级 1：核心文章（立即处理）

1. **top5-airports-comparison-2026.md**
   - → airport-review-yuntu-2026.md
   - → airport-review-kunpeng-2026.md
   - → airport-review-shunyun-2026.md
   - → airport-beginner-guide.md
   - → clash-complete-tutorial-2026.md

2. **clash-complete-tutorial-2026.md**
   - → airport-beginner-guide.md
   - → top5-airports-comparison-2026.md
   - → airport-review-yuntu-2026.md
   - → airport-iplc-vs-iepl.md

3. **airport-beginner-guide.md**
   - → top5-airports-comparison-2026.md
   - → airport-review-yuntu-2026.md
   - → clash-complete-tutorial-2026.md
   - → airport-iplc-vs-iepl.md

4. **airport-review-yuntu-2026.md**
   - → top5-airports-comparison-2026.md
   - → airport-beginner-guide.md
   - → clash-complete-tutorial-2026.md
   - → airport-review-kunpeng-2026.md

5. **airport-review-kunpeng-2026.md**
   - → top5-airports-comparison-2026.md
   - → airport-beginner-guide.md
   - → clash-complete-tutorial-2026.md
   - → airport-review-yuntu-2026.md

6. **airport-review-shunyun-2026.md**
   - → top5-airports-comparison-2026.md
   - → airport-beginner-guide.md
   - → clash-complete-tutorial-2026.md
   - → airport-review-yuntu-2026.md

---

### 优先级 2：其他机场评测

- airport-review-*.md（其他机场）
  - → top5-airports-comparison-2026.md
  - → airport-beginner-guide.md
  - → clash-complete-tutorial-2026.md

---

### 优先级 3：AI 和远程工作文章

- AI 工具类文章互相链接
- 远程工作类文章互相链接
- 隐私安全类文章互相链接

---

## 内链模板

### 机场评测文章模板

```markdown
---

## 相关阅读

### 机场推荐
- [2026 年最值得推荐的 5 家机场对比](./top5-airports-comparison-2026.md) - 横向对比评测
- [云图机场评测](./airport-review-yuntu-2026.md) - 高性价比首选
- [鲲鹏加速评测](./airport-review-kunpeng-2026.md) - 游戏玩家专用

### 新手指南
- [机场选购指南](./airport-beginner-guide.md) - 新手避坑攻略
- [Clash 完整使用教程](./clash-complete-tutorial-2026.md) - 全平台配置指南

### 技术科普
- [IEPL vs IPLC 专线对比](./airport-iplc-vs-iepl.md) - 了解线路类型
```

### 教程类文章模板

```markdown
---

## 相关阅读

### 机场推荐
- [2026 年最值得推荐的 5 家机场对比](./top5-airports-comparison-2026.md)
- [机场选购指南](./airport-beginner-guide.md)

### 其他教程
- [Clash Verge 使用教程](./clash-verge-tutorial.md)
- [机场配置通用指南](./airport-setup-guide.md)
```

---

## 执行状态

- [ ] 优先级 1：核心 6 篇文章
- [ ] 优先级 2：其他机场评测
- [ ] 优先级 3：AI 和远程工作文章
- [ ] 验证所有链接可用性
- [ ] 更新聚合页面内链
