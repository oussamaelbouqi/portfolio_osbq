// ========================================
// Performance and Animation Improvements
// ========================================

class PortfolioEnhancements {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupParallaxEffects();
    this.setupTypewriterEffect();
    this.setupSmoothScrolling();
    this.setupProgressiveImageLoading();
    this.setupPerformanceOptimizations();
    this.setupAccessibilityEnhancements();
  }

  // Scroll-triggered animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add staggered animation for child elements
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .project-item, .group').forEach(el => {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
    });
  }

  // Parallax scrolling effects
  setupParallaxEffects() {
    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
      
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
  }

  // Typewriter effect for hero section
  setupTypewriterEffect() {
    const typewriterElement = document.querySelector('[data-typewriter]');
    if (!typewriterElement) return;

    const text = typewriterElement.textContent;
    const speed = 100;
    let i = 0;

    typewriterElement.textContent = '';
    typewriterElement.style.borderRight = '2px solid';
    typewriterElement.style.animation = 'blink 1s infinite';

    const typeWriter = () => {
      if (i < text.length) {
        typewriterElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        typewriterElement.style.borderRight = 'none';
      }
    };

    // Start typewriter effect after a delay
    setTimeout(typeWriter, 1000);
  }

  // Enhanced smooth scrolling
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Progressive image loading
  setupProgressiveImageLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Add loading animation
          img.style.filter = 'blur(5px)';
          img.style.transition = 'filter 0.3s';
          
          img.onload = () => {
            img.style.filter = 'blur(0)';
            img.classList.add('loaded');
          };
          
          // Load the image
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Performance optimizations
  setupPerformanceOptimizations() {
    // Debounce resize events
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.handleResize();
      }, 250);
    });

    // Preload critical resources
    this.preloadCriticalResources();
    
    // Optimize animations for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
  }

  handleResize() {
    // Recalculate layouts and animations on resize
    const event = new CustomEvent('portfolioResize');
    window.dispatchEvent(event);
  }

  preloadCriticalResources() {
    const criticalImages = [
      'assets/images/avatar.svg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  // Accessibility enhancements
  setupAccessibilityEnhancements() {
    // Add skip to content link
    this.addSkipToContent();
    
    // Enhance keyboard navigation
    this.enhanceKeyboardNavigation();
    
    // Add ARIA labels where needed
    this.addAriaLabels();
    
    // Focus management
    this.setupFocusManagement();
  }

  addSkipToContent() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  enhanceKeyboardNavigation() {
    // Add keyboard support for custom interactive elements
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }

  addAriaLabels() {
    // Add ARIA labels to interactive elements without text
    document.querySelectorAll('button:not([aria-label])').forEach(btn => {
      if (!btn.textContent.trim()) {
        btn.setAttribute('aria-label', 'Interactive button');
      }
    });
  }

  setupFocusManagement() {
    // Trap focus in modals and overlays
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }
}

// ========================================
// Advanced Visual Effects
// ========================================

class VisualEffects {
  constructor() {
    this.init();
  }

  init() {
    this.setupMouseTracker();
    this.setupParticleSystem();
    this.setupGlowEffects();
    this.setupMorphingShapes();
  }

  // Mouse tracking for interactive effects
  setupMouseTracker() {
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update CSS custom properties for mouse position
      document.documentElement.style.setProperty('--mouse-x', mouseX + 'px');
      document.documentElement.style.setProperty('--mouse-y', mouseY + 'px');
    });

    // Add interactive glow effect to cards
    document.querySelectorAll('.project-item, .group').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--glow-x', x + 'px');
        card.style.setProperty('--glow-y', y + 'px');
      });
    });
  }

  // Particle system for background effects
  setupParticleSystem() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }

  // Dynamic glow effects
  setupGlowEffects() {
    const style = document.createElement('style');
    style.textContent = `
      .glow-effect {
        position: relative;
      }
      
      .glow-effect::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c);
        border-radius: inherit;
        z-index: -1;
        filter: blur(10px);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .glow-effect:hover::before {
        opacity: 0.7;
      }
    `;
    document.head.appendChild(style);
  }

  // Morphing background shapes
  setupMorphingShapes() {
    const shapes = document.querySelectorAll('.morphing-shape');
    
    shapes.forEach(shape => {
      let morphValue = 0;
      
      const morph = () => {
        morphValue += 0.01;
        const scale = 1 + Math.sin(morphValue) * 0.1;
        const rotate = Math.sin(morphValue * 0.5) * 10;
        
        shape.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
        requestAnimationFrame(morph);
      };
      
      morph();
    });
  }
}

// ========================================
// Initialize Enhancements
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioEnhancements();
  new VisualEffects();
  
  // Add loading complete class
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
});

// Export for potential external use
window.PortfolioEnhancements = PortfolioEnhancements;
window.VisualEffects = VisualEffects;
