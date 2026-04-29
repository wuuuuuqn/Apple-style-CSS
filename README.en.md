# AppleUI - Apple Style CSS Framework

> 中文: [README.md](README.md)

A modern UI component library inspired by Apple design language, featuring four theme modes (Light, Dark, Liquid Glass, Frosted Glass) with multiple modern UI styles.

## ✨ Features

- 🎨 **Four Theme Modes**: Light, Dark, Liquid Glass, Frosted Glass
- 🎯 **Complete Component Library**: Buttons, Cards, Forms, Modals, Toasts, etc.
- 🚀 **Zero Dependencies**: Pure CSS + JavaScript, no build tools required
- 📱 **Responsive Design**: Perfectly adapts to all screen sizes
- ♿ **Accessibility Support**: WCAG compliant
- 🎭 **Smooth Animations**: Elegant transition effects
- 🎯 **Icon System**: Built-in 30+ SVG icons

## 📦 Installation

### Using CDN (Recommended)

```html
<link rel="stylesheet" href="apple-ui.css">
<script src="apple-ui.js"></script>
```

### Local Files

Download `apple-ui.css` and `apple-ui.js` to your project:

```html
<link rel="stylesheet" href="./path/to/apple-ui.css">
<script src="./path/to/apple-ui.js"></script>
```

## 🚀 Quick Start

### Basic Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AppleUI Demo</title>
  <link rel="stylesheet" href="apple-ui.css">
</head>
<body>
  <div class="au-container">
    <h1>Welcome to AppleUI</h1>
    <button class="au-btn">Primary Button</button>
    <button class="au-btn au-btn-secondary">Secondary Button</button>
  </div>
  
  <script src="apple-ui.js"></script>
  <script>
    AppleUI.init();
  </script>
</body>
</html>
```

### Theme Switching

```html
<!-- Theme toggle button -->
<button data-theme-toggle class="au-btn au-btn-icon">☀️</button>

<!-- Or switch to specific theme -->
<button data-theme="dark" class="au-btn">Dark Mode</button>
<button data-theme="liquid-glass" class="au-btn">Liquid Glass</button>
<button data-theme="frosted-glass" class="au-btn">Frosted Glass</button>
```

## 📚 Component Examples

### Buttons

```html
<!-- Primary Button -->
<button class="au-btn">Primary</button>

<!-- Secondary Button -->
<button class="au-btn au-btn-secondary">Secondary</button>

<!-- Outline Button -->
<button class="au-btn au-btn-outline">Outline</button>

<!-- Ghost Button -->
<button class="au-btn au-btn-ghost">Ghost</button>

<!-- Glass Button -->
<button class="au-btn au-btn-glass">Glass</button>

<!-- Danger Button -->
<button class="au-btn au-btn-danger">Danger</button>

<!-- Sizes -->
<button class="au-btn au-btn-xs">Extra Small</button>
<button class="au-btn au-btn-sm">Small</button>
<button class="au-btn au-btn-lg">Large</button>
<button class="au-btn au-btn-xl">Extra Large</button>

<!-- Icon Button -->
<button class="au-btn au-btn-icon">
  <i class="au-icon au-icon-heart"></i>
</button>
```

### Cards

```html
<div class="au-card">
  <h3>Card Title</h3>
  <p>This is a card component with glass effect support.</p>
</div>

<!-- Glass Card -->
<div class="au-card au-card-glass">
  <h3>Glass Card</h3>
  <p>Card with frosted glass effect</p>
</div>

<!-- Interactive Card -->
<div class="au-card au-card-interactive">
  <h3>Clickable Card</h3>
  <p>Hover for animation effect</p>
</div>
```

### Forms

```html
<!-- Input -->
<input type="text" class="au-input" placeholder="Enter text...">

<!-- Textarea -->
<textarea class="au-input au-textarea" placeholder="Multi-line input..."></textarea>

<!-- Select -->
<select class="au-input au-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Checkbox -->
<label class="au-checkbox">
  <input type="checkbox">
  <span class="au-checkbox-box"></span>
  Remember me
</label>

<!-- Radio -->
<label class="au-radio">
  <input type="radio" name="option">
  <span class="au-radio-circle"></span>
  Option A
</label>

<!-- Switch -->
<label class="au-switch">
  <input type="checkbox">
  <span class="au-switch-track">
    <span class="au-switch-thumb"></span>
  </span>
  Enable feature
</label>
```

### Modal

```html
<!-- Open Button -->
<button class="au-btn" data-modal-open="myModal">Open Modal</button>

