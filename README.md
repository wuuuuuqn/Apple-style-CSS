# AppleUI - Apple Style CSS Framework

> English: [README.en.md](README.en.md)

一个现代化 UI 组件库，提供四种主题模式（白天、黑夜、液体玻璃、磨砂玻璃），融合多种现代 UI 风格。

## ✨ 特性

- 🎨 **四种主题模式**：Light、Dark、Liquid Glass、Frosted Glass
- 🎯 **完整组件库**：按钮、卡片、表单、模态框、提示框等
- 🚀 **零依赖**：纯 CSS + JavaScript，无需构建工具
- 📱 **响应式设计**：完美适配各种屏幕尺寸
- ♿ **无障碍支持**：符合 WCAG 标准
- 🎭 **平滑动画**：优雅的过渡效果
- 🎯 **图标系统**：内置 30+ SVG 图标

## 📦 安装

### 直接使用 CDN（推荐）

通过 GitHub Pages 使用 CDN：

```html
<link rel="stylesheet" href="https://wuuuuuqn.github.io/Apple-style-CSS/apple-ui.css">
<script src="https://wuuuuuqn.github.io/Apple-style-CSS/apple-ui.js"></script>
```

**使用步骤：**

1. 在 HTML 文件的 `<head>` 中引入 CSS
2. 在 `</body>` 标签前引入 JavaScript
3. 在脚本中调用 `AppleUI.init()` 初始化

**完整示例：**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AppleUI CDN 示例</title>
  <!-- 引入 AppleUI CSS -->
  <link rel="stylesheet" href="https://wuuuuuqn.github.io/Apple-style-CSS/apple-ui.css">
</head>
<body>
  <div class="au-container">
    <h1>使用 CDN 引入 AppleUI</h1>
    <button class="au-btn">Primary Button</button>
    <button class="au-btn au-btn-secondary">Secondary Button</button>
  </div>
  
  <!-- 引入 AppleUI JavaScript -->
  <script src="https://wuuuuuqn.github.io/Apple-style-CSS/apple-ui.js"></script>
  <script>
    // 初始化 AppleUI
    AppleUI.init();
  </script>
</body>
</html>
```

### 本地文件

将 `apple-ui.css` 和 `apple-ui.js` 下载到项目中：

```html
<link rel="stylesheet" href="./path/to/apple-ui.css">
<script src="./path/to/apple-ui.js"></script>
```

## 🚀 快速开始

### 基础示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AppleUI Demo</title>
  <link rel="stylesheet" href="apple-ui.css">
</head>
<body>
  <div class="au-container">
    <h1>欢迎使用 AppleUI</h1>
    <button class="au-btn">主要按钮</button>
    <button class="au-btn au-btn-secondary">次要按钮</button>
  </div>
  
  <script src="apple-ui.js"></script>
  <script>
    // 初始化 AppleUI
    AppleUI.init();
  </script>
</body>
</html>
```

### 主题切换

```html
<!-- 主题切换按钮 -->
<button data-theme-toggle class="au-btn au-btn-icon">☀️</button>

<!-- 或者切换到指定主题 -->
<button data-theme="dark" class="au-btn">黑夜模式</button>
<button data-theme="liquid-glass" class="au-btn">液体玻璃</button>
<button data-theme="frosted-glass" class="au-btn">磨砂玻璃</button>
```

## 📚 组件示例

### 按钮 (Buttons)

```html
<!-- 主要按钮 -->
<button class="au-btn">Primary</button>

<!-- 次要按钮 -->
<button class="au-btn au-btn-secondary">Secondary</button>

<!-- 轮廓按钮 -->
<button class="au-btn au-btn-outline">Outline</button>

<!-- 幽灵按钮 -->
<button class="au-btn au-btn-ghost">Ghost</button>

<!-- 玻璃按钮 -->
<button class="au-btn au-btn-glass">Glass</button>

<!-- 危险按钮 -->
<button class="au-btn au-btn-danger">Danger</button>

<!-- 尺寸 -->
<button class="au-btn au-btn-xs">Extra Small</button>
<button class="au-btn au-btn-sm">Small</button>
<button class="au-btn au-btn-lg">Large</button>
<button class="au-btn au-btn-xl">Extra Large</button>

<!-- 图标按钮 -->
<button class="au-btn au-btn-icon">
  <i class="au-icon au-icon-heart"></i>
</button>
```

### 卡片 (Cards)

