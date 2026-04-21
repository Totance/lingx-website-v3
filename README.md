# 零想科技官网 V3

> P1 | 零想科技官方网站项目根文档

## 项目概述

**零想科技 LINGX DreamWorks** - AI驱动的XR沉浸式社交娱乐梦工场

**Slogan**: 点亮每个人心中的梦境 / LIGHT UP YOUR DREAMWORLD

**技术栈**: React 19 + Vite 8 + Three.js

## 目录结构

```
lingx-website-v3/
├── docs/                    # 构建输出目录 (GitHub Pages)
│   ├── assets/              # 静态资源
│   ├── favicon.svg          # 网站图标
│   └── index.html           # 入口HTML
├── src/
│   ├── components/
│   │   ├── ParticleBackground.jsx  # Three.js粒子背景
│   │   └── ScrollReveal.jsx        # 滚动渐显动画
│   ├── App.jsx              # 主应用 (9个区块)
│   ├── index.css            # 全局样式
│   └── main.jsx             # React入口
├── public/
│   └── favicon.svg          # 网站图标
├── index.html               # HTML模板
├── vite.config.js           # Vite配置
└── package.json             # 依赖配置
```

## 页面结构 (9个区块)

1. **首屏Hero** - 全屏动效 + Slogan + Logo + 粒子背景
2. **关于零想** - 公司介绍
3. **创立初衷** - Why We Started
4. **AI+XR趋势** - 行业趋势分析
5. **零想优势** - 6大核心优势
6. **发展目标** - 路线图时间线
7. **使命愿景** - Mission & Vision
8. **作品案例** - 4个案例卡片
9. **底部联系** - Footer联系信息

## 设计规范

- **背景色**: #050508 (深黑)
- **主色调**: 蓝紫光晕 (#4a9eff, #9d4edd, #00d4ff)
- **文字色**: #ffffff 白色
- **字体**: Orbitron (标题) + Outfit/Noto Sans SC (正文)
- **动效**: 粒子流动、渐显上移、呼吸感

## 开发命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署说明

项目配置为输出到 `docs/` 目录，可直接部署到 GitHub Pages：

1. GitHub仓库设置 → Pages
2. Source选择 "Deploy from a branch"
3. Branch选择 "main" → "/docs"

---
*Generated on 2024-04-21*