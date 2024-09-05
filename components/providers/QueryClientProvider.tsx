"use client";

import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

export const QueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  );
};
