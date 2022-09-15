class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark text-light py-2 border-bottom border-secondary">
      <div class="container-fluid">
        <a class="navbar-brand mx-auto my-2 fw-bold text-uppercase fs-3" href="#">M<i class="fa-solid fa-circle-play"></i>view</a>
      </div>
    </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
