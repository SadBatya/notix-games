import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  placeholder?: string;
}

export const SearchInput = ({ className, placeholder }: Props) => (
  <div
    className={twMerge(
      "border border-white/20 active:border-white/50  outline-none flex items-center gap-4 px-4 py-2 rounded-md",
      className
    )}
  >
    <Image src="/search.svg" alt="search" width={24} height={24} />
    <input
      type="text"
      placeholder={placeholder}
      className="outline-none border-none"
    />
  </div>
);
