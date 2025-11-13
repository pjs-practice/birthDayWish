class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 py-8 text-center text-pink-700 relative overflow-hidden">
        <div class="max-w-4xl mx-auto">
          <p class="text-lg mb-2">Made with 💖 and endless sparkle for <strong>Sofia</strong></p>
          <p class="text-sm opacity-70">© ${new Date().getFullYear()} Your Friend ✨</p>
        </div>
        <div class="absolute right-6 top-4 text-pink-400 animate-float">
          <i data-feather="heart"></i>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