```html
<div class="au-card">
  <h3>卡片标题</h3>
  <p>这是一个卡片组件，支持玻璃态效果。</p>
</div>

<!-- 玻璃态卡片 -->
<div class="au-card au-card-glass">
  <h3>玻璃态卡片</h3>
  <p>带有毛玻璃效果的卡片</p>
</div>

<!-- 可交互卡片 -->
<div class="au-card au-card-interactive">
  <h3>可点击卡片</h3>
  <p>悬停时有动画效果</p>
</div>
```

### 表单 (Forms)

```html
<!-- 输入框 -->
<input type="text" class="au-input" placeholder="请输入...">

<!-- 文本域 -->
<textarea class="au-input au-textarea" placeholder="多行输入..."></textarea>

<!-- 下拉选择 -->
<select class="au-input au-select">
  <option>选项 1</option>
  <option>选项 2</option>
</select>

<!-- 复选框 -->
<label class="au-checkbox">
  <input type="checkbox">
  <span class="au-checkbox-box"></span>
  记住我
</label>

<!-- 单选框 -->
<label class="au-radio">
  <input type="radio" name="option">
  <span class="au-radio-circle"></span>
  选项 A
</label>

<!-- 开关 -->
<label class="au-switch">
  <input type="checkbox">
  <span class="au-switch-track">
    <span class="au-switch-thumb"></span>
  </span>
  启用功能
</label>
```

### 模态框 (Modal)

```html
<!-- 打开按钮 -->
<button class="au-btn" data-modal-open="myModal">打开模态框</button>

<!-- 模态框 -->
<div id="myModal" class="au-modal-overlay">
  <div class="au-modal">
    <div class="au-modal-header">
      <h3 class="au-modal-title">标题</h3>
      <button class="au-modal-close" data-modal-close>×</button>
    </div>
    <div class="au-modal-body">
      <p>模态框内容...</p>
    </div>
    <div class="au-modal-footer">
      <button class="au-btn au-btn-secondary" data-modal-close>取消</button>
      <button class="au-btn">确定</button>
    </div>
  </div>
</div>
```

### 提示框 (Toast)

```javascript
// 成功提示
AppleUI.toast.success('操作成功！', '成功');

// 错误提示
AppleUI.toast.error('操作失败', '错误');

// 警告提示
AppleUI.toast.warning('请注意', '这是一条警告信息');

// 信息提示
AppleUI.toast.info('这是一条提示信息');

// 自定义配置
AppleUI.toast.show({
  type: 'success',
  title: '自定义标题',
  message: '自定义消息内容',
  duration: 5000 // 显示时长（毫秒）
});
```

### 标签页 (Tabs)

```html
<div class="au-tabs">
  <button class="au-tab au-tab-active">标签 1</button>
  <button class="au-tab">标签 2</button>
  <button class="au-tab">标签 3</button>
</div>

<div class="au-tab-panel au-tab-panel-active">
  标签 1 内容
</div>
<div class="au-tab-panel">
  标签 2 内容
</div>
<div class="au-tab-panel">
  标签 3 内容
</div>
```

### 折叠面板 (Accordion)

```html
<div class="au-accordion">
  <div class="au-accordion-item">
    <button class="au-accordion-header">
      <span>标题 1</span>
      <span class="au-icon au-icon-chevron-down au-accordion-icon"></span>
    </button>
    <div class="au-accordion-body">
      <div class="au-accordion-content">
        内容 1
      </div>
    </div>
  </div>
  <div class="au-accordion-item">
    <button class="au-accordion-header">
      <span>标题 2</span>
      <span class="au-icon au-icon-chevron-down au-accordion-icon"></span>
    </button>
    <div class="au-accordion-body">
      <div class="au-accordion-content">
        内容 2
      </div>
    </div>
  </div>
</div>
```

### 徽章与标签 (Badge & Tag)

```html
<!-- 徽章 -->
<span class="au-badge">99+</span>
<span class="au-badge au-badge-success">成功</span>
<span class="au-badge au-badge-warning">警告</span>
<span class="au-badge au-badge-danger">危险</span>

<!-- 标签 -->
<span class="au-tag">默认</span>
<span class="au-tag au-tag-success">成功</span>
<span class="au-tag au-tag-warning">警告</span>
<span class="au-tag au-tag-danger">危险</span>
```

### 进度条 (Progress)