<!-- Modal -->
<div id="myModal" class="au-modal-overlay">
  <div class="au-modal">
    <div class="au-modal-header">
      <h3 class="au-modal-title">Title</h3>
      <button class="au-modal-close" data-modal-close>×</button>
    </div>
    <div class="au-modal-body">
      <p>Modal content...</p>
    </div>
    <div class="au-modal-footer">
      <button class="au-btn au-btn-secondary" data-modal-close>Cancel</button>
      <button class="au-btn">OK</button>
    </div>
  </div>
</div>
```

### Toast Notifications

```javascript
// Success toast
AppleUI.toast.success('Operation successful!', 'Success');

// Error toast
AppleUI.toast.error('Operation failed', 'Error');

// Warning toast
AppleUI.toast.warning('Please note', 'This is a warning');

// Info toast
AppleUI.toast.info('This is a notification');

// Custom toast
AppleUI.toast.show({
  type: 'success',
  title: 'Custom Title',
  message: 'Custom message content',
  duration: 5000
});
```

### Tabs

```html
<div class="au-tabs">
  <button class="au-tab au-tab-active">Tab 1</button>
  <button class="au-tab">Tab 2</button>
  <button class="au-tab">Tab 3</button>
</div>

<div class="au-tab-panel au-tab-panel-active">Tab 1 Content</div>
<div class="au-tab-panel">Tab 2 Content</div>
<div class="au-tab-panel">Tab 3 Content</div>
```

### Accordion

```html
<div class="au-accordion">
  <div class="au-accordion-item">
    <button class="au-accordion-header">
      <span>Title 1</span>
      <span class="au-icon au-icon-chevron-down au-accordion-icon"></span>
    </button>
    <div class="au-accordion-body">
      <div class="au-accordion-content">Content 1</div>
    </div>
  </div>
  <div class="au-accordion-item">
    <button class="au-accordion-header">
      <span>Title 2</span>
      <span class="au-icon au-icon-chevron-down au-accordion-icon"></span>
    </button>
    <div class="au-accordion-body">
      <div class="au-accordion-content">Content 2</div>
    </div>
  </div>
</div>
```

### Badge & Tag

```html
<!-- Badges -->
<span class="au-badge">99+</span>
<span class="au-badge au-badge-success">Success</span>
<span class="au-badge au-badge-warning">Warning</span>
<span class="au-badge au-badge-danger">Danger</span>

<!-- Tags -->
<span class="au-tag">Default</span>
<span class="au-tag au-tag-success">Success</span>
<span class="au-tag au-tag-warning">Warning</span>
<span class="au-tag au-tag-danger">Danger</span>
```

### Progress

```html
<div class="au-progress">
  <div class="au-progress-bar" style="width: 60%"></div>
</div>

<!-- Different states -->
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

### Alert

```html
<div class="au-alert au-alert-info">
  <span class="au-icon au-icon-info"></span>
  <div>This is an info alert</div>
</div>

<div class="au-alert au-alert-success">
  <span class="au-icon au-icon-success"></span>
  <div>Operation completed successfully</div>
</div>

<div class="au-alert au-alert-warning">
  <span class="au-icon au-icon-warning"></span>
  <div>Please note this warning</div>
</div>

<div class="au-alert au-alert-danger">
  <span class="au-icon au-icon-error"></span>
  <div>An error occurred</div>
</div>
```

### Icons

```html
<!-- Basic Icons -->
<i class="au-icon au-icon-home"></i>
<i class="au-icon au-icon-user"></i>
<i class="au-icon au-icon-settings"></i>
<i class="au-icon au-icon-heart"></i>
<i class="au-icon au-icon-star"></i>

<!-- Colored Icons -->
<i class="au-icon au-icon-heart au-icon-danger"></i>
<i class="au-icon au-icon-star au-icon-warning"></i>
<i class="au-icon au-icon-success au-icon-success"></i>

<!-- Different Sizes -->
<i class="au-icon au-icon-xs au-icon-home"></i>
<i class="au-icon au-icon-sm au-icon-home"></i>
<i class="au-icon au-icon-lg au-icon-home"></i>
<i class="au-icon au-icon-xl au-icon-home"></i>

<!-- Icon in Button -->
<button class="au-btn">
  <i class="au-icon au-icon-plus"></i>
  Add
</button>
```

## 🎨 Theme System

AppleUI provides four beautifully designed theme modes:

### 🌓 Light / Dark Modes

#### 1. Light Mode - Default
Clean and bright light theme, perfect for everyday use.

**Use cases**: Daytime work, bright environments, reading

```javascript
AppleUI.theme.set('light');
```

#### 2. Dark Mode
Deep and elegant dark theme, eye-friendly and power-saving.

**Use cases**: Nighttime use, low-light environments, OLED devices

```javascript
AppleUI.theme.set('dark');
```

**Example for switching between modes**:

