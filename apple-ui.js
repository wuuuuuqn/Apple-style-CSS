/**
 * AppleUI - JavaScript Interactions
 * 统一简洁的交互库
 */

const AppleUI = {
  version: '1.0.0',

  // Theme Management - 四种主题模式
  theme: {
    current: 'light',
    modes: ['light', 'dark', 'liquid-glass', 'frosted-glass'],
    icons: {
      'light': '☀️',
      'dark': '🌙',
      'liquid-glass': '💎',
      'frosted-glass': '❄️'
    },
    labels: {
      'light': '白天',
      'dark': '黑夜',
      'liquid-glass': '液体玻璃',
      'frosted-glass': '磨砂玻璃'
    },

    init() {
      const saved = localStorage.getItem('au-theme') || 'light';
      this.set(saved);
    },

    set(mode) {
      if (!this.modes.includes(mode)) mode = 'light';
      this.current = mode;

      // Smooth theme transition
      const html = document.documentElement;
      html.classList.add('theme-transition');
      html.setAttribute('data-theme', mode);
      localStorage.setItem('au-theme', mode);

      setTimeout(() => html.classList.remove('theme-transition'), 500);

      this.updateToggles();
      this.updateBodyClass();
    },

    // 切换到下一个主题
    next() {
      const currentIndex = this.modes.indexOf(this.current);
      const nextIndex = (currentIndex + 1) % this.modes.length;
      this.set(this.modes[nextIndex]);
    },

    // 切换到指定主题
    to(mode) {
      if (this.modes.includes(mode)) {
        this.set(mode);
      }
    },

    updateToggles() {
      document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
        btn.textContent = this.icons[this.current];
        btn.title = this.labels[this.current];
      });
    },

    updateBodyClass() {
      // 移除旧的主题类
      this.modes.forEach(mode => {
        document.body.classList.remove(`theme-${mode}`);
      });
      // 添加当前主题类
      document.body.classList.add(`theme-${this.current}`);
    }
  },

  // Modal
  modal: {
    _activeModal: null,
    _previousFocus: null,

    open(id) {
      const modal = document.getElementById(id);
      if (!modal) return;

      this._previousFocus = document.activeElement;
      this._activeModal = modal;
      modal.classList.add('au-modal-overlay-active');
      document.body.style.overflow = 'hidden';

      // Focus first focusable element
      const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable) focusable.focus();

      // Focus trap
      modal.addEventListener('keydown', this._handleTabKey);
    },

    close(id) {
      const modal = id ? document.getElementById(id) : this._activeModal;
      if (!modal) return;

      modal.classList.remove('au-modal-overlay-active');
      document.body.style.overflow = '';
      modal.removeEventListener('keydown', this._handleTabKey);

      if (this._previousFocus) {
        this._previousFocus.focus();
        this._previousFocus = null;
      }
      this._activeModal = null;
    },

    closeAll() {
      document.querySelectorAll('.au-modal-overlay-active').forEach(modal => {
        modal.classList.remove('au-modal-overlay-active');
        modal.removeEventListener('keydown', this._handleTabKey);
      });
      document.body.style.overflow = '';
      if (this._previousFocus) {
        this._previousFocus.focus();
        this._previousFocus = null;
      }
      this._activeModal = null;
    },

    _handleTabKey(e) {
      if (e.key !== 'Tab') return;
      const modal = AppleUI.modal._activeModal;
      if (!modal) return;
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  },

  // Toast Notifications
  toast: {
    container: null,

    init() {
      if (!this.container) {
        this.container = document.createElement('div');
        this.container.className = 'au-toast-container';
        document.body.appendChild(this.container);
      }
    },

    show(options) {
      this.init();

      const {
        type = 'info',
        title = '',
        message = '',
        duration = 4000,
        icon = this.getIcon(type)
      } = options;

      const toast = document.createElement('div');
      toast.className = `au-toast au-toast-${type}`;
      toast.innerHTML = `
        <span class="au-toast-icon">${icon}</span>
        <div class="au-toast-content">
          ${title ? `<div class="au-toast-title">${title}</div>` : ''}
          ${message ? `<div class="au-toast-message">${message}</div>` : ''}
        </div>
        <button class="au-toast-close" onclick="this.parentElement.remove()" aria-label="Close">×</button>
      `;

      this.container.appendChild(toast);

      // Auto remove
      if (duration > 0) {
        setTimeout(() => {
          toast.style.animation = 'au-fade-out 0.3s ease forwards';
          setTimeout(() => toast.remove(), 300);
        }, duration);
      }

      return toast;
    },

    getIcon(type) {
      const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
      };
      return icons[type] || icons.info;
    },

    success(message, title = '') {
      return this.show({ type: 'success', title, message });
    },

    error(message, title = 'Error') {
      return this.show({ type: 'error', title, message });
    },

    warning(message, title = 'Warning') {
      return this.show({ type: 'warning', title, message });
    },

    info(message, title = '') {
      return this.show({ type: 'info', title, message });
    }
  },

  // Dropdown
  dropdown: {
    init() {
      document.querySelectorAll('.au-dropdown').forEach(dropdown => {
        const trigger = dropdown.querySelector('.au-dropdown-trigger') || dropdown.querySelector('button');
        if (trigger) {
          trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggle(dropdown);
          });
        }
      });

      // Close on outside click
      document.addEventListener('click', () => {
        document.querySelectorAll('.au-dropdown-open').forEach(d => {
          d.classList.remove('au-dropdown-open');
        });
      });
    },

    toggle(dropdown) {
      const isOpen = dropdown.classList.contains('au-dropdown-open');

      // Close all others
      document.querySelectorAll('.au-dropdown-open').forEach(d => {
        d.classList.remove('au-dropdown-open');
      });

      if (!isOpen) {
        dropdown.classList.add('au-dropdown-open');
      }
    }
  },

  // Tabs
  tabs: {
    init() {
      document.querySelectorAll('.au-tabs').forEach(tabContainer => {
        const tabs = tabContainer.querySelectorAll('.au-tab');
        const panels = tabContainer.querySelectorAll('.au-tab-panel');

        tabs.forEach((tab, index) => {
          tab.addEventListener('click', () => {
            // Deactivate all
            tabs.forEach(t => t.classList.remove('au-tab-active'));
            panels.forEach(p => p.classList.remove('au-tab-panel-active'));

            // Activate clicked
            tab.classList.add('au-tab-active');
            if (panels[index]) {
              panels[index].classList.add('au-tab-panel-active');
            }
          });
        });
      });
    }
  },

  // Accordion
  accordion: {
    init() {
      document.querySelectorAll('.au-accordion').forEach(accordion => {
        const items = accordion.querySelectorAll('.au-accordion-item');

        items.forEach(item => {
          const header = item.querySelector('.au-accordion-header');
          if (header) {
            header.addEventListener('click', () => {
              const isActive = item.classList.contains('au-accordion-item-active');

              // Close others if needed (optional accordion behavior)
              // items.forEach(i => i.classList.remove('au-accordion-item-active'));

              item.classList.toggle('au-accordion-item-active', !isActive);
            });
          }
        });
      });
    }
  },

  // Form Validation
  validate: {
    init() {
      document.querySelectorAll('form[data-validate]').forEach(form => {
        form.addEventListener('submit', (e) => {
          if (!this.validateForm(form)) {
            e.preventDefault();
          }
        });

        // Real-time validation
        form.querySelectorAll('input, textarea, select').forEach(input => {
          input.addEventListener('blur', () => this.validateField(input));
          input.addEventListener('input', () => this.clearError(input));
        });
      });
    },

    validateForm(form) {
      let isValid = true;
      form.querySelectorAll('[required], [data-validate]').forEach(field => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });
      return isValid;
    },

    validateField(field) {
      const value = field.value.trim();
      const type = field.type;
      const pattern = field.dataset.pattern;
      let isValid = true;
      let message = '';

      // Required check
      if (field.required && !value) {
        isValid = false;
        message = 'This field is required';
      }
      // Email validation
      else if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          message = 'Please enter a valid email';
        }
      }
      // URL validation
      else if (type === 'url' && value) {
        try {
          new URL(value);
        } catch {
          isValid = false;
          message = 'Please enter a valid URL';
        }
      }
      // Pattern validation
      else if (pattern && value) {
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
          isValid = false;
          message = field.dataset.error || 'Invalid format';
        }
      }
      // Min length
      else if (field.dataset.minLength && value.length < parseInt(field.dataset.minLength)) {
        isValid = false;
        message = `Minimum ${field.dataset.minLength} characters required`;
      }

      this.setError(field, isValid, message);
      return isValid;
    },

    setError(field, isValid, message) {
      field.classList.toggle('au-input-error', !isValid);
      field.classList.toggle('au-input-success', isValid && field.value);

      // Find or create error message element
      let errorEl = field.parentElement.querySelector('.au-error-message');
      if (!errorEl) {
        errorEl = document.createElement('span');
        errorEl.className = 'au-error-message';
        errorEl.style.cssText = 'color: var(--au-danger); font-size: 12px; margin-top: 4px; display: block;';
        field.parentElement.appendChild(errorEl);
      }

      errorEl.textContent = isValid ? '' : message;
    },

    clearError(field) {
      field.classList.remove('au-input-error');
      const errorEl = field.parentElement.querySelector('.au-error-message');
      if (errorEl) errorEl.textContent = '';
    }
  },

  // Utility: Debounce
  debounce(fn, delay = 300) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  // Utility: Throttle
  throttle(fn, limit = 300) {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Scroll Reveal Animation
  reveal(options = {}) {
    const {
      selector = '.au-reveal',
      threshold = 0.1,
      rootMargin = '0px 0px -40px 0px'
    } = options;

    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('au-revealed');
        }
      });
    }, { threshold, rootMargin });

    elements.forEach(el => observer.observe(el));
    return observer;
  },

  // Utility: Copy to clipboard
  async copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      this.toast.success('Copied to clipboard');
      return true;
    } catch (err) {
      this.toast.error('Failed to copy');
      return false;
    }
  },

  // Liquid Glass - Advanced glass effect with mouse-reactive highlights
  liquidGlass: {
    _instances: new Map(),

    init() {
      document.querySelectorAll('.au-liquid-glass').forEach(el => {
        this._initElement(el);
      });
    },

    _initElement(el) {
      if (this._instances.has(el)) return;

      const instance = {
        el,
        mouseX: 0,
        mouseY: 0,
        isHovering: false,
        rafId: null,
      };

      // Inject SVG filter for displacement (optional enhancement)
      this._injectFilter(el);

      // Mouse tracking
      const handleMove = (e) => {
        const rect = el.getBoundingClientRect();
        instance.mouseX = e.clientX - rect.left;
        instance.mouseY = e.clientY - rect.top;
        instance.isHovering = true;
        this._updateHighlight(el, instance);
      };

      const handleLeave = () => {
        instance.isHovering = false;
        // Reset to default angle
        el.style.setProperty('--lg-angle', '135deg');
      };

      const handleEnter = () => {
        instance.isHovering = true;
      };

      el.addEventListener('mousemove', handleMove);
      el.addEventListener('mouseleave', handleLeave);
      el.addEventListener('mouseenter', handleEnter);

      // Touch support
      el.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          const touch = e.touches[0];
          const rect = el.getBoundingClientRect();
          instance.mouseX = touch.clientX - rect.left;
          instance.mouseY = touch.clientY - rect.top;
          this._updateHighlight(el, instance);
        }
      }, { passive: true });

      this._instances.set(el, instance);

      // Set default angle
      el.style.setProperty('--lg-angle', '135deg');
    },

    _updateHighlight(el, instance) {
      const rect = el.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate angle from element center to mouse
      const dx = instance.mouseX - centerX;
      const dy = instance.mouseY - centerY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

      // Smooth the angle update
      el.style.setProperty('--lg-angle', `${angle}deg`);
    },

    _injectFilter(el) {
      // Only inject if not already present and element requests it
      if (!el.dataset.lgDisplacement) return;

      const filterId = 'au-lg-filter-' + Math.random().toString(36).substr(2, 9);

      // Create SVG filter
      const svgNS = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('style', 'position:absolute;width:0;height:0;');
      svg.setAttribute('aria-hidden', 'true');

      const defs = document.createElementNS(svgNS, 'defs');
      const filter = document.createElementNS(svgNS, 'filter');
      filter.setAttribute('id', filterId);
      filter.setAttribute('x', '-20%');
      filter.setAttribute('y', '-20%');
      filter.setAttribute('width', '140%');
      filter.setAttribute('height', '140%');

      // Displacement map
      const displacementMap = document.createElementNS(svgNS, 'feDisplacementMap');
      displacementMap.setAttribute('in', 'SourceGraphic');
      displacementMap.setAttribute('in2', 'SourceGraphic');
      displacementMap.setAttribute('scale', '8');
      displacementMap.setAttribute('xChannelSelector', 'R');
      displacementMap.setAttribute('yChannelSelector', 'G');

      // Blur
      const blur = document.createElementNS(svgNS, 'feGaussianBlur');
      blur.setAttribute('stdDeviation', '0.5');

      filter.appendChild(displacementMap);
      filter.appendChild(blur);
      defs.appendChild(filter);
      svg.appendChild(defs);
      document.body.appendChild(svg);

      // Apply filter to element
      el.style.setProperty('--lg-filter', `url(#${filterId})`);
      el.setAttribute('data-lg-filter', filterId);
    },

    // Generate a displacement map canvas (for advanced usage)
    generateDisplacementMap(width, height, cornerRadius = 0.3) {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      // Fill with neutral gray (no displacement)
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, width, height);

      // Create radial displacement from edges
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const nx = (x / width) - 0.5;
          const ny = (y / height) - 0.5;

          // Distance from center (elliptical)
          const dist = Math.sqrt(nx * nx * 4 + ny * ny * 4);
          const edgeFactor = Math.max(0, dist - 0.3) / 0.7;

          // Displacement intensity at edges
          const intensity = edgeFactor * edgeFactor * 40;

          const angle = Math.atan2(ny, nx);
          const dx = Math.cos(angle) * intensity;
          const dy = Math.sin(angle) * intensity;

          const i = (y * width + x) * 4;
          data[i] = 128 + dx;     // R: X displacement
          data[i + 1] = 128 + dy; // G: Y displacement
          data[i + 2] = 128;      // B
          data[i + 3] = 255;      // A
        }
      }

      ctx.putImageData(imageData, 0, 0);
      return canvas.toDataURL();
    },

    destroy() {
      this._instances.forEach((instance, el) => {
        // Cleanup would go here if needed
      });
      this._instances.clear();
    }
  },

  // Initialize all components
  init() {
    this.theme.init();
    this.dropdown.init();
    this.tabs.init();
    this.accordion.init();
    this.validate.init();
    this.liquidGlass.init();

    // Global event listeners
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.dataset.modalOpen;
        this.modal.open(modalId);
      });
    });

    document.querySelectorAll('[data-modal-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.dataset.modalClose;
        if (modalId) {
          this.modal.close(modalId);
        } else {
          const modal = btn.closest('.au-modal-overlay');
          if (modal) modal.classList.remove('au-modal-overlay-active');
        }
      });
    });

    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', () => this.theme.next());
    });

    // 主题选择器
    document.querySelectorAll('[data-theme]').forEach(btn => {
      const theme = btn.dataset.theme;
      if (theme) {
        btn.addEventListener('click', () => this.theme.to(theme));
      }
    });

    // Close modal on backdrop click
    document.querySelectorAll('.au-modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('au-modal-overlay-active');
          document.body.style.overflow = '';
        }
      });
    });

    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.modal.closeAll();
      }
    });

    console.log(`AppleUI v${this.version} initialized`);
  }
};

