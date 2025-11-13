class FloatingElements extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div class="absolute inset-0">
          ${Array.from({ length: 15 }).map(() => `
            <span class="floating-emoji text-pink-300 absolute text-3xl animate-float-slow">
              ${['💖','🌸','✨','💕'][Math.floor(Math.random()*4)]}
            </span>
          `).join('')}
        </div>
      </div>
    `;

    // Randomize emoji positions
    this.querySelectorAll('.floating-emoji').forEach(el => {
      el.style.left = Math.random() * 100 + 'vw';
      el.style.top = Math.random() * 100 + 'vh';
      el.style.animationDelay = Math.random() * 5 + 's';
      el.style.animationDuration = 4 + Math.random() * 4 + 's';
    });
  }
}

customElements.define('floating-elements', FloatingElements);

