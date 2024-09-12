import { axiosInstance } from "@/services/axios";

export const fetchLandpads = async () => {
  const response = await axiosInstance.get("/v4/landpads");
  return response.data as FetchLandpadsResponse;
};
