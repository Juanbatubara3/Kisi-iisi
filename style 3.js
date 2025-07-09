const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const nextBtn = document.createElement('button');
const prevBtn = document.createElement('button');
let currentIndex = 0;

// Button styles
[nextBtn, prevBtn].forEach(btn => {
  btn.style.position = 'absolute';
  btn.style.top = '50%';
  btn.style.transform = 'translateY(-50%)';
  btn.style.fontSize = '2rem';
  btn.style.background = 'rgba(255,255,255,0.5)';
  btn.style.border = 'none';
  btn.style.padding = '10px';
  btn.style.cursor = 'pointer';
  btn.style.borderRadius = '50%';
});

nextBtn.textContent = '▶';
prevBtn.textContent = '◀';
nextBtn.style.right = '30px';
prevBtn.style.left = '30px';

lightbox.appendChild(nextBtn);
lightbox.appendChild(prevBtn);

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex].src;
  lightbox.style.display = 'flex';
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showNext();
});

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showPrev();
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Keyboard support
window.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'Escape') lightbox.style.display = 'none';
  }
});
