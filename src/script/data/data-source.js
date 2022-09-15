class DataSource {
  static async searchMovie(keyword) {
    const urlAPI = `http://www.omdbapi.com/?apikey=97b43cc0&s=${keyword}`;
    try {
      const response = await fetch(urlAPI);
      const responseJson = await response.json();
      const result = await responseJson.Search;

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getMovie(movieId) {
    const urlAPI = `http://www.omdbapi.com/?apikey=97b43cc0&i=${movieId}`;
    try {
      const response = await fetch(urlAPI);
      const responseJson = await response.json();

      return Promise.resolve(responseJson);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default DataSource;
