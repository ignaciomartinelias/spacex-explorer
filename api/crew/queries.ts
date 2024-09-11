import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import { fetchCrew } from "./api";

export const useCrewQuery = () =>
  useQuery({
    queryKey: queryKeys.crew,
    queryFn: fetchCrew,
  });
