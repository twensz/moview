import "./movie-item";

class MovieList extends HTMLElement {
  connectedCallback() {
    this.setAttribute("class", "row my-4");
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = "";

    if (this._movies) {
      this._movies.forEach((movie) => {
        const movieItemElement = document.createElement("movie-item");
        movieItemElement.movie = movie;
        this.appendChild(movieItemElement);
      });
    } else {
      this.innerHTML = `
      <div class="text-center fs-3 my-5">No results found</div>
      `;
    }
  }
}

customElements.define("movie-list", MovieList);
