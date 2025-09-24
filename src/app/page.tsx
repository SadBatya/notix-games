"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";

import { Home } from "@/page";

export default function Page() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </QueryClientProvider>
  );
}
