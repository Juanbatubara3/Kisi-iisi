document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const header = document.querySelector('header');

  // Smooth Scroll Behavior
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = document.querySelector(link.getAttribute('href'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Change Header on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#34495e';
      header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
    } else {
      header.style.backgroundColor = '#2c3e50';
      header.style.boxShadow = 'none';
    }
  });

  // Simple Project Modal Viewer
  const projects = document.querySelectorAll('.project img');
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
  modal.style.display = 'none';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '999';

  const modalImg = document.createElement('img');
  modalImg.style.maxWidth = '80%';
  modalImg.style.borderRadius = '10px';
  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  projects.forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.style.display = 'flex';
    });
  });

  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
