"use client";

import { BookCard, Section } from "@/shared";
import { useGetBooks } from "@/shared/api/hooks/useGetBooks";

export const Home = () => {
  const { data, isLoading, error } = useGetBooks({ search: "" });
  console.log(data, "список книг");
  return (
    <Section>
      <BookCard />
    </Section>
  );
};
