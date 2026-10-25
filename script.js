const heartBox = document.getElementById("hearts");
const symbols = ["♥", "♡", "💕", "💗", "💖", "💘"];

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = 14 + Math.random() * 26 + "px";
  heart.style.animationDuration = 5 + Math.random() * 7 + "s";
  heartBox.appendChild(heart);
  setTimeout(() => heart.remove(), 12000);
}

setInterval(createHeart, 260);

let opened = false;
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const hint = document.getElementById("hint");

function openLetter() {
  if (opened) return;
  opened = true;
  envelope.classList.add("open");
  hint.textContent = "A little something from my heart... ❤️";

  setTimeout(() => {
    letter.style.display = "block";
    letter.scrollIntoView({ behavior: "smooth", block: "start" });
    for (let i = 0; i < 30; i++) {
      setTimeout(createHeart, i * 60);
    }
  }, 500);
}

envelope.addEventListener("click", openLetter);

envelope.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openLetter();
  }
});

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const successMessage = document.getElementById("successMessage");

let noScale = 1;
let yesScale = 1;

noBtn.addEventListener("click", function () {
  noScale = Math.max(0.35, noScale - 0.12);
  yesScale = Math.min(2.4, yesScale + 0.18);

  const maxX = 150;
  const maxY = 60;

  const randomX = Math.random() * (maxX * 2) - maxX;
  const randomY = Math.random() * (maxY * 2) - maxY;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(${noScale})`;
  noBtn.style.opacity = "0.9";
  noBtn.style.fontSize = `${1.1 * noScale}rem`;

  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.style.fontSize = `${1.1 * yesScale}rem`;
  yesBtn.style.boxShadow = `0 0 ${12 + yesScale * 12}px rgba(255, 122, 169, 0.8)`;

  if (noScale <= 0.55) {
    noBtn.style.pointerEvents = "none";
    noBtn.style.opacity = "0.5";
  }
});

yesBtn.addEventListener("click", function () {
  successMessage.style.display = "block";
  successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
  for (let i = 0; i < 40; i++) {
    setTimeout(createHeart, i * 35);
  }
});
