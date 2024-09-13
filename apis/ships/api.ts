import { axiosInstance } from "@/services/axios";

export const fetchShips = async () => {
  const response = await axiosInstance.post<FetchShipsResponse>(
    "/v4/ships/query",
    {
      options: {
        limit: 1000,
        sort: {
          active: "desc",
          yearBuilt: "desc",
        },
      },
    }
  );
  return response.data.docs;
};

export const fetchShip = async ({ name }: { name: string }) => {
  const response = await axiosInstance.post<FetchShipResponse>(
    `/v4/ships/query`,
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
              success: 1,
            },
          },
        ],
      },
    }
  );

  return response.data.docs[0];
};
