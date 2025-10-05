// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Blog collection ke liye schema define karein
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    heroImage: z.string(),
  }),
});

// Is collection ko export karein
export const collections = {
  'blog': blogCollection,
};