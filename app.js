//Structure 3 images with a container like a div attach the event listener to the container div. 
//This will allow for one event listener and one event handler
//Thus any click inside the table will tell you what element has been clicked. 
//Handle the event of clicking the container div to either give a message or do nothing.

var imgArr = [];
var totalClicks = 0;

function imageConstructor(id, src, shown, clicked) {
    this.name = name;
    this.src = src;
    this.id = id;
    this.shown = shown;
    this.clicked = clicked;
    imgArr.push(this);
}

Array.prototype.randomDiffElement = function(last) {
    if (this.length == 0) {
        return;
    } else if (this.length == 1) {
        return this[0];
    } else {
        var num = 0;
        do {
            num = Math.floor(Math.random() * this.length);
        } while (this[num] == last);
        return this[num];
    }
}

function randomImgs(numImgs) {
    var images = [];
    for (var i = 0; i < numImgs; i++) {
        images.push(imgArr[Math.floor(Math.random() * imgArr.length)]);
    }
    return images;
}

function displayImages(images) {
    var imageContainer = document.getElementById('container');
    for (var i = 0; i < images.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = '<img src="' + images[i].src + '" ' + 'id="' + images[i].id + '">';
        imageContainer.appendChild(li);
    }
}

var imgContainer = document.getElementById('container');
imgContainer.addEventListener('click', handleImageClick);

//TODO: make logic for preventing image displaying twice occur in event handler
function handleImageClick(event) {
    event.preventDefault;
    var imgClicked = event.target.id;
    for (var i = 0; i < imgArr.length; i++) {
        if (imgClicked === imgArr[i].id) {
            imgArr[i].clicked++;
        }
        console.log('img clicks', imgArr[i].clicked);
    }
    totalClicks++;
    imgContainer.innerHTML = '';
    displayImages(randomImgs(3));
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
//function invocation
loadImages();
displayImages(randomImgs(3));
