// variables making connections to DOM elements should go before function that will be using those connections
const musicPlayer = document.querySelector(".musicPlayer");
const trackNameDisplay = document.querySelector(".trackName");
const playTrackOrder = document.querySelector("#audioPlayer");
const playPauseSwitch = document.querySelector(".playButton");

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
// as in, i am not calling playTracks(argument), the browser is calling playTracks(clickEvent)
const playTracks = () => {
  // in order to access the objects within the trackList array, you have to target them explicitly which [trackListIndex] is doing
  // trackList.name will be undefined because there is no name property for the entire trackList array.
  // [trackListIndex] is dynamically rendering the current position within the trackList array - vs hardcoding [0] or [1]

  console.log(trackList[trackListIndex].name);
  trackNameDisplay.innerText = trackList[trackListIndex].name;

  // this was originally playTrackOrder.src = trackList[trackListIndex].file;
  // which continuously reset the src state, which always set the .paused to be true
  // so clicking the play button would always play despite the if else statement.
  // best way to debug would be to run this to see status
  // console.log("before src, paused =", playTrackOrder.paused);
  // playTrackOrder.src = trackList[trackListIndex].file;
  // console.log("after src, paused =", playTrackOrder.paused);
  if (!playTrackOrder.src) playTrackOrder.src = trackList[trackListIndex].file;

  if (playTrackOrder.paused) {
    playTrackOrder.play();
    playPauseSwitch.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="1.5"
     stroke="currentColor"
     class="size-6">
  <path stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>
`;
  } else {
    playTrackOrder.pause();
    playPauseSwitch.innerHTML = `
<svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                      />
                    </svg>
`;
  }
  console.log(playTrackOrder.paused);
};

// Arrow functions are not hoisted like function declarations,
// so event listeners that reference them should be added after the function exists
// Function declarations (function name(){}) ARE hoisted, which is why older examples
// sometimes attach listeners before the function appears in the file
document.querySelector(".playButton").addEventListener("click", playTracks);
