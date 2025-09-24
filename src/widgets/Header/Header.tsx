import { SearchInput } from "../../shared/ui/SearchInput/SearchInput";
import { Suspense } from "react";

export const Header = () => (
  <header className="border-b border-white/20">
    <div className="max-w-[1440px] w-[calc(100%-40px)] py-4 items-center flex justify-between mx-auto">
      <h1 className="text-2xl font-bold">Rick and Morty</h1>
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchInput placeholder="Morty..." searchKey="name" />
      </Suspense>
    </div>
  </header>
);
