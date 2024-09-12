import { axiosInstance } from "@/services/axios";

export const fetchRockets = async () => {
  const response = await axiosInstance.post<FetchRocketsResponse>(
    "/v4/rockets/query"
  );
  return response.data.docs;
};
