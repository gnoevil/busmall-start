'use strict';

var allProducts = [];
var totalClicks = 0;
var clickLimit = 25;
var imageNameArray = [];
var imageClicksArray = [];
var imageShownArray = [];

function Product(path) {
  this.path = 'img/' + path;
  this.name = ' ';
  this.numClicks = 0;
  this.numShown = 0;
  this.generateName = function(){
    var splitName = path.split('.')[0];
    var splitDash = splitName.split('-');
    for (var i = 0; i < splitDash.length; i++){
      var letters = splitDash[i].split(' ');
      letters[0] = letters[0].toUpperCase();
      splitDash[i] = letters.join(' ');
    }
    this.name = splitDash.join(' ');
  };
  this.generateName();
  allProducts.push(this);
};

for (var i = 0; i < productImage.length; i++) {
  new Product(productImage[i]);
}
function RandNum() {
  return Math.floor(Math.random() * allProducts.length);
};

var oldIndices = [];

function randImages(event) {
  totalClicks++;
  if (event) {
    var clickedProductIdx = parseInt(event.target.alt);
    allProducts[clickedProductIdx].numClicks++;
  }
  var imgTags = document.getElementsByClassName('clickable');
  var indices = [];
  for (var i = 0; i < imgTags.length; i++) {
    var idx = RandNum();
    while (indices.indexOf(idx) !== -1 || oldIndices.indexOf(idx) !== -1) {
      idx = RandNum();
    }
    indices[i] = idx;
  }
  oldIndices = indices;
  var productsToBeSeen = [];
  //Loop through randomly generated indices
  for (var i = 0; i < indices.length; i++) {
    var thisIdx = indices[i];
    productsToBeSeen[i] = allProducts[thisIdx];
    allProducts[thisIdx].numShown++;
  }
  //Loop through the image tags
  for (var i = 0; i < imgTags.length; i++) {
    imgTags[i].setAttribute('src', productsToBeSeen[i].path);
    imgTags[i].setAttribute('alt', indices[i]);
  }
  //Remove event handler
  if (totalClicks >= clickLimit) {
    for (var i = 0; i < imgTags.length; i++) {
      imgTags[i].removeEventListener('click', randImages);
      showResults();
    }

    for (var i = 0; i < allProducts.length; i++) {
      var thisProduct = allProducts[i];
      if (thisProduct.numShown === 0) {
        thisProduct.numShown += 0;
      } else {
        thisProduct += thisProduct.numClicks / thisProduct.numShown * 100;
      }
    }
  }
};

randImages();
totalClicks = 0;
//Add event listener
var imgTags = document.getElementsByClassName('clickable');
for (var i = 0; i < imgTags.length; i++) {
  imgTags[i].addEventListener('click', randImages);
}
