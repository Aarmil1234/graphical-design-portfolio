// script.js

// ✅ List of all your image files
const images = [
  "IMG-20240614-WA0005(1).jpg",
  "IMG-20240614-WA0017.jpg",
  "IMG-20240614-WA0018.jpg",
  "IMG-20240614-WA0019.jpg",
  "IMG-20240614-WA0020.jpg",
  "IMG-20240614-WA0021.jpg",
  "IMG-20240614-WA0022.jpg",
  "IMG-20240614-WA0023.jpg",
  "IMG-20240614-WA0024.jpg",
  "IMG-20240614-WA0026.jpg",
  "IMG-20240614-WA0032.jpg",
  "IMG-20240626-WA0000(1).jpg",
  "IMG-20240626-WA0002.jpg",
  "IMG-20240626-WA0003.jpg",
  "IMG-20240626-WA0004.jpg",
  "IMG-20240626-WA0005.jpg",
  "IMG-20240626-WA0006.jpg",
  "IMG-20240626-WA0008.jpg",
  "IMG-20240626-WA0009.jpg",
  "IMG-20240626-WA0010.jpg",
  "IMG-20240626-WA0011.jpg",
  "IMG-20240626-WA0012.jpg",
  "IMG-20240626-WA0013.jpg",
  "IMG-20240626-WA0014.jpg",
  "IMG-20240626-WA0016.jpg",
  "IMG-20240626-WA0017.jpg",
  "IMG-20240626-WA0018.jpg",
  "IMG-20240626-WA0019.jpg",
  "IMG-20240626-WA0020.jpg",
  "IMG-20240626-WA0021.jpg",
  "IMG-20240626-WA0023.jpg",
  "IMG-20240626-WA0024.jpg",
  "IMG-20240626-WA0025.jpg",
  "IMG-20240626-WA0026.jpg",
  "IMG-20240626-WA0027.jpg",
  "IMG-20240626-WA0028.jpg",
  "IMG-20240626-WA0029.jpg",
  "IMG-20240626-WA0030.jpg",
  "IMG-20240626-WA0031.jpg",
  "IMG-20240626-WA0032.jpg",
  "IMG-20240626-WA0033.jpg",
  "IMG-20240626-WA0034.jpg",
  "IMG-20240626-WA0036.jpg",
  "IMG-20240626-WA0038.jpg",
  "IMG-20240626-WA0039.jpg",
  "IMG-20240626-WA0040.jpg",
  "IMG-20240626-WA0041.jpg",
  "IMG-20240626-WA0042.jpg",
  "IMG-20240626-WA0043.jpg",
  "IMG-20240626-WA0044.jpg",
  "IMG-20240626-WA0046.jpg",
  "IMG-20240626-WA0047.jpg",
  "IMG-20240626-WA0048.jpg",
  "IMG-20240704-WA0020.jpg",
  "IMG-20240704-WA0026.jpg",
  "IMG-20240704-WA0027.jpg",
  "IMG-20240704-WA0028.jpg",
  "IMG-20240704-WA0029.jpg",
  "IMG-20240704-WA0030.jpg",
  "IMG-20240704-WA0031.jpg",
  "IMG-20240704-WA0032.jpg",
  "IMG-20240704-WA0033.jpg",
  "IMG-20240704-WA0034.jpg",
  "IMG-20240704-WA0036.jpg",
  "IMG-20240704-WA0037.jpg",
  "IMG-20240704-WA0039.jpg",
  "IMG-20240704-WA0040.jpg",
  "IMG-20240704-WA0041.jpg",
  "IMG-20240704-WA0042.jpg",
  "IMG-20240704-WA0043.jpg",
  "IMG-20240704-WA0044.jpg",
  "IMG-20240704-WA0045.jpg",
  "IMG-20240704-WA0046.jpg",
  "IMG-20240704-WA0047.jpg",
  "IMG-20240704-WA0048.jpg",
  "IMG-20240704-WA0049.jpg",
  "IMG-20240704-WA0050.jpg",
  "IMG-20240704-WA0051.jpg",
  "IMG-20240704-WA0052.jpg",
  "IMG-20240704-WA0053.jpg",
  "IMG-20240704-WA0055.jpg",
  "IMG-20240704-WA0056.jpg",
  "IMG-20240704-WA0057.jpg",
  "IMG-20240704-WA0058.jpg",
  "IMG-20240704-WA0059.jpg",
  "IMG-20240704-WA0060.jpg",
  "IMG-20240704-WA0061.jpg",
  "IMG-20240704-WA0062.jpg",
  "IMG-20240704-WA0063.jpg",
  "IMG-20240704-WA0064.jpg",
  "IMG-20240704-WA0065.jpg",
  "IMG-20240704-WA0066.jpg",
  "IMG-20240704-WA0067.jpg",
  "IMG-20240704-WA0068.jpg",
  "IMG-20240704-WA0069.jpg",
  "IMG-20240704-WA0070.jpg",
  "IMG-20240704-WA0071.jpg",
  "IMG-20240704-WA0072.jpg",
  "IMG-20240704-WA0074.jpg",
  "IMG-20240704-WA0076.jpg",
  "IMG-20240704-WA0078.jpg",
  "IMG-20240704-WA0079.jpg",
  "IMG-20240704-WA0080.jpg",
  "IMG-20240704-WA0081.jpg",
  "IMG-20240704-WA0082.jpg",
  "IMG-20240704-WA0083.jpg",
  "IMG-20240706-WA0004.jpg",
  "IMG-20240712-WA0007.jpg",
  "IMG-20240729-WA0002(1).jpg",
  "IMG-20240818-WA0005.jpg",
  "IMG-20240818-WA0006.jpg",
  "IMG-20240818-WA0007(1).jpg",
  "IMG-20240823-WA0000.jpg",
  "IMG-20240823-WA0007(1).jpg",
  "IMG-20240823-WA0008(1).jpg",
  "IMG-20240907-WA0001(1).jpg",
  "IMG-20240907-WA0002.jpg",
  "IMG-20240907-WA0003(1).jpg",
  "IMG-20240910-WA0002.jpg",
  "IMG-20240910-WA0007.jpg",
  "IMG-20240910-WA0009.jpg",
  "IMG-20240910-WA0010.jpg",
  "IMG-20240910-WA0012.jpg",
  "IMG-20240910-WA0013.jpg",
  "IMG-20240910-WA0014.jpg",
  "IMG-20240910-WA0015.jpg",
  "IMG-20240910-WA0017.jpg",
  "IMG-20240910-WA0018.jpg",
  "IMG-20240910-WA0021.jpg",
  "IMG-20240910-WA0021(1).jpg",
  "IMG-20240910-WA0022.jpg",
  "IMG-20240910-WA0022(1).jpg",
  "IMG-20240910-WA0023.jpg",
  "IMG-20240910-WA0024.jpg",
  "IMG-20240910-WA0025.jpg",
  "IMG-20240910-WA0026.jpg",
  "IMG-20240910-WA0027.jpg",
  "IMG-20240910-WA0028.jpg",
  "IMG-20240910-WA0029.jpg",
  "IMG-20240910-WA0030.jpg",
  "IMG-20240910-WA0031.jpg",
  "IMG-20240910-WA0032.jpg",
  "IMG-20240910-WA0033.jpg",
  "IMG-20240910-WA0034.jpg",
  "IMG-20240910-WA0035.jpg",
  "IMG-20240910-WA0036.jpg",
  "IMG-20240910-WA0037.jpg",
  "IMG-20240910-WA0043.jpg",
  "IMG-20240910-WA0044.jpg",
  "IMG-20240910-WA0045.jpg",
  "IMG-20240910-WA0046.jpg",
  "IMG-20240910-WA0047.jpg",
  "IMG-20240910-WA0048.jpg",
  "IMG-20240910-WA0049.jpg",
  "IMG-20240910-WA0050.jpg",
  "IMG-20240910-WA0052.jpg",
  "IMG-20240910-WA0053.jpg",
  "IMG-20240926-WA0001.jpg",
  "Sc post.jpg",
  "Shimant-card.jpg",
  "Shivaji jayanti .jpg"
];

// ✅ Gallery container
const gallery = document.getElementById("gallery");

images.forEach((name, index) => {
  const col = document.createElement("div");
  col.className = "col-6 col-md-4 col-lg-3";

  const img = document.createElement("img");
  img.src = `images/${name}`;
  img.alt = name;
  img.className = "gallery-img";
  img.dataset.index = index;

  col.appendChild(img);
  gallery.appendChild(col);
});

// ✅ Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// Open lightbox
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    currentIndex = parseInt(e.target.dataset.index);
    showLightbox();
  }
});

function showLightbox() {
  lightboxImage.src = `images/${images[currentIndex]}`;
  lightbox.classList.remove("d-none");
}

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.classList.add("d-none");
});

// Navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showLightbox();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showLightbox();
});

// Close on background click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("d-none");
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("d-none")) {
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "Escape") lightbox.classList.add("d-none");
  }
});