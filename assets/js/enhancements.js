// ========================================
// Toast Notification System
// ========================================
class Toast {
  constructor() {
    this.container = this.createContainer();
  }

  createContainer() {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed top-20 right-4 z-[200] space-y-2';
      document.body.appendChild(container);
    }
    return container;
  }

  show(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    const icons = {
      success: '✓',
      error: '✕',
      info: 'ℹ',
      warning: '⚠'
    };
    const colors = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      info: 'bg-blue-500',
      warning: 'bg-yellow-500'
    };

    toast.className = `${colors[type]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px] notification-slide-in`;
    toast.innerHTML = `
      <span class="text-xl">${icons[type]}</span>
      <span class="flex-1">${message}</span>
      <button class="hover:opacity-75 transition-opacity" onclick="this.parentElement.remove()">✕</button>
    `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(400px)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
}

const toast = new Toast();

// ========================================
// Project Filter System
// ========================================
class ProjectFilter {
  constructor() {
    this.projects = document.querySelectorAll('.card[data-animate]');
    this.filterButtons = [];
    this.init();
  }

  init() {
    // Extract unique technologies from projects
    const technologies = new Set();
    this.projects.forEach(project => {
      const techs = project.querySelectorAll('.tech span');
      techs.forEach(tech => technologies.add(tech.textContent.trim()));
    });

    // Create filter buttons (optional - can be added to HTML)
    this.createFilterUI(Array.from(technologies));
  }

  createFilterUI(technologies) {
    const projectSection = document.querySelector('#projects .container');
    if (!projectSection) return;

    const filterContainer = document.createElement('div');
    filterContainer.className = 'flex flex-wrap gap-2 mb-6';
    filterContainer.innerHTML = `
      <button class="filter-btn active px-4 py-2 rounded-full text-sm font-medium bg-brand text-white" data-filter="all">
        All Projects
      </button>
    `;

    // Add to DOM before project grid
    const projectGrid = projectSection.querySelector('.grid');
    projectSection.insertBefore(filterContainer, projectGrid);

    // Add filter functionality
    const allBtn = filterContainer.querySelector('[data-filter="all"]');
    allBtn.addEventListener('click', () => this.filter('all'));
  }

  filter(category) {
    this.projects.forEach(project => {
      if (category === 'all') {
        project.style.display = '';
        project.classList.add('fade-in-up');
      } else {
        const techs = Array.from(project.querySelectorAll('.tech span'))
          .map(t => t.textContent.trim());
        
        if (techs.includes(category)) {
          project.style.display = '';
          project.classList.add('fade-in-up');
        } else {
          project.style.display = 'none';
        }
      }
    });
  }
}

// ========================================
// Form Validation & Success State
// ========================================
class ContactFormHandler {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (this.form) this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    } else if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email';
      }
    }

    if (!isValid) {
      this.showError(field, errorMessage);
    } else {
      this.clearError(field);
    }

    return isValid;
  }

  showError(field, message) {
    this.clearError(field);
    field.classList.add('border-red-500');
    const error = document.createElement('p');
    error.className = 'text-red-500 text-sm mt-1 error-message';
    error.textContent = message;
    field.parentElement.appendChild(error);
  }

  clearError(field) {
    field.classList.remove('border-red-500');
    const error = field.parentElement.querySelector('.error-message');
    if (error) error.remove();
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const inputs = this.form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    if (!isValid) {
      toast.show('Please fix the errors before submitting', 'error');
      return;
    }

    // Show success state
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate sending (replace with actual form submission)
    setTimeout(() => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      
      window.location.href = `mailto:elbouqi.oussama@gmail.com?subject=${subject}&body=${body}`;
      
      toast.show('Message sent successfully! 🎉', 'success');
      this.form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1000);
  }
}

// ========================================
// Smooth Scroll Spy (Enhanced)
// ========================================
class ScrollSpy {
  constructor(sections, navLinks) {
    this.sections = sections;
    this.navLinks = navLinks;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.update());
    this.update();
  }

  update() {
    const scrollPos = window.scrollY + 100;
    
    this.sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        this.navLinks.forEach(link => {
          link.classList.remove('text-brand');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-brand');
          }
        });
      }
    });
  }
}

// ========================================
// Lazy Load Images with Blur Effect
// ========================================
class LazyImageLoader {
  constructor() {
    this.images = document.querySelectorAll('img[data-src]');
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    this.images.forEach(img => observer.observe(img));
  }

  loadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) return;

    img.style.filter = 'blur(10px)';
    img.style.transition = 'filter 0.3s';

    const tempImg = new Image();
    tempImg.onload = () => {
      img.src = src;
      img.removeAttribute('data-src');
      setTimeout(() => {
        img.style.filter = 'blur(0)';
      }, 50);
    };
    tempImg.src = src;
  }
}

// ========================================
// Initialize All Enhancements
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize contact form handler
  new ContactFormHandler('contactForm');

  // Initialize project filter (optional)
  // new ProjectFilter();

  // Initialize lazy image loader
  new LazyImageLoader();

  // Add ripple effect to buttons
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.classList.add('ripple');
  });

  // Animate elements on scroll
  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    animateOnScroll.observe(el);
  });
});

// ========================================
// Export for use in other scripts
// ========================================
window.Toast = toast;
window.copyToClipboard = (text, msg) => toast.show(msg || 'Copied!', 'success');
