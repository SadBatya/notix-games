import { Skeleton } from "@/shared";

export default function Loading() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
}
