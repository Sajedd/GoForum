/* défilé d'image !*/
var images = document.querySelectorAll('#slideshow img');
var currentImage = 0;
var interval = setInterval(nextImage, 3000); // Change d'image toutes les 3 secondes

function nextImage() {
  images[currentImage].style.display = 'none';
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.display = 'block';
}
