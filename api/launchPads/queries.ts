import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import { fetchLaunchpads } from "./api";

export const useLaunchpadsQuery = () =>
  useQuery({
    queryKey: queryKeys.launchpads,
    queryFn: fetchLaunchpads,
  });
