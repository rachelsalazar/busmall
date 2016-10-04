'use strict';

var numImgs = 3;
var totalClicks = 0;
var imgArr = [];
var imgCache = imgArr.slice(0);
var imgContainer = document.getElementById('container');
imgContainer.addEventListener('click', handleImageClick);

function imageConstructor(id, src, shown, clicked) {
    this.name = name;
    this.src = src;
    this.id = id;
    this.shown = shown;
    this.clicked = clicked;
    imgArr.push(this);
}

function randomImgs(numImgs) {
    var images = [];
    for (var i = 0; i < numImgs; i++) {
        if (imgCache.length < 13) {
            imgCache = imgArr.slice(0);
        }
        var index = Math.floor(Math.random() * imgCache.length);
        var random = imgCache[index];
        console.log('random', random.id);
        imgCache.splice(index, 1);
        console.log('copy arr', imgCache.length);
        images.push(random);
    }
    return images;
}

function render(images) {
    var imageContainer = document.getElementById('container');
    for (var i = 0; i < images.length; i++) {

        var li = document.createElement('li');
        li.innerHTML = '<img src="' + images[i].src + '" ' + 'id="' + images[i].id + '">';
        imageContainer.appendChild(li);
    }
}

function handleImageClick(event) {
    event.preventDefault;
    var imgClicked = event.target.id;
    if (imgClicked === 'container') {
        alert('That isnt an image. Please try again.');
    } else if (imgClicked && totalClicks < 25) {
        for (var i = 0; i < imgArr.length; i++) {
            if (imgClicked === imgArr[i].id) {
                imgArr[i].clicked++;
            }
        }
        totalClicks++;
        imgContainer.innerHTML = '';
        render(randomImgs(numImgs));
    } else {
        //TODO: replace images with chart.js code
        alert('your results');
    }
}

function loadImages() {
    new imageConstructor('bag', 'images/bag.jpg', 0, 0);
    new imageConstructor('banana', 'images/banana.jpg', 0, 0);
    new imageConstructor('bathroom', 'images/bathroom.jpg', 0, 0);
    new imageConstructor('boots', 'images/boots.jpg', 0, 0);
    new imageConstructor('breakfast', 'images/breakfast.jpg', 0, 0);
    new imageConstructor('bubblegum', 'images/bubblegum.jpg', 0, 0);
    new imageConstructor('chair', 'images/chair.jpg', 0, 0);
    new imageConstructor('cthulhu', 'images/cthulhu.jpg', 0, 0);
    new imageConstructor('dog-duck', 'images/dog-duck.jpg', 0, 0);
    new imageConstructor('dragon', 'images/dragon.jpg', 0, 0);
    new imageConstructor('pen', 'images/pen.jpg', 0, 0);
    new imageConstructor('pet-sweep', 'images/pet-sweep.jpg', 0, 0);
    new imageConstructor('scissors', 'images/scissors.jpg', 0, 0);
    new imageConstructor('shark', 'images/shark.jpg', 0, 0);
    new imageConstructor('sweep', 'images/sweep.png', 0, 0);
    new imageConstructor('tauntaun', 'images/tauntaun.jpg', 0, 0);
    new imageConstructor('unicorn', 'images/unicorn.jpg', 0, 0);
    new imageConstructor('usb', 'images/usb.gif', 0, 0);
    new imageConstructor('water-can', 'images/water-can.jpg', 0, 0);
    new imageConstructor('wine-glass', 'images/wine-glass.jpg', 0, 0);
}

loadImages();
render(randomImgs(numImgs));

/* Technical layout
1. Build image constructor and load each object of image into array
2. Create a function that randomly selects an image from the image array
3. Build into random function ability to not ever select duplicates
4. Dispaly random images to the user
5. Make images clickable and fire off tracking, random image selection and image rendering 
*/