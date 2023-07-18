import React from "react";
import "./Box.css";
import { motion } from "framer-motion/dist/framer-motion";

const Box = ({ name, icon, id }) => {
  return (
    <motion.div className="info">
      <img src={icon} alt="skill" key={id} />
      <span>{name}</span>
    </motion.div>
  );
};

// const Box = React.forwardRef(({ icon, name, id }, ref) => {
//   return (
//     <motion.div className="info" ref={ref}>
//       <img src={icon} alt="skill" key={id} />
//       <span>{name}</span>
//     </motion.div>
//   );
// });

export default Box;
