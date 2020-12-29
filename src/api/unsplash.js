import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Oh7C2Vvjxn_dyTVe_VFFwbXhHcKXS2-z7ON0Z1lB3lE",
  },
});
