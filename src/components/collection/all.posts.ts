import { getCollection } from "astro:content";

export const allPosts = async (lang: string) => (await getCollection('blog', ({ data, id }) => {
  return data.isDraft !== true && id.startsWith(lang + '/');
})).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);

export const rawPosts = (await getCollection('blog', ({ data /*, id */ }) => {
  return data.isDraft !== true;
})).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);