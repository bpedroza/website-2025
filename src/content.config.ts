import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: "./src/data/blog"
  }),
  schema: z.object({
    title: z.string(),
    subTitle: z.string(),
    slug: z.string(),
    description: z.string(),
    datePublished: z.coerce.date(),
    dateUpdated: z.coerce.date().optional(),
  })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };