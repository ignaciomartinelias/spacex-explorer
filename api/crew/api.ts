import { axiosInstance } from "@/services/axios";

export const fetchCrew = async () => {
  const response = await axiosInstance.get("/v4/crew");
  return response.data as FetchCrewResponse;
};
