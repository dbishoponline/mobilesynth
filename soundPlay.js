const sounds = {
    soundButtonA: new Howl({
        urls: ['soundSamples/A/bubbles.mp3']
    }),
    soundButtonB: new Howl({
        urls: ['soundSamples/A/clay.mp3']
    }),
    soundButtonC: new Howl({
        urls: ['soundSamples/A/confetti.mp3']
    }),
    soundButtonD: new Howl({
        urls: ['soundSamples/A/corona.mp3']
    }),
    soundButtonE: new Howl({
        urls: ['soundSamples/A/dotted-spiral.mp3']
    }),
    soundButtonF: new Howl({
        urls: ['soundSamples/A/flash-1.mp3']
    }),
    soundButtonG: new Howl({
        urls: ['soundSamples/A/flash-2.mp3']
    }),
    soundButtonH: new Howl({
        urls: ['soundSamples/A/flash-3.mp3']
    }),
    blackSound: null
};

document.addEventListener('click', function(event){
    if(event.target.id  === 'buttonA' || event.target.id  === 'buttonA-letter'){
        sounds.soundButtonA.play();
    } else if (event.target.id === 'buttonB' || event.target.id  === 'buttonB-letter') {
        sounds.soundButtonB.play();
    } else if (event.target.id === 'buttonC' || event.target.id  === 'buttonC-letter') {
        sounds.soundButtonC.play();
    } else if (event.target.id === 'buttonD' || event.target.id  === 'buttonD-letter') {
        sounds.soundButtonD.play();
    } else if (event.target.id === 'buttonE' || event.target.id  === 'buttonE-letter') {
        sounds.soundButtonE.play();
    } else if (event.target.id === 'buttonF' || event.target.id  === 'buttonF-letter') {
        sounds.soundButtonF.play();
    } else if (event.target.id === 'buttonG' || event.target.id  === 'buttonG-letter') {
        sounds.soundButtonG.play();
    } else if (event.target.id === 'buttonH' || event.target.id  === 'buttonH-letter') {
        sounds.soundButtonH.play();
    }
});

document.addEventListener('keypress', function(event){
    pressedKey = event.which;

    if(pressedKey == 113){
        sounds.soundButtonA.play();
    } else if (pressedKey == 119) {
        sounds.soundButtonB.play();
    } else if (pressedKey == 101) {
        sounds.soundButtonC.play();
    } else if (pressedKey == 114) {
        sounds.soundButtonD.play();
    } else if (pressedKey == 116) {
        sounds.soundButtonE.play();
    } else if (pressedKey == 121) {
        sounds.soundButtonF.play();
    } else if (pressedKey == 117) {
        sounds.soundButtonG.play();
    } else if (pressedKey == 105) {
        sounds.soundButtonH.play();
    }
});
