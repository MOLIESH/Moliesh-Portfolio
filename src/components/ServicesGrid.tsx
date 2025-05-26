import { cardArr } from "@/constants/details";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function ServicesGrid({
  icon,
  title,
  description,
}: ServicesGridProps) {
  return (
    <article className="relative transition duration-200">
      <header className="mb-4">
        <h1 className="mb-2 mt-2 flex items-center justify-center gap-2 bg-transparent bg-gradient-to-br from-neutral-200 to-neutral-600 bg-clip-text font-bold text-transparent">
          {icon}
          {title}
        </h1>
        <div className="text-center text-sm font-normal text-neutral-300">
          {description}
        </div>
      </header>
      <div className="relative flex w-full items-center justify-center gap-4 overflow-hidden antialiased">
        <InfiniteMovingCards
          items={cardArr}
          speed="normal"
          direction="right"
          type="service"
        />
      </div>
    </article>
  );
}
