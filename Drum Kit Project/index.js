
// document.querySelectorAll(".drum").forEach(item => {
//     item.addEventListener("click", handleClick);
// });

var sounds = [
    'sounds/tom-1.mp3',
    'sounds/tom-2.mp3',
    'sounds/tom-3.mp3',
    'sounds/tom-4.mp3',
    'sounds/snare.mp3',
    'sounds/crash.mp3',
    'sounds/kick-bass.mp3'
];

var soundsObject = {
    w:'sounds/tom-1.mp3',
    a:'sounds/tom-2.mp3',
    s:'sounds/tom-3.mp3',
    d:'sounds/tom-4.mp3',
    j:'sounds/snare.mp3',
    k:'sounds/crash.mp3',
    l:'sounds/kick-bass.mp3'
};

for (let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = this.innerText;
        this.style.color = 'white';
        buttonAnimation(key);
        this.style.color = '#DA0463';

        var audio = new Audio(sounds[i]);
        audio.play();

        buttonAnimation(key);

    });


}

document.addEventListener("keypress", function(event) {

    eventKey = event.key;
    qs = document.querySelector('.' + event.key);
    qs.style.color = 'white'
    buttonAnimation(eventKey);
    qs.style.color = '#DA0463';

    var audio = new Audio(soundsObject[eventKey]);
    audio.play();

    buttonAnimation(eventKey);

});

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
} 

