import { axiosInstance } from "@/services/axios";

export const fetchLaunches = async () => {
  const response = await axiosInstance.post<FetchLaunchesResponse>(
    "/v5/launches/query",
    {
      options: {
        sort: {
          date_utc: "asc",
        },
        populate: [
          {
            path: "rocket",
            select: {
              name: 1,
              id: 1,
            },
          },
          {
            path: "launchpad",
            select: {
              name: 1,
              id: 1,
            },
          },
        ],
      },
    }
  );
  return response.data.docs;
};
