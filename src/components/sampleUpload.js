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

    getSampleInputId('sampleInputButtonQ').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonW').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonE').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonA').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonS').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonD').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonZ').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonX').addEventListener('change', onChosenFileChange, false);
    getSampleInputId('sampleInputButtonC').addEventListener('change', onChosenFileChange, false);
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

    if (chosenFile == 'sampleInputButtonQ' ){
        sounds.soundButtonQ = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonW' ) {
        sounds.soundButtonW = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonE' ) {
        sounds.soundButtonE = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonA' ) {
        sounds.soundButtonA = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonS' ) {
        sounds.soundButtonS = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonD' ) {
        sounds.soundButtonD = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonZ' ) {
        sounds.soundButtonZ = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonX' ) {
        sounds.soundButtonX = new Howl({
            urls: [event.target.result]
        });
    } else if (chosenFile == 'sampleInputButtonC') {
        sounds.soundButtonC = new Howl({
            urls: [event.target.result]
        });
    }


}