"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useDebounce } from "@/shared/hooks";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface Props {
  className?: string;
  placeholder?: string;
  searchKey?: string;
}

export const SearchInput = ({
  className,
  placeholder,
  searchKey = "search",
}: Props) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const initialValue = searchParams.get(searchKey) || "";
    setValue(initialValue);
  }, [searchParams, searchKey]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedValue) {
      params.set(searchKey, debouncedValue);
    } else {
      params.delete(searchKey);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, [debouncedValue, searchParams, pathname, router, searchKey]);

  return (
    <div
      className={twMerge(
        "border border-white/20 active:border-white/50 outline-none flex items-center gap-4 px-4 py-2 rounded-md",
        className
      )}
    >
      <Image src="/search.svg" alt="search" width={24} height={24} />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="outline-none border-none"
      />
    </div>
  );
};
