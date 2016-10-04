'use strict';

var resDisplay = true;
var totalClicks = 0;
var imgArr = [];
var imgCache = imgArr.slice(0);
var imgContainer = document.getElementById('container');
imgContainer.addEventListener('click', handleImageClick);

function ImageConstructor(id, src, shown, clicked) {
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
        if (imgCache.length <= 12) {
            imgCache = imgArr.slice(0);
        }
        if (imgCache.length > 12) {
            var index = Math.floor(Math.random() * imgCache.length);
            var random = imgCache[index];
            imgCache.splice(index, 1);
            images.push(random);
            (function() {
                for (var i = 0; i < imgArr.length; i++) {
                    if (random.id === imgArr[i]) {
                        imgArr[i].shown++;
                    }
                }
            })
        };
    };
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

function results() {
    var resultContainer = document.getElementById('results');
    for (var i = 0; i < imgArr.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = 'Product ' + imgArr[i].id + ' was clicked ' + imgArr[i].clicked + ' times and shown ' + imgArr[i].shown + ' times.';
        resultContainer.appendChild(li);
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
        render(randomImgs(3));
    } else if (resDisplay) {
        results();
        resDisplay = false;
    }
}

function loadImages() {
    new ImageConstructor('bag', 'images/bag.jpg', 0, 0);
    new ImageConstructor('banana', 'images/banana.jpg', 0, 0);
    new ImageConstructor('bathroom', 'images/bathroom.jpg', 0, 0);
    new ImageConstructor('boots', 'images/boots.jpg', 0, 0);
    new ImageConstructor('breakfast', 'images/breakfast.jpg', 0, 0);
    new ImageConstructor('bubblegum', 'images/bubblegum.jpg', 0, 0);
    new ImageConstructor('chair', 'images/chair.jpg', 0, 0);
    new ImageConstructor('cthulhu', 'images/cthulhu.jpg', 0, 0);
    new ImageConstructor('dog-duck', 'images/dog-duck.jpg', 0, 0);
    new ImageConstructor('dragon', 'images/dragon.jpg', 0, 0);
    new ImageConstructor('pen', 'images/pen.jpg', 0, 0);
    new ImageConstructor('pet-sweep', 'images/pet-sweep.jpg', 0, 0);
    new ImageConstructor('scissors', 'images/scissors.jpg', 0, 0);
    new ImageConstructor('shark', 'images/shark.jpg', 0, 0);
    new ImageConstructor('sweep', 'images/sweep.png', 0, 0);
    new ImageConstructor('tauntaun', 'images/tauntaun.jpg', 0, 0);
    new ImageConstructor('unicorn', 'images/unicorn.jpg', 0, 0);
    new ImageConstructor('usb', 'images/usb.gif', 0, 0);
    new ImageConstructor('water-can', 'images/water-can.jpg', 0, 0);
    new ImageConstructor('wine-glass', 'images/wine-glass.jpg', 0, 0);
}

loadImages();
render(randomImgs(3));

var chartData = [];
function populateChartArr() {
  for (var i = 0; i < imgArr.length; i++) {
    imgArr[i].clicked = chartData[i].clicked;
    imgArr[i].shown = chardData[i].shown;
  }
}

var chartObj = {
    type: 'bar',
    datasets: [{
            //labels: imgArr,
            //fillColor: '',
            data: clickedArr,
        },
        {
            //labels: imgArr,
            //fillColor: '',
            data: shownArr,
        }
    ]
}

var context = document.getElementById('results_chart').getContext('2d');
//var chart = new Chart(context, chartObj);



/* Technical layout
1. Build image constructor and load each object of image into array
2. Create a function that randomly selects an image from the image array
3. Build into random function ability to not ever select duplicates
4. Display random images to the user
5. Make images clickable and fire off tracking, random image selection and image rendering 
6. Incorporate chart.js
*/