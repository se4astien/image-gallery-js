const currentImg = document.getElementById('current');
const gallery = document.querySelectorAll('.gallery img');
const opacity = 0.4;

// Set first image opacity
gallery[0].style.opacity = opacity;

// querySelector return a node list (an array)
// we need to loop though each image and add an event listener on each image

// 1. Loop into each image + Add an event listener on each picture
gallery.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // 3. Reset the opacity
  gallery.forEach(img => (img.style.opacity = 1));

  // 1. Change current image to src of clicked image
  currentImg.src = e.target.src;

  // 4. Add fade in class
  currentImg.classList.add('fade-in');

  // 5. Remove fade-in class after .5 seconds
  setTimeout(() => currentImg.classList.remove('fade-in'), 500);

  // 2. Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
