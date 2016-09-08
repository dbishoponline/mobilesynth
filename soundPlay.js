const sounds = {
    soundButtonQ: new Howl({
        urls: ['soundSamples/A/bubbles.mp3']
    }),
    soundButtonW: new Howl({
        urls: ['soundSamples/A/clay.mp3']
    }),
    soundButtonE: new Howl({
        urls: ['soundSamples/A/confetti.mp3']
    }),
    soundButtonA: new Howl({
        urls: ['soundSamples/A/corona.mp3']
    }),
    soundButtonS: new Howl({
        urls: ['soundSamples/A/dotted-spiral.mp3']
    }),
    soundButtonD: new Howl({
        urls: ['soundSamples/A/flash-1.mp3']
    }),
    soundButtonZ: new Howl({
        urls: ['soundSamples/A/flash-2.mp3']
    }),
    soundButtonX: new Howl({
        urls: ['soundSamples/A/flash-3.mp3']
    }),
    soundButtonC: new Howl({
        urls: ['soundSamples/A/glimmer.mp3']
    })
};


document.addEventListener('click', function(event){
    if(event.target.id  === 'buttonQ' || event.target.id  === 'buttonQ-letter'){
        sounds.soundButtonQ.play();
    } else if (event.target.id === 'buttonW' || event.target.id  === 'buttonW-letter') {
        sounds.soundButtonW.play();
    } else if (event.target.id === 'buttonE' || event.target.id  === 'buttonE-letter') {
        sounds.soundButtonE.play();
    } else if (event.target.id === 'buttonA' || event.target.id  === 'buttonA-letter') {
        sounds.soundButtonA.play();
    } else if (event.target.id === 'buttonS' || event.target.id  === 'buttonS-letter') {
        sounds.soundButtonS.play();
    } else if (event.target.id === 'buttonD' || event.target.id  === 'buttonD-letter') {
        sounds.soundButtonD.play();
    } else if (event.target.id === 'buttonZ' || event.target.id  === 'buttonZ-letter') {
        sounds.soundButtonZ.play();
    } else if (event.target.id === 'buttonX' || event.target.id  === 'buttonX-letter') {
        sounds.soundButtonX.play();
    } else if (event.target.id === 'buttonC' || event.target.id  === 'buttonC-letter') {
        sounds.soundButtonC.play();
    }
});

document.addEventListener('keypress', function(event){
    pressedKey = event.which;
console.log(pressedKey);
    const lightButtonTime = 80;

    if(pressedKey == 113){
        sounds.soundButtonQ.play();
        document.getElementById('buttonQ').style.backgroundImage = "url('./images/button_pressed.png')";
        setTimeout(function (){document.getElementById('buttonQ').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
    } else if (pressedKey == 119) {
        sounds.soundButtonW.play();
        document.getElementById('buttonW').style.backgroundImage = "url('./images/button_pressed.png')";
        setTimeout(function (){document.getElementById('buttonW').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
    } else if (pressedKey == 101) {
        sounds.soundButtonE.play();
        document.getElementById('buttonE').style.backgroundImage = "url('./images/button_pressed.png')";
        setTimeout(function (){document.getElementById('buttonE').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
    } else if (pressedKey == 97) {
        sounds.soundButtonA.play();
        document.getElementById('buttonA').style.backgroundImage = "url('./images/button_pressed.png')";
        setTimeout(function (){document.getElementById('buttonA').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
    } else if (pressedKey == 115) {
        sounds.soundButtonS.play();
        document.getElementById('buttonS').style.backgroundImage = "url('./images/button_pressed.png')";
        setTimeout(function (){document.getElementById('buttonS').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
    } else if (pressedKey == 100) {
        sounds.soundButtonD.play();
        document.getElementById('buttonD').style.backgroundImage = "url('./images/button_pressed.png')";
        setTimeout(function (){document.getElementById('buttonD').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
    } else if (pressedKey == 122) {
        sounds.soundButtonZ.play();
        document.getElementById('buttonZ').style.backgroundImage = "url('./images/button_pressed.png')";
        setTimeout(function (){document.getElementById('buttonZ').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
    } else if (pressedKey == 120) {
        sounds.soundButtonX.play();
        document.getElementById('buttonX').style.backgroundImage = "url('./images/button_pressed.png')";
        setTimeout(function (){document.getElementById('buttonX').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
    } else if (pressedKey == 99) {
        sounds.soundButtonC.play();
        document.getElementById('buttonC').style.backgroundImage = "url('./images/button_pressed.png')";
        setTimeout(function (){document.getElementById('buttonC').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
    }
});