// Icon System
AppleUI.icon = {
  // Built-in icon names
  icons: [
    'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down',
    'chevron-left', 'chevron-right', 'chevron-up', 'chevron-down',
    'close', 'check', 'plus', 'minus', 'menu', 'search', 'more',
    'home', 'user', 'settings', 'heart', 'star', 'trash', 'edit',
    'copy', 'share', 'download', 'upload', 'refresh',
    'info', 'warning', 'error', 'success',
    'dots', 'ellipsis', 'dots-h', 'dots-v'
  ],

  // Create icon element
  create(name, options = {}) {
    const {
      size = 'md',
      color = null,
      className = ''
    } = options;

    const icon = document.createElement('i');
    icon.className = `au-icon au-icon-${name} au-icon-${size} ${className}`;

    if (color) {
      icon.classList.add(`au-icon-${color}`);
    }

    return icon;
  },

  // Insert icon into element
  insert(element, name, options = {}) {
    const icon = this.create(name, options);
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (element) {
      element.insertBefore(icon, element.firstChild);
    }
    return icon;
  },

  // Load external SVG icon
  load(url, options = {}) {
    const {
      size = 'md',
      className = ''
    } = options;

    const icon = document.createElement('span');
    icon.className = `au-icon au-icon-external au-icon-${size} ${className}`;
    icon.style.backgroundImage = `url(${url})`;

    return icon;
  },

  // Initialize icons from data attributes
  init() {
    document.querySelectorAll('[data-icon]').forEach(el => {
      const name = el.dataset.icon;
      const size = el.dataset.iconSize || 'md';
      const color = el.dataset.iconColor || null;

      el.classList.add('au-icon', `au-icon-${name}`, `au-icon-${size}`);
      if (color) {
        el.classList.add(`au-icon-${color}`);
      }
    });

    // Auto-add icons to buttons with data-icon attribute
    document.querySelectorAll('[data-btn-icon]').forEach(btn => {
      const iconName = btn.dataset.btnIcon;
      const iconPosition = btn.dataset.iconPosition || 'left';
      const iconSize = btn.dataset.iconSize || 'sm';

      const icon = this.create(iconName, { size: iconSize });

      if (iconPosition === 'left') {
        btn.insertBefore(icon, btn.firstChild);
      } else {
        btn.appendChild(icon);
      }

      btn.classList.add('au-icon-text');
    });
  }
};

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    AppleUI.init();
    AppleUI.icon.init();
  });
} else {
  AppleUI.init();
  AppleUI.icon.init();
}

// Expose to global scope
window.AU = window.AppleUI = AppleUI;
