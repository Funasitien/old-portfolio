function getRandomImage() {
  var folderPath = "../../img/archive/"; // Path to the image folder
  var imageElements = document.getElementsByClassName("random-image");

  // Fetch the list of images in the folder
  return fetch(folderPath)
    .then(response => response.text())
    .then(data => {
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(data, "text/html");
      var images = Array.from(htmlDoc.getElementsByTagName("a"))
        .filter(link => link.href.match(/\.(jpe?g|png|gif)$/i))
        .map(link => folderPath + link.href.substring(link.href.lastIndexOf('/') + 1));

      // Select a random image from the array
      var randomIndex = Math.floor(Math.random() * images.length);
      var randomImage = images[randomIndex];

      return randomImage;
    });
}

function displayRandomImage() {
  getRandomImage().then(function(imageUrl) {
    var imageElements = document.getElementsByClassName("random-image");
    for (var i = 0; i < imageElements.length; i++) {
      imageElements[i].src = imageUrl;
    }

    var imageContainers = document.getElementsByClassName("random-image-container");
    for (var j = 0; j < imageContainers.length; j++) {
      imageContainers[j].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0), var(--color-primary)), url('" + imageUrl + "')";
    }
  });
}
