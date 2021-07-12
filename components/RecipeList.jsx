import React from "react";
import RecipeCard from "./RecipeCard";
import { motion } from "framer-motion";
import { fadeInVariant } from "../lib/motionUtils";

const RecipeList = ({ recipes }) => {
  return (
    <motion.ul
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-wrap mx-auto"
    >
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.sys.id} recipe={recipe} />;
      })}
    </motion.ul>
  );
};

export default RecipeList;