```html
<div class="au-progress">
  <div class="au-progress-bar" style="width: 60%"></div>
</div>

<!-- 不同状态 -->
<div class="au-progress au-progress-success">
  <div class="au-progress-bar" style="width: 80%"></div>
</div>

<div class="au-progress au-progress-warning">
  <div class="au-progress-bar" style="width: 50%"></div>
</div>

<div class="au-progress au-progress-danger">
  <div class="au-progress-bar" style="width: 30%"></div>
</div>
```

### 警告框 (Alert)

```html
<div class="au-alert au-alert-info">
  <span class="au-icon au-icon-info"></span>
  <div>这是一条信息提示</div>
</div>

<div class="au-alert au-alert-success">
  <span class="au-icon au-icon-success"></span>
  <div>操作成功完成</div>
</div>

<div class="au-alert au-alert-warning">
  <span class="au-icon au-icon-warning"></span>
  <div>请注意此警告</div>
</div>

<div class="au-alert au-alert-danger">
  <span class="au-icon au-icon-error"></span>
  <div>发生错误</div>
</div>
```

### 图标 (Icons)

```html
<!-- 基础图标 -->
<i class="au-icon au-icon-home"></i>
<i class="au-icon au-icon-user"></i>
<i class="au-icon au-icon-settings"></i>
<i class="au-icon au-icon-heart"></i>
<i class="au-icon au-icon-star"></i>

<!-- 带颜色的图标 -->
<i class="au-icon au-icon-heart au-icon-danger"></i>
<i class="au-icon au-icon-star au-icon-warning"></i>
<i class="au-icon au-icon-success au-icon-success"></i>

<!-- 不同尺寸 -->
<i class="au-icon au-icon-xs au-icon-home"></i>
<i class="au-icon au-icon-sm au-icon-home"></i>
<i class="au-icon au-icon-lg au-icon-home"></i>
<i class="au-icon au-icon-xl au-icon-home"></i>

<!-- 按钮中的图标 -->
<button class="au-btn">
  <i class="au-icon au-icon-plus"></i>
  添加
</button>
```

## 🎨 主题系统

AppleUI 提供四种精心设计的主题模式，支持平滑切换：

---

### 🌓 黑白色模式 (Light / Dark)

#### 1. Light (白天模式) - 默认
清新明亮的浅色主题，适合日常使用。

**适用场景**：白天工作、明亮环境、阅读场景

```javascript
AppleUI.theme.set('light');
```

#### 2. Dark (黑夜模式)
深邃优雅的深色主题，护眼且省电。

**适用场景**：夜间使用、低光环境、OLED屏幕设备

```javascript
AppleUI.theme.set('dark');
```

**黑白模式切换示例**：

```html
<!-- HTML 按钮 -->
<button data-theme="light" class="au-btn">☀️ 白天模式</button>
<button data-theme="dark" class="au-btn">🌙 黑夜模式</button>

<!-- 切换按钮 -->
<button data-theme-toggle class="au-btn au-btn-icon">切换主题</button>
```

```javascript
// JavaScript 方式
AppleUI.theme.set('light');  // 切换到白天模式
AppleUI.theme.set('dark');   // 切换到黑夜模式

// 自动检测系统主题
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  AppleUI.theme.set('dark');
}
```

---

### 💎 玻璃效果模式 (Glass Effects)

#### 3. Liquid Glass (液体玻璃)
iOS 26 风格的液体玻璃效果，晶莹剔透。

**特点**：
- 渐变背景动画
- 高透明度毛玻璃效果
- 柔和的彩色阴影

```javascript
AppleUI.theme.set('liquid-glass');
```

#### 4. Frosted Glass (磨砂玻璃)
强烈的磨砂玻璃效果，现代感十足。

**特点**：
- 深色渐变背景
- 强烈的模糊效果
- 蓝色调氛围光

```javascript
AppleUI.theme.set('frosted-glass');
```

---

### 主题切换 API

```javascript
// 切换到下一个主题（循环切换）
AppleUI.theme.next();

// 切换到指定主题
AppleUI.theme.to('dark');

// 获取当前主题
console.log(AppleUI.theme.current); // 'light', 'dark', 'liquid-glass', 'frosted-glass'

// 获取所有主题列表
console.log(AppleUI.theme.modes); // ['light', 'dark', 'liquid-glass', 'frosted-glass']
```

### 主题持久化

AppleUI 自动将主题设置保存到 `localStorage`，刷新页面后会自动恢复上次选择的主题。

```javascript
// 保存的键名
localStorage.getItem('au-theme'); // 返回当前主题名称
```

