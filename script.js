document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal animations using JS
  const revealElements = document.querySelectorAll('section, .glass-card');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.transition = 'all 0.8s ease';
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Mobile navigation toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      navLinks.classList.remove('active');
    });
  });

  // Typing animation for tagline
  const tagline = document.querySelector('.hero-content p');
  const text = tagline.textContent;
  tagline.textContent = '';
  let index = 0;
  function typeWriter() {
    if (index < text.length) {
      tagline.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 70);
    }
  }
  typeWriter();

  // Initial hidden state for reveal elements
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
  });
});
