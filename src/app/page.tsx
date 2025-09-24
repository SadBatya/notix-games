"use client";

import { CharacterCard, Section, Skeleton } from "@/shared";
import { useGetCharacters } from "@/shared/api";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const { data, isLoading, isPending, error } = useGetCharacters(name || "");

  if (isPending || isLoading)
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );

  if (error) return <Section>Ошибка загрузки персонажей</Section>;

  return (
    <Section>
      <div className="flex flex-wrap gap-4 justify-center">
        {data?.results.map(({ id, name, status, image }) => (
          <CharacterCard key={id} img={image} title={name} status={status} />
        ))}
      </div>
    </Section>
  );
}
