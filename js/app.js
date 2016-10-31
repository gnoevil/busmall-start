'use strict';

var allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

var allProducts = [];

var count25 = 0;

var imageEl1 = document.getElementById('img1');
var imageEl2 = document.getElementById('img2');
var imageEl3 = document.getElementById('img3');

function productImages(name) {
  this.path = 'img/' + name + '.jpg';
  this.name = name;
  this.numClicks = 0;
  this.numShown = 0;
  allProducts.push(this);
};

productImages.prototype.updateClicks = function() {
  this.numClicks++;
};

productImages.prototype.updateShown = function() {
  this.numShown++;
};
productImages.prototype.getName = function() {
  return this.name;
};

function randImages() {
  count25++;

  if (count25 < 26) {
    var randImg1 = Math.floor(Math.random() * (allProducts.length - 0));
    var randImg2 = Math.floor(Math.random() * (allProducts.length - 0));
    while (randImg1 === randImg2) {
      var randImg2 = Math.floor(Math.random() * (allProducts.length - 0));
    }
    var randImg3 = Math.floor(Math.random() * (allProducts.length - 0));
    while ((randImg1 === randImg3) || (randImg2 === randImg3)) {
      var randImg3 = Math.floor(Math.random() * (allProducts.length - 0));
    }
    // console.log(randImg1, randImg2, randImg3);
    imageEl1.src = allProducts[randImg1].path;
    imageEl2.src = allProducts[randImg2].path;
    imageEl3.src = allProducts[randImg3].path;

    allProducts[randImg1].updateShown();
    allProducts[randImg2].updateShown();
    allProducts[randImg3].updateShown();
  } else {
    displayStats();
  }
}

function displayStats() {
  for (var i = 0; i < allProducts.length; i++) {
    console.log(allProducts[i].name + ' has ' + allProducts[i].numClicks + 'clicks, and has been displayed ' + allProducts[i].numShown + ' times.');
  }
  count25 = 0;
}

function clickHandler(event) {
  var clickEl = document.getElementById(event.target.id);
  var pathArray = ((clickEl.src).split('/'));
  var length = pathArray.length;
  var imgName = pathArray[length - 1].split('.');
  // console.log(imgName[0]);

  for (var i = 0; i < allProducts.length; i++) {
    if (imgName[0] === allProducts[i].getName()) {
      var clickIndex = i;
      allProducts[i].updateClicks();
    }
  }
  randImages();
}

for (var i = 0; i < allNames.length; i++) {
  var newImg = new productImages(allNames[i]);
}
randImages();

imageEl1.addEventListener('click', clickHandler);
imageEl2.addEventListener('click', clickHandler);
imageEl3.addEventListener('click', clickHandler);
