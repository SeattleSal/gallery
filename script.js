let photosArray = [];

function displayPhotos(photosJSON) {
  let imagesContainer = document.getElementById("imagesGrid");
  // layout of 4 images per row
  let numImages = photosJSON.length;
  let numRows = numImages / 4;
  let imgIndex = 0;

  // create rows for image containers
  for (let i = 0; i < numRows; i++) {
    let row = document.createElement("div");
    row.className = "row";

    // add image columns to each row
    for (imgIndex; imgIndex < i + i * 3; imgIndex++) {
      // container for each image and button
      let imgCol = document.createElement("div");
      imgCol.className = "column";

      // add image
      let img = document.createElement("img");
      // console.log(photosJSON[imgIndex].urls.regular)
      img.src = photosJSON[imgIndex].urls.regular;
      img.id = imgIndex;
      img.style.width = "300px";
      img.style.height = "300px";
      imgCol.appendChild(img);

      row.append(imgCol);
    }
    // add row of images to container
    imagesContainer.appendChild(row);
  }
}

// loadJSON - load JSON of photos data using HTTP request
function loadJSON(callback) {
  let xObj = new XMLHttpRequest();
  xObj.overrideMimeType("application/json");
  xObj.open("GET", "./data/photos.json", true);
  xObj.onreadystatechange = function () {
    if (xObj.readyState == 4 && xObj.status == "200") {
      callback(xObj.response);
    }
  };
  xObj.send(null);
}

// displayLargeImg - the large image of the picture will show up when clicked on
function displayLargeImg(imgIndex) {

  // create container for large image which is the size of the window
  let container = document.body;
  let newImgWindow = document.createElement("div");
  newImgWindow.setAttribute("class", "img-window");
  newImgWindow.setAttribute("onclick", "closeImg()");
  container.appendChild(newImgWindow);

  let imgLarge = document.createElement("img");
  imgLarge.setAttribute("src", photosArray[imgIndex].urls.full);
  newImgWindow.appendChild(imgLarge);
}

// remove large image
function closeImg() {
  document.querySelector(".img-window").remove();
}

// init function to import photos and display photos when page loads
function init() {
  loadJSON(function (response) {
    photosArray = JSON.parse(response);

    displayPhotos(photosArray);
    console.log(photosArray);

    document
      .getElementById("imagesGrid")
      .addEventListener("click", function (e) {
        if (e.target.id) displayLargeImg(e.target.id);
      });
  });
}

// call init function upon page load
init();
