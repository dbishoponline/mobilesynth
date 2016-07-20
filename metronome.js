document.getElementById('start').addEventListener('click', click);
document.getElementById('staaaart').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);

var sound = new Howl({
    urls: ['soundSamples/tick.wav']

});

var currNote = 1;
var currSignature = 4;
var timer = null;
var tempo = document.getElementById('tempo').value || 120;


function click(){
    tempo = document.getElementById('tempo').value;

    queue(tempo);
    sound.play();
}

function start(){
    clearTimeout(timer);
    queue(tempo);
}

function stop(){
    clearTimeout(timer);
}

function queue(tempo){
    timer = setTimeout(click, Math.round(((60/tempo)*1000)*100000) / 100000);
}