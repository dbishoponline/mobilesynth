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

document.getElementById("red").addEventListener('click', function(){
    sounds.redSound.play();
});

document.getElementById("yellow").addEventListener('click', function(){
    sounds.yellowSound.play();
});

document.getElementById("cyan").addEventListener('click', function(){
    sounds.cyanSound.play();
});

document.getElementById("magenta").addEventListener('click', function(){
    sounds.magentaSound.play();
});

document.getElementById("purple").addEventListener('click', function(){
    sounds.purpleSound.play();
});

document.getElementById("blue").addEventListener('click', function(){
    sounds.blueSound.play();
});

document.getElementById("green").addEventListener('click', function(){
    sounds.greenSound.play();
});

document.getElementById("pink").addEventListener('click', function(){
    sounds.pinkSound.play();
});