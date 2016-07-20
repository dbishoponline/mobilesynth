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
    })
};

document.addEventListener('click', function(event){
    if(event.target.id === 'red'){
        sounds.redSound.play();
    } else if (event.target.id === 'yellow') {
        sounds.yellowSound.play();
    } else if (event.target.id === 'cyan') {
        sounds.cyanSound.play();
    } else if (event.target.id === 'magenta') {
        soundsmagentaSound.play();
    } else if (event.target.id === 'purple') {
        sounds.purpleSound.play();
    } else if (event.target.id === 'blue') {
        sounds.blueSound.play();
    } else if (event.target.id === 'green') {
        sounds.greenSound.play();
    } else if (event.target.id === 'pink') {
        sounds.pinkSound.play();
    }

});
