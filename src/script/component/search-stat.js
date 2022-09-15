class SearchStat extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = ``;
    this._shadowRoot.innerHTML = `
    <style>
      p {
        color: #6c757d;
        font-size: 0.9rem;
        margin-top: 1rem;
      }
      span {
        color: #ced4da;
        font-size: 0.96rem
      }
    </style>
    <p class="result-stat small text-secondary mt-3"></p>
    `;
  }
  set keyword(keyword) {
    this._shadowRoot.querySelector("p").innerHTML = `Result for <span class="text-light">"${keyword}"</span>`;
  }
}

customElements.define("search-stat", SearchStat);