### CSS 变量

每个主题都定义了以下 CSS 变量，可用于自定义样式：

| 变量名 | 说明 | 示例值 |
|--------|------|--------|
| `--au-primary` | 主色调 | `#007aff` |
| `--au-bg` | 背景色 | `#f5f5f7` |
| `--au-bg-secondary` | 次级背景 | `#ffffff` |
| `--au-text` | 主文本色 | `#1d1d1f` |
| `--au-text-secondary` | 次要文本色 | `#6e6e73` |
| `--au-border` | 边框颜色 | `rgba(0,0,0,0.08)` |
| `--au-glass-bg` | 玻璃背景 | `rgba(255,255,255,0.65)` |
| `--au-glass-blur` | 玻璃模糊 | `blur(20px) saturate(180%)` |

## 🛠️ JavaScript API

### 全局初始化

```javascript
// 自动初始化所有组件
AppleUI.init();
```

### 模态框控制

```javascript
// 打开模态框
AppleUI.modal.open('modalId');

// 关闭模态框
AppleUI.modal.close('modalId');

// 关闭所有模态框
AppleUI.modal.closeAll();
```

### 工具函数

```javascript
// 复制到剪贴板
await AppleUI.copy('要复制的文本');

// 防抖函数
const debouncedFn = AppleUI.debounce(() => {
  // 执行代码
}, 300);

// 节流函数
const throttledFn = AppleUI.throttle(() => {
  // 执行代码
}, 300);
```

### 图标系统

```javascript
// 创建图标元素
const icon = AppleUI.icon.create('home', {
  size: 'lg',
  color: 'primary'
});

// 插入图标到元素
AppleUI.icon.insert(element, 'heart', { size: 'sm' });

// 加载外部 SVG 图标
const externalIcon = AppleUI.icon.load('icon.svg', { size: 'md' });
```

## 📐 布局系统

### Grid 布局

```html
<div class="au-grid au-grid-cols-3">
  <div>列 1</div>
  <div>列 2</div>
  <div>列 3</div>
</div>
```

### Flex 布局

```html
<div class="au-flex au-justify-center au-items-center au-gap-4">
  <div>项目 1</div>
  <div>项目 2</div>
</div>
```

### 容器

```html
<div class="au-container">
  <!-- 内容 -->
</div>

<div class="au-container-sm">小容器</div>
<div class="au-container-md">中容器</div>
<div class="au-container-lg">大容器</div>
```

## 🎯 表单验证

```html
<form data-validate>
  <input type="email" required placeholder="邮箱">
  <input type="text" data-min-length="6" placeholder="最少 6 个字符">
  <input type="text" data-pattern="[A-Za-z]+" placeholder="仅字母">
  <button type="submit" class="au-btn">提交</button>
</form>
```

## 🌐 示例网站

### 在线演示

🔗 **GitHub Pages Demo**: [查看示例网站](https://wuuuuuqn.github.io/Apple-style-CSS/demo.html)

### 示例页面结构

项目包含以下示例页面：

1. **主页** (`index.html`) - 展示所有核心组件
2. **组件展示** (`components.html`) - 详细组件示例
3. **主题切换** (`themes.html`) - 四种主题模式对比
4. **表单示例** (`forms.html`) - 表单和验证示例
5. **布局示例** (`layout.html`) - Grid 和 Flex 布局示例

### 本地运行示例

```bash
# 使用 Python 启动本地服务器
python -m http.server 8000

# 或使用 Node.js 的 http-server
npx http-server -p 8000

# 然后访问 http://localhost:8000
```

## 📱 响应式断点

```css
/* 小屏 (< 640px) */
.au-sm\:hidden { display: none !important; }

/* 中屏 (≥ 641px) */
.au-md\:hidden { display: none !important; }

/* 大屏 (≥ 1024px) */
.au-lg\:hidden { display: none !important; }
```

## 🎨 CSS 变量

可以通过 CSS 变量自定义主题：

```css
:root {
  --au-primary: #your-color;
  --au-radius: 12px;
  --au-transition: 300ms ease;
}
```

## 🔧 浏览器支持

- ✅ Chrome (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ Edge (最新版)
- ⚠️ IE11 (部分支持，需要 polyfill)

## 📄 许可证

MIT License - 可自由使用、修改和分发

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题或建议，请通过 GitHub Issues 联系我们。

---

**Made with ❤️ using Apple Design Language**
