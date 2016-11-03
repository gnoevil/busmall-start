'use strict';

function resetStats() {
  for (var i = 0; i < allImages.length; i++) {
    allProducts[i].numClicks = 0;
    allProducts[i].numShown = 0;
  }
}
function getLocalStorage() {
  for (var i = 0; i < allProducts.length; i++) {
    if (localStorage.getItem(imageNameArray[i]) !== null) {
      var rawdata = JSON.parse(localStorage.getItem(imageNameArray[i]));
      imageClicksArray[i] = rawdata[0];
      imageShownArray[i] = rawdata[1];
      imagePercArray[i] = rawdata[2];
    }
  }
}

function loadLocalStorage() {
  for (var i = 0; i < allProducts.length; i++) {
    if (localStorage.getItem(imageNameArray[i]) !== null) {
      var rawdata = JSON.parse(localStorage.getItem(imageNameArray[i]));
      imageClicksArray[i] = rawdata[0];
      imageShownArray[i] = rawdata[1];
      imagePercArray[i] = rawdata[2];
    }
  }
}

function clearLocalStorage() {
  localStorage.clear();
  resetStats();
}

window.addEventListener('load', loadLocalStorage);
startButtonElement.addEventListener('click', randImages);
