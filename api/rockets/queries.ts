import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import { fetchRockets } from "./api";

export const useRocketsQuery = () =>
  useQuery({
    queryKey: queryKeys.rockets,
    queryFn: fetchRockets,
  });
