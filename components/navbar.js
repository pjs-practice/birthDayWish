class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
        <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 class="text-pink-600 font-bold text-xl">🎀 Sofia's Birthday</h1>
          <ul class="flex space-x-6 text-pink-700 font-medium">
            <li><a href="#top" class="hover:text-pink-500">Home</a></li>
            <li><a href="#balloons" class="hover:text-pink-500">Balloons</a></li>
            <li><a href="#games" class="hover:text-pink-500">Games</a></li>
            <li><a href="#final" class="hover:text-pink-500">Wish</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
