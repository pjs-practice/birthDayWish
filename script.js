// --- BALLOON POP SECTION ---
document.querySelectorAll('.balloon').forEach(balloon => {
  balloon.addEventListener('click', function () {
    const wishText = this.getAttribute('data-wish');
    const wishDisplay = document.getElementById('wish-display');
    const textElement = wishDisplay.querySelector('p');

    this.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    this.style.transform = "scale(1.3)";
    this.style.opacity = "0";

    const popSound = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_2a8cb3fbb4.mp3");
    popSound.play();

    setTimeout(() => this.remove(), 300);

    wishDisplay.classList.remove('hidden');
    textElement.textContent = wishText;
    textElement.classList.add("animate-fade-in-up");

    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#f472b6', '#ec4899', '#f9a8d4', '#fbcfe8']
    });
  });
});

// --- CELEBRATE BUTTON ---
document.querySelector('button').addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('#balloons').offsetTop,
    behavior: 'smooth'
  });
});

// --- FINAL CONFETTI BUTTON ---
document.getElementById('confetti-btn').addEventListener('click', () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);
    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
  }, 250);
});
    top: document.querySelector('section:nth-of-type(2)').offsetTop,
    behavior: 'smooth'
  });
});

// --- FINAL CONFETTI BUTTON ---
document.getElementById('confetti-btn').addEventListener('click', () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
  }, 250);
});

// --- STAR WISH GAME (Make a Wish section) ---
const wishSection = document.querySelector('.text-5xl:contains("✨")');
if (wishSection) {
  wishSection.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
      confetti({
        particleCount: 10,
        angle: 60 + i * 15,
        spread: 55,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#fff', '#fbcfe8', '#f472b6']
      });
    }
    alert("✨ Make your wish, Sofia... and it will come true! ✨");
  });
}
