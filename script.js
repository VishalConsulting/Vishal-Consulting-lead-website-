// Telegram destination
const TELEGRAM_URL = "https://t.me/vishalconsulting1";

const timerText = document.getElementById("timerText");
const progressBar = document.getElementById("progressBar");
const joinBtn = document.getElementById("joinBtn");

let seconds = 5;
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
  progressBar.style.width = `${((5 - seconds) / 5) * 100}%`;

  if (seconds > 0) {
    timerText.textContent = `Opening Telegram in ${seconds}s — or tap above`;
  } else {
    clearInterval(timer);
    timerText.textContent = "Opening Telegram…";
    progressBar.style.width = "100%";
    openTelegram();
  }
}, 1000);
