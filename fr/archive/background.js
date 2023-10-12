// Fetch images from external JSON
async function getImages() {
  
  const response = await fetch('images.json');

  return await response.json();
}

// Get random image from array
async function getRandomImage() {

  const images = await getImages();   

  const count = images.length;
  const randomIndex = Math.floor(Math.random() * count);

  return images[randomIndex];
}

// Display random image   
async function displayRandomImage() {

  // Get random image url
  const imageUrl = await getRandomImage();

  // Select image elements
  const imageElements = document.querySelectorAll('.random-image');

  // Set src for all images
  imageElements.forEach(el => {
    
    el.src = imageUrl;
  });

  // Select containers
  const containers = document.querySelectorAll('.random-image-container');

  // Set background image for all containers  
  containers.forEach(con => {
    
    con.style.backgroundImage = `
      linear-gradient(rgba(0,0,0,0), var(--color-primary)),
      url('${imageUrl}')
    `;
  });
  
}

// Init
displayRandomImage();

// Usage
// displayRandomImage();
