import { axiosInstance } from "@/services/axios";

export const fetchRockets = async () => {
  const response = await axiosInstance.post<FetchRocketsResponse>(
    "/v4/rockets/query",
    {
      options: {
        sort: {
          active: "desc",
          firstFlight: "desc",
        },
      },
    }
  );
  return response.data.docs;
};

export const fetchRocket = async ({ name }: { name: string }) => {
  const response = await axiosInstance.post<FetchRocketResponse>(
    `/v4/rockets/query`,
    {
      query: {
        name,
      },
      options: {
        limit: 1,
      },
    }
  );

  return response.data.docs[0];
};
