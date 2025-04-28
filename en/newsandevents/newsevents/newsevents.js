const images = document.querySelectorAll("#imageGallery img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const copyBtn = document.getElementById("copyLink");
const fbShareBtn = document.getElementById("fbShare");
const linkModal = document.getElementById("linkModal");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    modalImg.src = img.src;
    modal.style.display = "flex";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
  if (e.target === linkModal) linkModal.style.display = "none";
});

// Copy Link
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    linkModal.style.display = "block";
    setTimeout(() => {
      linkModal.style.display = "none";
    }, 1500);
  });
});

// Facebook Share
fbShareBtn.addEventListener("click", () => {
  const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
  window.open(shareURL, '_blank', 'width=600,height=400');
});
