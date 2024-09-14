import { axiosInstance } from "@/services/axios";

export const fetchCompanyInfo = async () => {
  const response = await axiosInstance.get<FetchCompanyResponse>("/v4/company");
  return response.data;
};
