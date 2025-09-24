"use client";

import { BookCard, Section } from "@/shared";
import { useGetBooks } from "@/shared/api/hooks/useGetBooks";
import { useSearchParams } from "next/navigation";

export const Home = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const { data, isLoading, error } = useGetBooks({ search: search ?? "" });

  console.log(data, "data");

  return (
    <Section>
      <BookCard />
    </Section>
  );
};
