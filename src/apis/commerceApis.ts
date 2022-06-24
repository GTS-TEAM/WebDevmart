import axios from "axios";
import { BASE_URL } from "../constaint/constant";

axios.defaults.baseURL = BASE_URL;

export const commerceApis = {
  getAllProduct: async (limit: number) => {
    return axios.get<any>(`product?sort=created_at desc&page=1&limit=${limit}`);
  },
};
