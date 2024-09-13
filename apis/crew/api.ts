import { axiosInstance } from "@/services/axios";

export const fetchCrewMembers = async () => {
  const response = await axiosInstance.post<FetchCrewMembersResponse>(
    "/v4/crew/query",
    {
      options: {
        limit: 1000,
      },
    }
  );

  return response.data.docs;
};
