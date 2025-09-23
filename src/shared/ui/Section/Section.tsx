import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Section = ({ className, children }: Props) => (
  <section
    className={twMerge(
      "max-w-[1440px] w-[calc(100%-40px)] mx-auto py-16 lg:py-20",
      className
    )}
  >
    {children}
  </section>
);
