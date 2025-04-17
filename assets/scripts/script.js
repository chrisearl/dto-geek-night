document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM is fully loaded and ready');
  init();
  
  // Get menu toggle button and navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const body = document.body;
  const header = document.querySelector('.header');
  
  // Toggle menu open/closed
  menuToggle.addEventListener('click', function() {
    body.classList.toggle('menu-open');
  });
  
  // Close menu when clicking a link (mobile)
  const navLinks = document.querySelectorAll('.navigation a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      body.classList.remove('menu-open');
    });
  });
  
  // Close menu when clicking outside navigation
  document.addEventListener('click', function(event) {
    const isNavigation = event.target.closest('.navigation');
    const isMenuToggle = event.target.closest('.menu-toggle');
    
    if (!isNavigation && !isMenuToggle && body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
    }
  });
  
  // Improved header scroll effect with throttling
  let scrollPosition = 0;
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
    
    if (!ticking) {
      window.requestAnimationFrame(function() {
        if (scrollPosition > 10) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        ticking = false;
      });
      
      ticking = true;
    }
  });
  
  // Force initial check in case page loads scrolled
  setTimeout(function() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    }
  }, 100);
});

function init() {
  console.info('Application initialized');
}
