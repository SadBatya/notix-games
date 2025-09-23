import { SearchInput, BookCard } from "@/shared";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SearchInput placeholder="Поиск книг" />
      <BookCard />
    </div>
  );
}
