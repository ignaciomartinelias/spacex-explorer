import { axiosInstance } from "@/services/axios";

export const fetchLaunchpads = async () => {
  const response = await axiosInstance.get("/v4/launchpads");
  return response.data as FetchLaunchpadsResponse;
};
