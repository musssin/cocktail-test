import axios from "axios";

const BASE_URL = 'https://www.thecocktaildb.com/api/json/'
const version = '/v1/1'

const api = axios.create({ baseURL: `${BASE_URL}/${version}` });



export default {
  async fetchCocktail(name: string) {
    const response = await api.get('/search.php', {params: {s: name}});
    return response.data;
  }
};