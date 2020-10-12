let reason;
let station;
let mtaData;
let bor;

window.addEventListener('load', function() {
    console.log('page is loaded');
    
    fetch('mta.json') 
        .then(response => response.json())

        .then(data => {
            // console.log(data.NYCOutages.outage[0].reason);
            //why cant i use data.results?
            let mtaArray = data.NYCOutages.outage; 
            let ranNumber = Math.floor(Math.random()*mtaArray.length);
       
            reason = mtaArray[ranNumber].reason;
            console.log('lung status (reason value) is ' + reason)

            // let stationElement = document.getElementById('mta-station');
            // stationElement.value = mtaArray[ranNumber].station;

            station = mtaArray[ranNumber].station;
            console.log('pick up location (station values) is ' + station)

            mtaData = data;
      
            // let i=0;
            // for (i = 0; i < 52; i++){
            // console.log(mtaArray);
            // }
    })


    // each time user clicks on button, the random station and reson are filled in based on functions belows

    let button = document.getElementById('lungButton');
    button.addEventListener('click', function() {
        
        randomizeReason();
        document.getElementById('mta-status').innerHTML = reason;

        randomizeStation();
        document.getElementById('mta-station').innerHTML = station;
        console.log(' "locate lung" Button was clicked');

        //???not showing text CAN USE VARIABLES 
        document.getElementById('WhenClicks').innerHTML= '<em> Access to Lungs Made Possible by RFID Microchip Technologies </em>'

    })

})

function randomizeReason() {
    let mtaArray = mtaData.NYCOutages.outage; 
    let ranNumber = Math.floor(Math.random()*mtaArray.length);
    reason = mtaArray[ranNumber].reason;
}

function randomizeStation() {
    let mtaArray = mtaData.NYCOutages.outage; 
    let ranNumber = Math.floor(Math.random()*mtaArray.length);
    station = mtaArray[ranNumber].station;

bor = mtaArray[ranNumber].borough;
}




/*-----------  p5 CODE BELOW ONLY -----------*/




/*
note: SONG + MM find credit to CodeTrain video inspiration
 */

let song;

function preload() {
    song = loadSound('assets/LungsAudio.mp3');
}

function setup() {
    console.log("P5 setup!!!");
    createCanvas(windowWidth, windowHeight);
    //song.loop(); // song is ready to play during setup() because it was loaded during preload
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background('black');
    //???had to add black otherwsie dots satr white... no idea why???
    fill('black');
    noStroke();
    frameRate(2);

    for (var x = 0; x <= width; x += 50) {
        for (var y = 0; y <= height; y += 60) {

            if (bor == "BKN"){
            fill(random(25), 0, random(100));
            }
            if (bor == "QNS"){
            fill(random(130), random(95), 0);
            }
            if (bor == "BX"){
            fill(random(10), random(255), random(10));
            }
            if (bor == "MN"){
            fill(150, random(120), random(180), random(155));
            }
            ellipse(x, y, 25, 25);

            
        }
    }
    
}

function mousePressed() {
    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.pause(); // .play() will resume from .pause() position
    } else {
    song.play();
  }
}


 












/*-----------  NOTES FROM OLDER SNIPPETS -----------*/

// ADD THESE 2 to p5:

// 1.
//  function setup() {
//     console.log("P5 setup!!!"); 

// 2.
//  function draw() {
//     if (MTAData) {
//         console.log ('data for p5 is ready');
//         // console.log(mtaData.NYCOutages.outage);
//     }
//         else {
//         console.log('data NOT ready for p5')
//     }
   

// for (var x = 0; x <= mouseX; x += 30) {
//     for (var y = 0; y <= mouseY; y += 30) {
//         fill(random(255), 70, random(200));
//         ellipse(x, y, 25, 25);
//     }
// }


// ??? Uncaught TypeError: Cannot read property 'catch' of undefined
// .catch(error => {
// console.log("Error!!! : " + error);
// })


//  let i=0;
//  let reasonElement = document.getElementById('mta-status');
//  reasonElement.innerHTML = data.NYCOutages.outage[i].reason;
//  for (i = 0; i < 52; i++){
//  console.log(data.NYCOutages.outage[i].reason);
//  }

//  to return first object's reason value:
//  console.log(data.NYCOutages.outage[0].name)
