import React from "react";
import { getContentfulEntries } from "../../lib/contentful-utils";

const RecipeDetailPage = ({ recipe }) => {
  console.log(recipe);
  return (
    <div>
      <h3>Recipe Detail Page</h3>
    </div>
  );
};

export default RecipeDetailPage;

export async function getStaticPaths() {
  const recipes = await getContentfulEntries("recipe");

  const paths = recipes.map((item) => {
    return { params: { slug: item.fields.slug } };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

// getstaticpaths runs first giving us our slug name as the filename, if you look at getstaticpaths, youll see it returns a params with our slug
export async function getStaticProps(context) {
  const slugName = context.params.slug;
  const recipe = await getContentfulEntries("recipe", slugName);

  return {
    props: {
      recipe: recipe[0],
    },
  };
}
