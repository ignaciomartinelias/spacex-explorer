import { axiosInstance } from "@/services/axios";

export const fetchLaunches = async () => {
  const response = await axiosInstance.get("/v5/launches");
  return response.data as FetchLaunchesResponse;
};
