"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const Socials = ({
  items,
  desktopClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
}) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseY = useMotionValue(Infinity);

return (
  <motion.div
    onMouseMove={(e) => mouseY.set(e.clientY)} 
    onMouseLeave={() => mouseY.set(Infinity)}
    className={cn(
      "mx-auto flex flex-col h-fit gap-4 items-center rounded-3xl bg-slate-950/40 border border-white/10 backdrop-blur-md px-4 py-4",
      className
    )}
  >
    {items.map((item) => (
      <IconContainer mouseY={mouseY} key={item.title} {...item} />
    ))}
  </motion.div>
);
};

function IconContainer({
  mouseY,
  title,
  icon,
  href,
}: {
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseY, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} target="_blank">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-slate-800 flex items-center justify-center relative border border-white/10"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, y: "-50%" }}
              animate={{ opacity: 1, x: -10, y: "-50%" }}
              exit={{ opacity: 0, x: 10, y: "-50%" }}
              style={{ top: "50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-slate-900 border border-slate-700 text-white absolute right-full mr-2 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div className="flex items-center justify-center text-white">
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}