// ========================================
// Inline Scripts Extracted from HTML
// ========================================

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
});

// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      
      window.location.href = `mailto:elbouqi.oussama@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});

// Set current year
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Projects Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'text-white');
        btn.classList.add('bg-white/80', 'backdrop-blur-sm', 'text-gray-700', 'border', 'border-gray-200');
      });
      
      this.classList.add('active');
      this.classList.remove('bg-white/80', 'backdrop-blur-sm', 'text-gray-700', 'border', 'border-gray-200');
      this.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'text-white');
      
      // Filter projects
      projectItems.forEach(item => {
        if (filterValue === 'all') {
          item.style.display = 'block';
          item.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
          if (item.classList.contains(filterValue)) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.5s ease-out';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
});

// Add CSS animation for project filters
document.addEventListener('DOMContentLoaded', function() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .project-item {
      animation: fadeInUp 0.5s ease-out;
    }
    
    .filter-btn {
      transition: all 0.3s ease;
    }
    
    .filter-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
  `;
  document.head.appendChild(style);
});

// Dark Mode Fix for Specific Elements
function applyDarkModeToSpecificElements() {
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        updateSpecificElements();
      }
    });
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
  });

  function updateSpecificElements() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Fix Crystal Reports spans
    const crystalReportsSpans = document.querySelectorAll('span');
    crystalReportsSpans.forEach(span => {
      if (span.textContent.includes('Crystal Reports')) {
        if (isDarkMode) {
          // Apply dark background instead of gradient text
          span.style.background = 'rgba(30, 41, 59, 0.8)';
          span.style.color = '#f1f5f9';
          span.style.border = '1px solid #334155';
        } else {
          // Reset to original styling
          span.style.background = '';
          span.style.color = '';
          span.style.border = '';
        }
      }
    });

    // Fix English (Basic) container
    const englishContainers = document.querySelectorAll('.bg-gradient-to-r.from-yellow-50.to-orange-50');
    englishContainers.forEach(container => {
      if (isDarkMode) {
        container.style.background = 'rgba(30, 41, 59, 0.6)';
        const spans = container.querySelectorAll('span');
        spans.forEach(span => {
          span.style.color = '#f1f5f9';
        });
      } else {
        container.style.background = '';
        const spans = container.querySelectorAll('span');
        spans.forEach(span => {
          span.style.color = '';
        });
      }
    });

    // Fix other language containers
    const otherLangContainers = document.querySelectorAll('.bg-gradient-to-r.from-green-50.to-emerald-50, .bg-gradient-to-r.from-blue-50.to-sky-50');
    otherLangContainers.forEach(container => {
      if (isDarkMode) {
        container.style.background = 'rgba(30, 41, 59, 0.6)';
        const spans = container.querySelectorAll('span');
        spans.forEach(span => {
          span.style.color = '#f1f5f9';
        });
      } else {
        container.style.background = '';
        const spans = container.querySelectorAll('span');
        spans.forEach(span => {
          span.style.color = '';
        });
      }
    });

    // Fix all skill cards with gradients
    const skillCards = document.querySelectorAll('.group.bg-gradient-to-br');
    skillCards.forEach(card => {
      if (isDarkMode) {
        card.style.background = 'rgba(30, 41, 59, 0.6)';
        card.style.borderColor = '#334155';
        const spans = card.querySelectorAll('span');
        spans.forEach(span => {
          span.style.color = '#f1f5f9';
        });
      } else {
        card.style.background = '';
        card.style.borderColor = '';
        const spans = card.querySelectorAll('span');
        spans.forEach(span => {
          span.style.color = '';
        });
      }
    });

    // Fix project cards specifically
    const projectCards = document.querySelectorAll('.project-item, .bg-white\\/80');
    projectCards.forEach(card => {
      if (isDarkMode) {
        card.style.background = 'rgba(30, 41, 59, 0.8)';
        card.style.borderColor = '#334155';
      } else {
        card.style.background = '';
        card.style.borderColor = '';
      }
    });
  }

  // Initial call
  updateSpecificElements();
}

// Initialize dark mode fixes when DOM is loaded
document.addEventListener('DOMContentLoaded', applyDarkModeToSpecificElements);

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered successfully:', registration.scope);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content available, show update notification
              showUpdateNotification();
            }
          });
        });
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Show update notification
function showUpdateNotification() {
  if (confirm('New content is available! Would you like to refresh to get the latest version?')) {
    window.location.reload();
  }
}

// Performance monitoring
window.addEventListener('load', () => {
  // Send performance metrics to service worker
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'PERFORMANCE_MARK',
      mark: 'page-load-complete'
    });
  }
});
