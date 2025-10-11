// ========================================
// Fixed Main JavaScript - Clean Version
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded successfully!');
  
  // Initialize theme and language managers
  try {
    if (typeof ThemeManager !== 'undefined') {
      window.themeManager = new ThemeManager();
      console.log('ThemeManager initialized');
    }
    if (typeof LanguageManager !== 'undefined') {
      window.languageManager = new LanguageManager();
      console.log('LanguageManager initialized');
    }
  } catch (error) {
    console.error('Error initializing managers:', error);
  }
  
  // Hide loading screen
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 300);
    }, 500);
  }
  
  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ 
          top: targetPosition, 
          behavior: 'smooth' 
        });
        
        // Close mobile menu if open
        if (mobileMenu) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
  
  // Update year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Project filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter projects
      projectItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
          item.style.opacity = '1';
        } else {
          item.style.display = 'none';
          item.style.opacity = '0';
        }
      });
    });
  });
  
  // Navigation scroll effect
  const nav = document.querySelector('nav');
  const updateNavOnScroll = () => {
    if (window.scrollY > 50) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  };
  
  // Simple scroll progress
  const updateScrollProgress = () => {
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      scrollProgress.style.width = `${scrolled}%`;
    }
  };
  
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateNavOnScroll();
  });
  
  console.log('All functionality initialized successfully!');
});
