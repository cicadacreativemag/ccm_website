// script.js (or within your HTML template)

const audio = document.getElementById('customAudio');
const toggleBtn = document.getElementById('toggleBtn');
const seekSlider = document.getElementById('seekSlider');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');

toggleBtn.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      toggleBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>'; // Change to pause icon
    } else {
      audio.pause();
      toggleBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>'; // Change to play icon
    }
  });
  

audio.addEventListener('timeupdate', function() {
  seekSlider.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('durationchange', function() {
  seekSlider.max = audio.duration;
  duration.textContent = formatTime(audio.duration);
});

seekSlider.addEventListener('input', function() {
  audio.currentTime = seekSlider.value;
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formatted = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  return formatted;
}
