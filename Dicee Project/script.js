
// let randInt = Math.floor(Math.random() * 6) + 1;
// function randImg() {
//     let randInt = Math.floor(Math.random() * 6) + 1 
//     let numString = randInt.toString();
//     let image = `images/dice' + numString + 'png';
//     document.getElementsById('img1').src = image;

//     randInt = Math.floor(Math.random() * 6) + 1 
//     numString = randInt.toString();
//     image = "images/dice" + numString + 'png`;
//     document.getElementsById('img2').src = image;
// }

// window.onload = randImg;


var images = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png',
    
];

function randImg() {
    var size = images.length;
    var x = Math.floor(size * Math.random());
    document.getElementById("img1").src = images[x];

    x = Math.floor(size * Math.random())
    document.getElementById('img2').src = images[x];
}

window.onload = randImg();