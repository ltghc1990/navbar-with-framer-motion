import React from "react";
import { createClient } from "contentful";
import RecipeList from "../components/RecipeList";

const HomePage = ({ recipes }) => {
  // console.log(recipes);
  return (
    <div>
      <h1>Home Page</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  // connect to contentful
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  // specify which content model we want
  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
      revalidate: 10,
    },
  };
}
