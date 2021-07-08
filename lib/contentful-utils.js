// connect to client here
import { createClient } from "contentful";

export function getClient() {
  // free tier only provides 1 space
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  return client;
}

// connect to a content model, for this app we need recipe
// only supplying the contentmodel will return all recipes, providing a 2nd param "slug" will return recipes that match the fields.slug. since slug is unique we know it will only return 1 value. However it'll still return that value inside of an array instead of an object

export async function getContentfulEntries(contentmodel, slug) {
  const client = getClient();
  const res = await client.getEntries({
    content_type: contentmodel,
    "fields.slug": slug,
  });
  const recipes = res.items;

  return recipes;
}
