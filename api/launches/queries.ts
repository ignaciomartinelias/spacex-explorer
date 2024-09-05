import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import { queryLaunches } from "./api";

export const useLaunchesInfiniteQuery = () =>
  useInfiniteQuery({
    queryKey: queryKeys.launches,
    queryFn: queryLaunches,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.page + 1 : undefined,
  });
