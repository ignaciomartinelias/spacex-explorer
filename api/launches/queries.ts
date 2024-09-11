import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import { fetchLaunches } from "./api";

export const useLaunchesQuery = () =>
  useQuery({
    queryKey: queryKeys.launches,
    queryFn: fetchLaunches,
  });
