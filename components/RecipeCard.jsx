import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const RecipeCard = ({ recipe }) => {
  const { title, slug, thumbnail, cookingTime } = recipe.fields;
  const xVariant = {
    initial: { x: "-100px" },
    animate: { x: 0 },
  };
  return (
    <motion.div
      key={slug}
      variants={xVariant}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
      className="bg-gray-300 flex flex-col flex-wrap mb-4 max-w-sm mx-auto  rounded-lg overflow-hidden"
    >
      <div>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt={thumbnail.fields.file.title}
          width="448"
          height="300"
          objectFit="cover"
        />
      </div>

      <div>
        <h4>{title}</h4>
        <p>Takes approx {cookingTime} mins to make </p>
      </div>
      <div className="text-right">
        <Link href={`/recipes/${slug}`}>
          <a className="btn bg-blue-500 text-white">Details</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
