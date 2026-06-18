"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type MotionWrapperProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function MotionWrapper({ delay = 0, children, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ y: 22, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
