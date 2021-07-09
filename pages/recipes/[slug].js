import React from "react";
import Image from "next/image";
import { getContentfulEntries } from "../../lib/contentful-utils";
// used to render the richtext from contentful
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RecipeDetailPage = ({ recipe }) => {
  if (!recipe) {
    return <div>loading...</div>;
  }
  console.log(recipe);
  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.fields;
  return (
    <div>
      <div>
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          alt={featuredImage.fields.title}
          objectFit="cover"
          width="500px"
          height="300px"
        />
      </div>
      <h2>{title}</h2>
      <div>
        <h4>ingredients</h4>
        {ingredients.map((item) => {
          return (
            <button key={item} className="btn">
              {item}
            </button>
          );
        })}
      </div>

      <div>takes about {cookingTime} mins to cook.</div>

      {/* function that takes our rich text mothod obj and renders it correctly */}
      <div>
        <div>{documentToReactComponents(method)}</div>
      </div>
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
    // fallback set to false will return a 404 if the page does not exist,
    // fallback set to true will try to render the component; basically have a if statement where if the unique recipe prop does not exist, we render a small loading component
    // meanwhile, getstaticprops will trigger again in the background, creating the data for the page

    // one prob with fallback true is that it'll accept any slugname so if a person types a random slug in the url , it'll forever show the loading component. the fix is to have a conditonal redirect in getStaticProps. if the recipe is not found in getStaticProps we redirect
  };
}

// getstaticpaths runs first giving us our slug name as the filename, if you look at getstaticpaths, youll see it returns a params with our slug
export async function getStaticProps(context) {
  const slugName = context.params.slug;
  const recipe = await getContentfulEntries("recipe", slugName);

  if (!recipe.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      recipe: recipe[0],
      // checks for content changes and regenerates the page with updated changes.
      // triggered when someone visits the page.
      // does not mean it'll revalidate every 10 secs, just that if there are changes, it'll revalidate in 10
      // regenerates pages that already exist but will not create a new page
      // example is if you add a new recipe, it'll show up on the home page since the getstaticprops is revalidating, but'll not create a new static page detail for that recipe if you click on it
      // can show a fallback page intead of a 404 page if you plan on not rebuilding for awhile. revalidation + fallback true allows generation of new pages since its rebuilding instead of showing a 404 page., the fallback is shown while its rebuilding.
      revalidate: 10,
    },
  };
}
