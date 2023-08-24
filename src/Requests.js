const API_KEY = "add1c8a405543a1d1cfc8c057ee45933";

const normal = API_KEY;

const hp = [
    `/search/movie?query=harry%20potter%20and%20the%20philosopher%27s%20stone&api_key=${API_KEY}`,    
    `/search/movie?query=harry%20potter%20and%20the%20chamber%20of%20secrets&api_key=${API_KEY}`,    
    `/search/movie?query=harry%20potter%20and%20the%20prisoner%20of%20azkaban&api_key=${API_KEY}`,    
    `/search/movie?query=harry%20potter%20and%20the%20goblet%20of%20fire&api_key=${API_KEY}`,    
    `/search/movie?query=harry%20potter%20and%20the%20order%20of%20phoenix&api_key=${API_KEY}`,    
    `/search/movie?query=harry%20potter%20and%20the%20half-blood%20prince&api_key=${API_KEY}`,    
    `/search/movie?query=harry%20potter%20and%20the%20deathly%20hallows:%20Part%201&api_key=${API_KEY}`,    
    `/search/movie?query=harry%20potter%20and%20the%20deathly%20hallows:%20Part%202&api_key=${API_KEY}` ] ;


const fame = [
    `/search/movie?query=fight%20club&api_key=${API_KEY}`,
    `/search/movie?query=planet%20of%20the%20apes&api_key=${API_KEY}`,
    `/search/movie?query=avatar&api_key=${API_KEY}`,
    `/search/movie?query=inception&api_key=${API_KEY}`,
    `/search/movie?query=interstellar&api_key=${API_KEY}`,
    `/search/movie?query=aladdin&api_key=${API_KEY}`,
    `/search/movie?query=frozen&api_key=${API_KEY}`,
];


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/trending/all/day?with_networks=213&api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHarryPotterMovies: hp,
    fetchNormal: normal,
    fetchFamous: fame
}

export default requests;