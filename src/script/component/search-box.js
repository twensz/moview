class SearchBox extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get value() {
    return this.querySelector("#searchInput").value;
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="input-group">
      <span class="input-group-text bg-white"><i class="fa-solid fa-magnifying-glass"></i></span>
      <input type="text" class="form-control" id="searchInput" placeholder="Search for movie or series..." />
      <button class="btn btn-outline-secondary" type="button" id="searchButton">Search</button>
    </div>
    `;

    this.querySelector("#searchButton").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-box", SearchBox);
