import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import { fetchLandpads } from "./api";

export const useLandpadsQuery = () =>
  useQuery({
    queryKey: queryKeys.landpads,
    queryFn: fetchLandpads,
  });
