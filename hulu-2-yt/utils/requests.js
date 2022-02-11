const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies: {
    title: "Action",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
  },
}
