import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Mzc0MTQwOWNmNTY2MWQ5NDQyOWMwOGY0ZjAwOWI2OCIsInN1YiI6IjY1MGZkZGI0M2E0YTEyMDBlMjk0ODI5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fFtT8EyNmfO_mTttmfb-cqPBPyEEzT-UiM-nHmilxps";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get (BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}