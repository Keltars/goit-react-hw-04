import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getPhotos = async (query, currentPage) => {
  const res = await axios.get("/search/photos", {
    params: {
      client_id: "GTehjP-QVt9UhN9axDaQDTnBo5GcSZJwjlFqiKfHYOE",
      page: currentPage,
      per_page: 10,
      query: query,
    },
  });
  return res.data.results;
};
