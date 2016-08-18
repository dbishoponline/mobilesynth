//'use strict';
//
//function getSampleInputId(sampleInputElement) {
//    return document.getElementById(sampleInputElement);
//}
//
//window.addEventListener('load', onDocumentLoaded, false);
//
//function onDocumentLoaded() {
//    getSampleInputId('sampleInput').addEventListener('change', onChosenFileChange, false);
//}
//
//function onChosenFileChange() {
//    loadSample(this.files[0], onSampleLoaded);
//}
//
//function loadSample(sampleObj, callback) {
//    var reader = new FileReader();
//    reader.onload = callback;
//    reader.readAsDataURL (sampleObj);
//}
//
//function onSampleLoaded(event) {
//
//
//    sounds.blackSound = new Howl({
//        urls: [event.target.result]
//    });
//    document.getElementById('sampleInputInfoMessage').style.visibility = 'hidden';
//}

'use strict';

var chosenFile = null;

function getSampleInputId(sampleInputElement) {
    return document.getElementById(sampleInputElement);
}

window.addEventListener('load', onDocumentLoaded, false);

function onDocumentLoaded() {

    getSampleInputId('sampleInputButtonA').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonB').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonC').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonD').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonE').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonF').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonG').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonH').addEventListener('change', onChosenFileChange, false);
}

function onChosenFileChange() {
    loadSample(this.files[0], onSampleLoaded);
    chosenFile = this.id;
}

function loadSample(sampleObj, callback) {
    var reader = new FileReader();
    reader.onload = callback;
    reader.readAsDataURL (sampleObj);
}

function onSampleLoaded(event) {

    if (chosenFile == 'sampleInputButtonA' ){
        sounds.soundButtonA = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonB' ) {
        sounds.soundButtonB = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonC' ) {
        sounds.soundButtonC = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonD' ) {
        sounds.soundButtonD = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonE' ) {
        sounds.soundButtonE = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonF' ) {
        sounds.soundButtonF = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonG' ) {
        sounds.soundButtonG = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonH' ) {
        sounds.soundButtonH = new Howl({
            urls: [event.target.result]
        });
    }

}