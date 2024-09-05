import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import { fetchLaunchPads } from "./api";

export const useLaunchPadsQuery = () =>
  useQuery({
    queryKey: queryKeys.launchPads,
    queryFn: fetchLaunchPads,
  });
