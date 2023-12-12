function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // stop the function from running

  audio.currentTime = 0; // rewinds to start of audio to enable rapid sounds
  audio.play();

  key.classList.add("playing");
  // console.log(key);
}

// creating remove transition function
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it is not a transform
  //console.log(e.propertyName);
  this.classList.remove("playing");
}

// selecting all elements with the ".key" class
const keys = document.querySelectorAll(".key");
// listen for event
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
