import { SearchInput } from "../SearchInput/SearchInput";

export const Header = () => (
  <header className="border-b border-white/20">
    <div className="max-w-[1440px] w-[calc(100%-40px)] py-4 items-center flex justify-between mx-auto">
      <h1 className="text-2xl font-bold">Библиотека книг v1</h1>
      <SearchInput placeholder="Поиск книг" searchKey="q" />
    </div>
  </header>
);
