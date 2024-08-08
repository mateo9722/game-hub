import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4e0e0ea0af2644738001c749d2aabb70",
  },
});
