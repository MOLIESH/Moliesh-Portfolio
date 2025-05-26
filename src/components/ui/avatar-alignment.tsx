"use client";
import { useMotionValue } from "framer-motion";
import Image from "next/image";

export const Avatars = ({
  items,
}: {
  items: {
    id: number;
    image: string;
  }[];
}) => {
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // const springConfig = { stiffness: 100, damping: 5 };s
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  // const rotate = useSpring(
  //   useTransform(x, [-100, 100], [-45, 45]),
  //   springConfig,
  // );
  // translate
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div className="group relative -mr-4" key={idx}>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt=" moliesh portfolio project avatar"
            className="relative !m-0 h-8 w-8 rounded-full border-2 bg-slate-900 object-cover object-top p-1.5 transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
};
