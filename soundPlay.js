const sounds = {
    redSound: new Howl({
        urls: ['soundSamples/A/bubbles.mp3']
    }),
    yellowSound: new Howl({
        urls: ['soundSamples/A/clay.mp3']
    }),
    cyanSound: new Howl({
        urls: ['soundSamples/A/confetti.mp3']
    }),
    magentaSound: new Howl({
        urls: ['soundSamples/A/corona.mp3']
    }),
    purpleSound: new Howl({
        urls: ['soundSamples/A/dotted-spiral.mp3']
    }),
    blueSound: new Howl({
        urls: ['soundSamples/A/flash-1.mp3']
    }),
    greenSound: new Howl({
        urls: ['soundSamples/A/flash-2.mp3']
    }),
    pinkSound: new Howl({
        urls: ['soundSamples/A/flash-3.mp3']
    }),
    blackSound: null
};

document.getElementById('sampleInputInfoMessage').style.visibility = 'hidden';

document.addEventListener('click', function(event){
    if(event.target.id  === 'red' || event.target.id  === 'red-h1'){
        sounds.redSound.play();
    } else if (event.target.id === 'yellow' || event.target.id  === 'yellow-h1') {
        sounds.yellowSound.play();
    } else if (event.target.id === 'cyan' || event.target.id  === 'cyan-h1') {
        sounds.cyanSound.play();
    } else if (event.target.id === 'magenta' || event.target.id  === 'magenta-h1') {
        sounds.magentaSound.play();
    } else if (event.target.id === 'purple' || event.target.id  === 'purple-h1') {
        sounds.purpleSound.play();
    } else if (event.target.id === 'blue' || event.target.id  === 'blue-h1') {
        sounds.blueSound.play();
    } else if (event.target.id === 'green' || event.target.id  === 'green-h1') {
        sounds.greenSound.play();
    } else if (event.target.id === 'pink' || event.target.id  === 'pink-h1') {
        sounds.pinkSound.play();
    } else if (event.target.id === 'square') {
        if (sounds.blackSound === null){
            document.getElementById('sampleInputInfoMessage').style.visibility = 'visible';
        } else {
            sounds.blackSound.play();
        }
    }
});

document.addEventListener('keypress', function(event){
    pressedKey = event.which;

    console.log(event.which);
    if(pressedKey == 113){
        sounds.redSound.play();
    } else if (pressedKey == 119) {
        sounds.yellowSound.play();
    } else if (pressedKey == 101) {
        sounds.cyanSound.play();
    } else if (pressedKey == 114) {
        sounds.magentaSound.play();
    } else if (pressedKey == 116) {
        sounds.purpleSound.play();
    } else if (pressedKey == 121) {
        sounds.blueSound.play();
    } else if (pressedKey == 117) {
        sounds.greenSound.play();
    } else if (pressedKey == 105) {
        sounds.pinkSound.play();
    }
});
