var audio = document.getElementById("audio");
var playPauseButton = document.getElementById("play-pause-icon");
var volumeSlider = document.getElementById("volume-slider");

const images = document.querySelectorAll(".background-image");
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add("show");
        } else {
            image.classList.remove("show");
        }
    });
}

function switchImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);
setInterval(switchImage, 5000); // Přepínání obrázků každých 5 sekund

playPauseButton.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      playPauseButton.classList.remove("fa-play");
      playPauseButton.classList.add("fa-pause");
    } else {
      audio.pause();
      playPauseButton.classList.remove("fa-pause");
      playPauseButton.classList.add("fa-play");
    }
  });
  
  volumeSlider.addEventListener("input", function() {
    audio.volume = volumeSlider.value;
  });
  
  document.body.style.overflow = "hidden";
  document.addEventListener("wheel", preventDefault, { passive: false });
  document.addEventListener("touchmove", preventDefault, { passive: false });
  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }
  