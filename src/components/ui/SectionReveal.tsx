import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type SectionRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

const SectionReveal = ({
  children,
  delay = 0,
  className,
  ...props
}: SectionRevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export default SectionReveal;
