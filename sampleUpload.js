'use strict';

function getSampleInputId(sampleInputElement) {
    return document.getElementById(sampleInputElement);
}

window.addEventListener('load', onDocumentLoaded, false);

function onDocumentLoaded() {
    getSampleInputId('sampleInput').addEventListener('change', onChosenFileChange, false);
}

function onChosenFileChange() {
    loadSample(this.files[0], onSampleLoaded);
}

function loadSample(sampleObj, callback) {
    var reader = new FileReader();
    reader.onload = callback;
    reader.readAsDataURL (sampleObj);
}

function onSampleLoaded(event) {
    sounds.blackSound = new Howl({
        urls: [event.target.result]
    });
    document.getElementById('sampleInputInfoMessage').style.visibility = 'hidden';
}