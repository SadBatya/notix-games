import Image from "next/image";

interface Props {
  img: string;
  title: string;
  description: string;
}

export const BookCard = ({ img, title, description }: Props) => (
  <div className="flex flex-col max-w-[360px] w-full gap-4 border border-white/20 transition-all duration-300 hover:border-white/50 rounded-md overflow-hidden">
    <Image src={img} alt={title} width={200} height={200} />
    <div className="px-4 py-2 flex flex-col gap-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-white/50">{description}</p>
    </div>
  </div>
);
