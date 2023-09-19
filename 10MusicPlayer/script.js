let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// This code ensures the progress bar is updated when the audio metadata is loaded.
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// This code continuously updates the progress bar as the audio plays.
song.addEventListener("timeupdate", () => {
  progress.value = song.currentTime;
});

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
}

song.addEventListener("timeupdate", () => {
  progress.value = song.currentTime;
});

progress.onchange = function () {
  song.play();
  StorageManager.currentTime = progress.value;
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
};
