// Telegram destination
const TELEGRAM_URL = "https://t.me/Ayush26055?text=Hello%20Sir%2C%0A%0AI%20Am%20Interested";

const timerText = document.getElementById("timerText");
const progressBar = document.getElementById("progressBar");
const joinBtn = document.getElementById("joinBtn");

let seconds = 3;
let opened = false;

function openTelegram() {
  if (opened) return;
  opened = true;
  window.location.href = TELEGRAM_URL;
}

joinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openTelegram();
});

const timer = setInterval(() => {
  seconds--;
  progressBar.style.width = `${((3 - seconds) / 3) * 100}%`;

  if (seconds > 0) {
    timerText.textContent = `Opening Telegram in ${seconds}s — or tap above`;
  } else {
    clearInterval(timer);
    timerText.textContent = "Opening Telegram…";
    progressBar.style.width = "100%";
    openTelegram();
  }
}, 1000);
