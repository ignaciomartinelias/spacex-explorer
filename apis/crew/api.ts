import { axiosInstance } from "@/services/axios";

export const fetchCrewMembers = async () => {
  const response = await axiosInstance.post<FetchCrewMembersResponse>(
    "/v4/crew/query"
  );

  return response.data.docs;
};
