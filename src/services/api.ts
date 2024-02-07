import { parseCocktail, type Cocktail } from "@/models/Cocktail";
import axios from "axios";

const BASE_URL = 'https://www.thecocktaildb.com/api/json/'
const version = '/v1/1'

const api = axios.create({ baseURL: `${BASE_URL}/${version}` });



export default {
  async fetchCocktail(name: string): Promise<Cocktail| null> {
    const response = await api.get('/search.php', {params: {s: name}});

    if(response.data?.drinks[0]) {
      
      return parseCocktail(response.data?.drinks[0])
    }

    return  null;
  }
};