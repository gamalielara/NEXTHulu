const API_KEY = process.env.API_KEY;

const FETCH = {
  trending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  topRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    type: "movie",
  },
  actionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    type: "movie",
  },
  comedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    type: "movie",
  },
  horrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    type: "movie",
  },
  romanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    type: "movie",
  },
  sciFiMovies: {
    title: "SciFi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    type: "movie",
  },
  fantasyMovies: {
    title: "Fantasy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    type: "movie",
  },
  romanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    type: "movie",
  },
  thrillerMovies: {
    title: "Thriller",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    type: "movie",
  },
  mysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    type: "movie",
  },
  tv: {
    title: "TV Movies",
    url: `/discover/tv?api_key=${API_KEY}`,
    type: "tv",
  },
};

export default FETCH;
