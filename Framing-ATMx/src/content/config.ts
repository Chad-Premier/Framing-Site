import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    author: z.string(),
    description: z.string(),
    robots: z.string(),
    title: z.string(),

    category: z.string(),
    tags: z.array(z.string()),
    isDraft: z.boolean().default(false),
    pubDate: z.string().transform((str) => new Date(str)),
    splash: image().optional(),
  })
});

export const collections = {
  'blog': blogCollection
};