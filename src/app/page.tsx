"use client";

import { CharacterCard, Section, Skeleton } from "@/shared";
import { useGetCharacters } from "@/shared/api";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const { data, isLoading, isPending, isError } = useGetCharacters(name || "");

  console.log(data, "персонажи");

  if (isError)
    return (
      <Section className="flex items-center justify-center h-[calc(100vh-6rem)]">
        <h1 className="text-4xl font-bold text-center">
          Персонаж не найден :c
        </h1>
      </Section>
    );

  if (isPending || isLoading)
    return (
      <Section className="flex flex-wrap gap-4 justify-center">
        {Array.from({ length: 24 }).map((_, index) => (
          <Skeleton width={320} height={416} key={index} />
        ))}
      </Section>
    );

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
