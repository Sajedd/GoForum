/* défilé d'image !*/
const images = document.querySelectorAll("#slideshow img");
let currentImage = 0;

function nextImage() {
  images[currentImage].style.display = "none";
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.display = "block";
}
const interval = setInterval(nextImage, 3000); // Change d'image toutes les 3 secondes