```html
<button data-theme="light" class="au-btn">☀️ Light Mode</button>
<button data-theme="dark" class="au-btn">🌙 Dark Mode</button>
<button data-theme-toggle class="au-btn au-btn-icon">Toggle Theme</button>
```

```javascript
// JavaScript approach
AppleUI.theme.set('light');  // Switch to light mode
AppleUI.theme.set('dark');   // Switch to dark mode

// Auto detect system theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  AppleUI.theme.set('dark');
}
```

### 💎 Glass Effect Modes

#### 3. Liquid Glass
iOS 26 style liquid glass effect, crystal clear.

**Features**:
- Gradient background animation
- High transparency glass effect
- Soft colored shadows

```javascript
AppleUI.theme.set('liquid-glass');
```

#### 4. Frosted Glass
Strong frosted glass effect, modern look.

**Features**:
- Dark gradient background
- Strong blur effect
- Blue ambient glow

```javascript
AppleUI.theme.set('frosted-glass');
```

### Theme Switch API

```javascript
// Switch to next theme (cycle)
AppleUI.theme.next();

// Switch to specific theme
AppleUI.theme.to('dark');

// Get current theme
console.log(AppleUI.theme.current); // 'light', 'dark', 'liquid-glass', 'frosted-glass'

// Get all themes
console.log(AppleUI.theme.modes); // ['light', 'dark', 'liquid-glass', 'frosted-glass']
```

### Theme Persistence

AppleUI automatically saves theme settings to `localStorage`, and restores the last selected theme on page reload.

```javascript
localStorage.getItem('au-theme'); // Returns current theme name
```

### CSS Variables

Each theme defines the following CSS variables for customization:

| Variable | Description | Example |
|----------|-------------|---------|
| `--au-primary` | Primary color | `#007aff` |
| `--au-bg` | Background color | `#f5f5f7` |
| `--au-bg-secondary` | Secondary background | `#ffffff` |
| `--au-text` | Primary text color | `#1d1d1f` |
| `--au-text-secondary` | Secondary text color | `#6e6e73` |
| `--au-border` | Border color | `rgba(0,0,0,0.08)` |
| `--au-glass-bg` | Glass background | `rgba(255,255,255,0.65)` |
| `--au-glass-blur` | Glass blur effect | `blur(20px) saturate(180%)` |

## 🛠️ JavaScript API

### Global Initialization

```javascript
AppleUI.init();
```

### Modal Control

```javascript
// Open modal
AppleUI.modal.open('modalId');

// Close modal
AppleUI.modal.close('modalId');

// Close all modals
AppleUI.modal.closeAll();
```

### Utility Functions

```javascript
// Copy to clipboard
await AppleUI.copy('text to copy');

// Debounce
const debouncedFn = AppleUI.debounce(() => {
  // Code to execute
}, 300);

// Throttle
const throttledFn = AppleUI.throttle(() => {
  // Code to execute
}, 300);
```

### Icon System

```javascript
// Create icon element
const icon = AppleUI.icon.create('home', {
  size: 'lg',
  color: 'primary'
});

// Insert icon into element
AppleUI.icon.insert(element, 'heart', { size: 'sm' });
```

## 📐 Layout System

### Grid Layout

```html
<div class="au-grid au-grid-cols-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

### Flex Layout

```html
<div class="au-flex au-justify-center au-items-center au-gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Container

```html
<div class="au-container">
  <!-- Content -->
</div>

<div class="au-container-sm">Small container</div>
<div class="au-container-md">Medium container</div>
<div class="au-container-lg">Large container</div>
```

## 🎯 Form Validation

```html
<form data-validate>
  <input type="email" required placeholder="Email">
  <input type="text" data-min-length="6" placeholder="Minimum 6 characters">
  <input type="text" data-pattern="[A-Za-z]+" placeholder="Letters only">
  <button type="submit" class="au-btn">Submit</button>
</form>
```

## 🌐 Demo Website

### Online Demo

🔗 **GitHub Pages Demo**: [View Demo](https://wuuuuuqn.github.io/Apple-style-CSS/demo.html)

### Local Development

```bash
# Using Python
python -m http.server 8000

# Or using Node.js http-server
npx http-server -p 8000

# Visit http://localhost:8000
```

## 📱 Responsive Breakpoints

```css
/* Small screens (< 640px) */
.au-sm:hidden { display: none !important; }

/* Medium screens (≥ 641px) */
.au-md:hidden { display: none !important; }

/* Large screens (≥ 1024px) */
.au-lg:hidden { display: none !important; }
```

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (partial support, requires polyfill)

## 📄 License

MIT License - Free to use, modify and distribute

## 🤝 Contributing

Welcome to submit issues and pull requests!

## 📞 Contact

For questions or suggestions, please contact us through GitHub Issues.

---

**Made with ❤️ using Apple Design Language**