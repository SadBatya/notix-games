"use client";

import { BookCard, Section } from "@/shared";
import { useGetBooks } from "@/shared/api/hooks/useGetBooks";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const { data, isLoading, error } = useGetBooks({ search: search ?? "" });

  if (isLoading) return <div>Loading books...</div>;
  if (error) return <div>Error loading books</div>;

  return (
    <Section>
      <BookCard img="" title="" description="" />
    </Section>
  );
}
