// variables making connections to DOM elements should go before function that will be using those connections
const musicPlayer = document.querySelector(".musicPlayer");
const trackNameDisplay = document.querySelector(".trackName");

let trackListIndex = 0;

const trackList = [
  {
    name: "Kintsugi",
    file: "/media/Kintsugi.wav",
  },
  {
    name: "Cope",
    file: "/media/severed.wav",
  },
];

// don't need to pass trackList as parameter because I am not calling playTracks manually, the browser is calling it via the eventlistener click on the playbutton
const playTracks = () => {
  console.log("play button clicked");
  console.log(trackList[trackListIndex]);
};

// Arrow functions are not hoisted like function declarations,
// so event listeners that reference them should be added after the function exists
// Function declarations (function name(){}) ARE hoisted, which is why older examples
// sometimes attach listeners before the function appears in the file
document.querySelector(".playButton").addEventListener("click", playTracks);
