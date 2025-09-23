"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Home } from "@/page";

export default function Page() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
