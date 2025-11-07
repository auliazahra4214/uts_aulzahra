document.addEventListener("DOMContentLoaded", function() {
  // JAM
function updateClock() {
  const now = new Date();
  const jam = String(now.getHours()).padStart(2, "0");
  const menit = String(now.getMinutes()).padStart(2, "0");
  const detik = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("digitalClock").textContent = `${jam}:${menit}:${detik}`;
}

setInterval(updateClock, 1000);
updateClock();


  // Pause tulisan berjalan ketika di-hover
const marquee = document.querySelector(".marquee-text");
const container = document.querySelector(".marquee-container");

container.addEventListener("mouseenter", () => {
  marquee.style.animationPlayState = "paused";
});

container.addEventListener("mouseleave", () => {
  marquee.style.animationPlayState = "running";
});


const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const contentWrapper = document.querySelector(".content-wrapper");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  contentWrapper.classList.toggle("full");

  // Ganti arah ikon
  const icon = sidebarToggle.querySelector("i");
  if (sidebar.classList.contains("closed")) {
    icon.classList.replace("fa-chevron-left", "fa-chevron-right");
  } else {
    icon.classList.replace("fa-chevron-right", "fa-chevron-left");
  }
});



/* ====== ABOUT US - PROFIL ====== */
// Animasi kecil saat scroll
document.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".about-profile");
  const pos = aboutSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (pos < windowHeight - 100) {
    aboutSection.classList.add("visible");
  }
});


});






// Ambil elemen-elemen
const photoFrames = document.querySelectorAll('.photo-frame');
const popupGaleri = document.getElementById('popup-galeri');
const popupImg = document.getElementById('popup-galeri-img');
const popupTitle = document.querySelector('.popup-galeri-text h3');
const popupCaption = document.getElementById('popup-galeri-caption');
const closeBtn = document.querySelector('.close-galeri-btn');

// Saat salah satu foto diklik
photoFrames.forEach(frame => {
  frame.addEventListener('click', () => {
    const imgSrc = frame.querySelector('img').src;
    const title = frame.dataset.title;
    const caption = frame.dataset.caption;

    popupImg.src = imgSrc;
    popupTitle.textContent = title;
    popupCaption.textContent = caption;

    popupGaleri.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // cegah scroll saat popup terbuka
  });
});

// Saat tombol X diklik
closeBtn.addEventListener('click', () => {
  popupGaleri.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Tutup popup saat klik area luar konten
popupGaleri.addEventListener('click', (e) => {
  if (e.target === popupGaleri) {
    popupGaleri.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});


