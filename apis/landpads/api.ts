import { axiosInstance } from "@/services/axios";

export const fetchLandpads = async () => {
  const response = await axiosInstance.post<FetchLandpadsResponse>(
    "/v4/landpads/query",
    {
      options: {
        limit: 1000,
      },
    }
  );
  return response.data.docs;
};

export const fetchLandpad = async ({ name }: { name: string }) => {
  const response = await axiosInstance.post<FetchLandpadResponse>(
    "/v4/landpads/query",
    {
      query: {
        name,
      },
      options: {
        limit: 1,
        populate: [
          {
            path: "launches",
            select: {
              name: 1,
              dateUtc: 1,
            },
          },
        ],
      },
    }
  );
  return response.data.docs[0];
};
