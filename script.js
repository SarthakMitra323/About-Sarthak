document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.glass-card').forEach(el => observer.observe(el));

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

  // Animated background particles
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-particles';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // Nexus AI glowing button pulse
  const nexusBtn = document.querySelector('#nexus .btn');
  if (nexusBtn) {
    nexusBtn.style.animation = 'pulseGlow 2s infinite';
  }
});
