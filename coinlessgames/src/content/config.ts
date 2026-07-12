import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    thumbnail: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const games = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    series: z.string().optional(),
    order: z.number().default(1),
    tagline: z.string(),
    description: z.string(),
    logEntry: z.string(),
    logSignature: z.string().default('Dan'),
    playUrl: z.string().optional(),
    status: z.string().default('Playable in browser'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, games };
