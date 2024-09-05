import { axiosInstance } from "@/services/axios";

export const queryLaunches = async ({ pageParam }: { pageParam: number }) => {
  const response = await axiosInstance.post("/v5/launches/query", {
    options: {
      limit: 10,
      page: pageParam,
      sort: {
        flightNumber: "desc",
      },
    },
  });

  return response.data as QueryLaunchesResponse;
};
