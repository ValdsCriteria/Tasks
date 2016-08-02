var nextImage = function(){
  // current image
  currentImgIndex++;
  if (currentImgIndex > lastIndex) {
    currentImgIndex = 0;
  }
  currentImg.src = images[currentImgIndex];
}
var previousImage = function(){
  // current image
  currentImgIndex--;
  if (currentImgIndex < 0) {
    currentImgIndex = lastIndex;
  }
  currentImg.src = images[currentImgIndex];
}
var images = ['images/1.png','images/2.jpg','images/3.jpg'];

//define css
var currentImgClass =  "gallery__image";
    // set initial indexes
    var lastIndex = images.length - 1;
    var currentImgIndex = 0;

    // get gallery container
    var container = document.getElementById("gallery");
    container.className = "gallery__img-container";

    // create img placeholders
    var imgContainer = document.createElement("div");

    var currentImg = document.createElement("img");
    currentImg.src = images[currentImgIndex];
    currentImg.className = currentImgClass;

    imgContainer.appendChild(currentImg);

    //add next button
    var nextButton = document.createElement("button");
    nextButton.innerHTML = "Next";
    nextButton.onclick = nextImage;
    //add previous button
    var previousButton = document.createElement("button");
    previousButton.innerHTML = "Previous";
    previousButton.onclick = previousImage;

    //add gallery to markup
    container.appendChild(imgContainer);
    container.appendChild(previousButton);
    container.appendChild(nextButton);
