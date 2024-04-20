import axios from "axios";

const apiKey = "e6a549f1ef2b4d5e610b11e0d550dd0d";
const apiUrl = "https://api.themoviedb.org/3";

const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${apiUrl}/trending/movie/week`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export { getTrendingMovies };
