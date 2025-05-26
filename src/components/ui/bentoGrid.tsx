import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section
      role="grid"
      aria-label="Bento Grid"
      className={cn(
        "mx-auto grid grid-cols-1 gap-4 px-2.5 py-10 md:auto-rows-[18rem] md:grid-cols-3 md:px-4",
        className,
      )}
    >
      {children}
    </section>
  );
};

export const BentoGridItem = ({
  className,
  // imgClassName,
  // img,
  customGrid,
}: GridItem) => {
  return (
    <article
      role="gridcell"
      aria-label="Bento Grid Item"
      className={cn(
        "group/bento relative z-10 row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-gradient-to-tr from-[#09172938] to-[#0c75ff4f] p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {customGrid}
    </article>
  );
};

{
  /* <div className="absolute left-0 top-0 h-full w-full">
  {img && (
    <img
      src={img}
      alt={`${img}- for MOLIESH porfolio`}
      className={cn(
        imgClassName,
        "h-full w-full object-cover object-center",
      )}
    />
  )}
</div> */
}
