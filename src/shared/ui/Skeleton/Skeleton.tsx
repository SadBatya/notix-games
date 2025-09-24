import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

export const Skeleton = ({ className, width, height }: Props) => (
  <div
    className={twMerge("bg-white/10 animate-pulse rounded-md", className)}
    style={{ width, height }}
  ></div>
);
