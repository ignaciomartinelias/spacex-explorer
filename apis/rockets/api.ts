import { axiosInstance } from "@/services/axios";

export const fetchRockets = async () => {
  const response = await axiosInstance.get("/v4/rockets");
  return response.data as FetchRocketsResponse;
};
