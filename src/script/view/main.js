import "../component/movie-list";
import "../component/movie-detail";
import "../component/app-bar";
import "../component/search-box";
import "../component/search-stat";
import DataSource from "../data/data-source";

const main = () => {
  const movieListELement = document.querySelector("movie-list");
  const searchBoxElement = document.querySelector("search-box");

  const onClickedSearchBox = () => {
    DataSource.searchMovie(searchBoxElement.value)
      .then((result) => renderResult(result))
      .catch((error) => fallbackResult(error));

    document.querySelector("search-stat").keyword = searchBoxElement.value;
  };
  const renderResult = (result) => {
    movieListELement.movies = result;
  };
  const fallbackResult = (error) => {
    console.log(error);
  };
  searchBoxElement.clickEvent = onClickedSearchBox;
};

export default main;
