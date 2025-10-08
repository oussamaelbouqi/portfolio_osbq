// ========================================
// Initialize when DOM is ready
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle with animation
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => mobileMenu.style.opacity = '1', 10);
      } else {
        mobileMenu.style.opacity = '0';
        setTimeout(() => mobileMenu.classList.add('hidden'), 200);
      }
    });
  }

  // ========================================
  // Smooth scroll with offset
  // ========================================
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(l => {
    l.addEventListener('click', e => {
      const href = l.getAttribute('href');
      if (href === '#') return; // Skip empty anchors
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        mobileMenu?.classList.add('hidden');
      }
    })
  });

  // ========================================
  // Active nav highlighting on scroll
  // ========================================
  const sections = ['home','about','projects','experience','skills','contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const navLinks = [...document.querySelectorAll('.nav-link')];

let ticking = false;
function updateActiveNav() {
  const pos = window.scrollY + 100;
  let current = '';
  
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (pos >= top && pos < top + height) {
      current = `#${sec.id}`;
    }
  });
  
  navLinks.forEach(a => {
    a.classList.toggle('text-brand', a.getAttribute('href') === current);
  });
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateActiveNav);
    ticking = true;
  }
});

// ========================================
// Reveal on scroll with IntersectionObserver
// ========================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      // Optionally unobserve after reveal
      // revealObserver.unobserve(entry.target);
    }
  })
}, { 
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('[data-animate]').forEach(el => revealObserver.observe(el));

// ========================================
// Animate skill bars on scroll
// ========================================
const skillBars = document.querySelectorAll('.skill .bar span');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
      skillObserver.unobserve(bar);
    }
  })
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ========================================
// Scroll progress bar
// ========================================
const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
  if (!scrollProgress) return;
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = `${scrolled}%`;
}

window.addEventListener('scroll', updateScrollProgress);

// ========================================
// Back to top button
// ========================================
const backToTopBtn = document.getElementById('backToTop');

function updateBackToTop() {
  if (!backToTopBtn) return;
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    backToTopBtn.classList.add('opacity-100');
  } else {
    backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    backToTopBtn.classList.remove('opacity-100');
  }
}

window.addEventListener('scroll', updateBackToTop);

backToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// Header background on scroll
// ========================================
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    header?.classList.add('shadow-md');
  } else {
    header?.classList.remove('shadow-md');
  }
  
  lastScroll = currentScroll;
});

// ========================================
// Contact form handling is done in enhancements.js
// ========================================
// Form handling moved to ContactFormHandler class in enhancements.js
// for better validation and user experience

// ========================================
// Typing effect for hero (optional)
// ========================================
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Uncomment to enable typing effect on hero title
// const heroTitle = document.querySelector('#home h1');
// if (heroTitle) {
//   const originalText = heroTitle.textContent;
//   typeWriter(heroTitle, originalText, 50);
// }

// ========================================
// Year in footer
// ========================================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ========================================
// Keyboard navigation enhancement
// ========================================
document.addEventListener('keydown', (e) => {
  // ESC to close mobile menu
  if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
});

// ========================================
// Lazy load images (if you add real images)
// ========================================
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ========================================
// Counter animation
// ========================================
const counters = document.querySelectorAll('.counter');
let countersAnimated = false;

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersAnimated) {
      countersAnimated = true;
      animateCounters();
    }
  })
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
}

// ========================================
// Parallax effect on scroll (subtle)
// ========================================
const heroSection = document.querySelector('#home');
window.addEventListener('scroll', () => {
  if (heroSection && window.scrollY < window.innerHeight) {
    const scrolled = window.scrollY;
    heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroSection.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
  }
});

// ========================================
// Copy email on click (with toast notification)
// ========================================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const email = link.getAttribute('href').replace('mailto:', '').split('?')[0];
    if (navigator.clipboard && window.Toast) {
      navigator.clipboard.writeText(email).then(() => {
        window.Toast.show('Email copied to clipboard! 📋', 'success');
      }).catch(() => {
        console.log('Email:', email);
      });
    }
  });
});

// ========================================
// Console easter egg
// ========================================
console.log(
  '%cHey there! 👋',
  'color: #2563eb; font-size: 24px; font-weight: bold;'
);
console.log(
  '%cLooking at the code? Feel free to reach out!',
  'color: #64748b; font-size: 14px;'
);
console.log(
  '%cEmail: elbouqi.oussama@gmail.com',
  'color: #2563eb; font-size: 12px;'
);

// ========================================
// Performance: Debounce scroll events
// ========================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to non-critical scroll handlers if needed
// Example: window.addEventListener('scroll', debounce(someFunction, 100));

}); // End of DOMContentLoaded
