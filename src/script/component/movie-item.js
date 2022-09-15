import DataSource from "../data/data-source";

class MovieItem extends HTMLElement {
  connectedCallback() {
    this.setAttribute("class", "col-sm-6 col-md-3 mb-3");
    this.setAttribute("data-bs-toggle", "modal");
    this.setAttribute("data-bs-target", "#movieModal");
  }

  get movie() {
    return this._movie;
  }

  set movie(movie) {
    this._movie = movie;
    this.setImage();
    this.render();
  }

  setImage() {
    if (this._movie.Poster == "N/A") {
      this._movie.Poster = "https://dummyimage.com/400x600/000000/eeeeee&text=Not+available";
    }
  }

  render() {
    this.innerHTML = `
    <div class="card border-0 bg-transparent">
      <img src="${this._movie.Poster}" class="card-img-top" alt="..." />
      <div class="card-body px-0 py-2">
        <h5 class="card-title">${this._movie.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${this._movie.Year}</h6>
      </div>
    </div>
    `;

    this.addEventListener("click", function () {
      const movieDetail = document.querySelector("movie-detail");

      DataSource.getMovie(this._movie.imdbID)
        .then((result) => (movieDetail.movie = result))
        .catch((error) => console.log(error));
    });
  }
}

customElements.define("movie-item", MovieItem);
