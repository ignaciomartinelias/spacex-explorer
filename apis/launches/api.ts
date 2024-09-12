import { axiosInstance } from "@/services/axios";

export const fetchLaunches = async () => {
  const response = await axiosInstance.post<FetchLaunchesResponse>(
    "/v5/launches/query",
    {
      options: {
        sort: {
          date_utc: "asc",
        },
        limit: 1000,
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

export const fetchLaunch = async ({ name }: { name: string }) => {
  const response = await axiosInstance.post<FetchLaunchResponse>(
    "/v5/launches/query",
    {
      query: {
        name,
      },
      options: {
        limit: 1,
        populate: [
          {
            path: "rocket",
            select: {
              name: 1,
              type: 1,
              company: 1,
              successRatePct: 1,
            },
          },
          {
            path: "launchpad",
            select: {
              name: 1,
              locality: 1,
              region: 1,
              launchAttempts: 1,
              launchSuccesses: 1,
            },
          },
          {
            path: "payloads",
            select: {
              name: 1,
              type: 1,
              customers: 1,
              nationalities: 1,
              manufacturers: 1,
              massKg: 1,
              massLbs: 1,
              orbit: 1,
              regime: 1,
              lifespanYears: 1,
              dragon: {
                waterLanding: 1,
                landLanding: 1,
              },
            },
          },
        ],
      },
    }
  );
  return response.data.docs[0];
};
