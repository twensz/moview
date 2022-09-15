class MovieDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set movie(movie) {
    this._movie = movie;
    this.setImage();
    this.renderContent();
  }

  setImage() {
    if (this._movie.Poster == "N/A") {
      this._movie.Poster = "https://dummyimage.com/400x600/000000/eeeeee&text=Not+available";
    }
  }

  renderGenre() {
    const divGenreElement = document.createElement("div");
    divGenreElement.classList.add("mb-2");

    const arrGenre = this._movie.Genre.split(",");

    arrGenre.forEach((genre) => {
      const genreElement = document.createElement("button");
      genreElement.classList.add("btn", "btn-outline-secondary", "btn-sm", "me-1");
      genreElement.innerText = genre;

      divGenreElement.appendChild(genreElement);
    });

    return divGenreElement.outerHTML;
  }

  renderContent() {
    this.querySelector(".modal-body").innerHTML = ``;
    this.querySelector(".modal-body").innerHTML =
      `
      <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${this._movie.Poster}" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${this._movie.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this._movie.Year} &#8226; ${this._movie.Rated} &#8226; ${this._movie.Runtime}</h6>
            ` +
      this.renderGenre() +
      `
            <p class="card-text">${this._movie.Plot}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Director <span class="ms-2 text-danger">${this._movie.Director}</span>
              </li>
              <li class="list-group-item">
                Writer <span class="ms-2 text-danger">${this._movie.Writer}</span>
              </li>
              <li class="list-group-item">
                Actors <span class="ms-2 text-danger">${this._movie.Actors}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      `;
  }

  render() {
    this.innerHTML = `
    <div
        class="modal modal-lg fade"
        id="movieModal"
        tabindex="-1"
        aria-labelledby="movieModalLabel"
        aria-hidden="true"
      >
      <div class="modal-dialog">
        <div class="modal-content bg-dark">
          <div class="modal-header">
            <h5 class="modal-title" id="movieModalLabel">Movie Detail</h5>
            <button type="button" class="btn-close bg-ligth" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
  
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("movie-detail", MovieDetail);
