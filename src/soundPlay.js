// const config = {
//   imgPath: './images/',
//   soundPath: 'soundSamples/',
//   buttons: [
//     {
//       key: 'Q',
//       keyCode: '113',
//       image: 'button_default.png',
//       sound: 'A/bubbles.mp3'
//     },
//     {
//       key: 'W',
//       keyCode: '119',
//       image: 'button_default.png',
//       sound: 'A/bubbles.mp3'
//     },
//     {
//       key: 'E',
//       keyCode: '101',
//       image: 'button_default.png',
//       sound: 'A/bubbles.mp3'
//     },
//     {
//       key: 'R',
//       keyCode: '114',
//       image: 'button_default.png',
//       sound: 'A/bubbles.mp3'
//     },
//     {
//       key: 'T',
//       keyCode: '116',
//       image: 'button_default.png',
//       sound: 'A/bubbles.mp3'
//     },
//     {
//       key: 'Y',
//       keyCode: '121',
//       image: 'button_default.png',
//       sound: 'A/bubbles.mp3'
//     },
//     {
//       key: 'U',
//       keyCode: '117',
//       image: 'button_default.png',
//       sound: 'A/bubbles.mp3'
//     },
//     {
//       key: 'I',
//       keyCode: '105',
//       image: 'button_default.png',
//       sound: 'A/bubbles.mp3'
//     },
//   ],
// }
//
// var MobileSynth = MobileSynth ||
//  (function(){
//       //private variables
//       var btn1, btn2;
//
//       //private functions
//       var privateMethod = funtion(){
//
//       };
//
//       var privateMethod2 = function(){
//
//       };
//
//       return {
//            //public variables
//            config: config,
//
//
//            init: {
//              renderButtons();
//              bindEvents();
//            },
//
//            renderButtons: (){
//              let html = this.config.buttons.reduce((button)=> {
//                return `<div class="col-md-1">
//                            <div>
//                                <h1>Q</h1>
//                            </div>
//                            <input type="file" id="sampleInputButtonA">
//                        </div>`
//              })
//            },
//
//            bindEvents: (){
//
//            },
//
//            //public methods
//            loadSound: (filePath) {
//              new Howl({
//                  urls: [`${this.config.soundPath}${filePath}`]
//              }),
//            },
//            playSound: () {
//
//            }
//       };
//  });
//
// const sounds = {
//     soundButtonA: new Howl({
//         urls: ['soundSamples/A/bubbles.mp3']
//     }),
//     soundButtonB: new Howl({
//         urls: ['soundSamples/A/clay.mp3']
//     }),
//     soundButtonC: new Howl({
//         urls: ['soundSamples/A/confetti.mp3']
//     }),
//     soundButtonD: new Howl({
//         urls: ['soundSamples/A/corona.mp3']
//     }),
//     soundButtonE: new Howl({
//         urls: ['soundSamples/A/dotted-spiral.mp3']
//     }),
//     soundButtonF: new Howl({
//         urls: ['soundSamples/A/flash-1.mp3']
//     }),
//     soundButtonG: new Howl({
//         urls: ['soundSamples/A/flash-2.mp3']
//     }),
//     soundButtonH: new Howl({
//         urls: ['soundSamples/A/flash-3.mp3']
//     }),
//     blackSound: null
// };
//
// document.addEventListener('click', function(event){
//     if(event.target.id  === 'buttonA' || event.target.id  === 'buttonA-letter'){
//         sounds.soundButtonA.play();
//     } else if (event.target.id === 'buttonB' || event.target.id  === 'buttonB-letter') {
//         sounds.soundButtonB.play();
//     } else if (event.target.id === 'buttonC' || event.target.id  === 'buttonC-letter') {
//         sounds.soundButtonC.play();
//     } else if (event.target.id === 'buttonD' || event.target.id  === 'buttonD-letter') {
//         sounds.soundButtonD.play();
//     } else if (event.target.id === 'buttonE' || event.target.id  === 'buttonE-letter') {
//         sounds.soundButtonE.play();
//     } else if (event.target.id === 'buttonF' || event.target.id  === 'buttonF-letter') {
//         sounds.soundButtonF.play();
//     } else if (event.target.id === 'buttonG' || event.target.id  === 'buttonG-letter') {
//         sounds.soundButtonG.play();
//     } else if (event.target.id === 'buttonH' || event.target.id  === 'buttonH-letter') {
//         sounds.soundButtonH.play();
//     }
// });
//
// document.addEventListener('keypress', function(event){
//     pressedKey = event.which;
//
//     const lightButtonTime = 80;
//
//     if(pressedKey == 113){
//         sounds.soundButtonA.play();
//         document.getElementById('buttonA').style.backgroundImage = "url('./images/button_pressed.png')";
//         setTimeout(function (){document.getElementById('buttonA').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
//     } else if (pressedKey == 119) {
//         sounds.soundButtonB.play();
//         document.getElementById('buttonB').style.backgroundImage = "url('./images/button_pressed.png')";
//         setTimeout(function (){document.getElementById('buttonB').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
//     } else if (pressedKey == 101) {
//         sounds.soundButtonC.play();
//         document.getElementById('buttonC').style.backgroundImage = "url('./images/button_pressed.png')";
//         setTimeout(function (){document.getElementById('buttonC').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
//     } else if (pressedKey == 114) {
//         sounds.soundButtonD.play();
//         document.getElementById('buttonD').style.backgroundImage = "url('./images/button_pressed.png')";
//         setTimeout(function (){document.getElementById('buttonD').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
//     } else if (pressedKey == 116) {
//         sounds.soundButtonE.play();
//         document.getElementById('buttonE').style.backgroundImage = "url('./images/button_pressed.png')";
//         setTimeout(function (){document.getElementById('buttonE').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
//     } else if (pressedKey == 121) {
//         sounds.soundButtonF.play();
//         document.getElementById('buttonF').style.backgroundImage = "url('./images/button_pressed.png')";
//         setTimeout(function (){document.getElementById('buttonF').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
//     } else if (pressedKey == 117) {
//         sounds.soundButtonG.play();
//         document.getElementById('buttonG').style.backgroundImage = "url('./images/button_pressed.png')";
//         setTimeout(function (){document.getElementById('buttonG').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
//     } else if (pressedKey == 105) {
//         sounds.soundButtonH.play();
//         document.getElementById('buttonH').style.backgroundImage = "url('./images/button_pressed.png')";
//         setTimeout(function (){document.getElementById('buttonH').style.backgroundImage = "url('./images/button_default.png')"},lightButtonTime);
//     }
// });
