import { axiosInstance } from "@/services/axios";

export const fetchLaunchpads = async () => {
  const response = await axiosInstance.post<FetchLaunchpadsResponse>(
    "/v4/launchpads/query"
  );
  return response.data.docs;
};

export const fetchLaunchpad = async ({ name }: { name: string }) => {
  const response = await axiosInstance.post<FetchLaunchpadResponse>(
    `/v4/launchpads/query`,
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
          {
            path: "rockets",
            select: {
              name: 1,
            },
          },
        ],
      },
    }
  );

  return response.data.docs[0];
};
