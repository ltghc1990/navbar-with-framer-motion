import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slowFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { y: "-100vh" },
};
const Dropdown = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <AnimatePresence className="">
      <motion.div
        variants={slowFade}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-red-300 h-2/4 w-full  "
      >
        <div>Dropdown Menu</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Dropdown;
