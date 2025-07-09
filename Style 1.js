document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector('.card');
  const sensitivity = 25;

  // Buat efek 3D berdasarkan posisi mouse
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * sensitivity * 2;
    const rotateX = -((y / rect.height) - 0.5) * sensitivity * 2;

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
  });

  // Reset transform saat mouse keluar
  card.addEventListener('mouseleave', () => {
    card.style.transition = "transform 0.5s ease";
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    setTimeout(() => {
      card.style.transition = "";
    }, 500);
  });

  // Tambahkan event click untuk flip info
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    if (card.classList.contains('flipped')) {
      card.innerHTML = `<h2>Info Detail</h2><p>Ini adalah konten tambahan dari kartu. Klik lagi untuk kembali.</p>`;
    } else {
      card.innerHTML = `<h2>3D Card</h2><p>Efek Hover Interaktif</p>`;
    }
  });
});
