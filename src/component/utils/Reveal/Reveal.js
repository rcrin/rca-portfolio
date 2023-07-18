import React, { useEffect, useRef } from "react";
import "./Reveal.css";
import {
  motion,
  useInView,
  useAnimation,
} from "framer-motion/dist/framer-motion";

const Reveal = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default Reveal;
