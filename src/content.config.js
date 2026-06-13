import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const vini = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vini' }),
  schema: z.object({
    nome: z.string(),
    tipo: z.string(),
    categoria: z.enum(['rosso', 'bianco', 'rosato']),
    annata: z.number(),
    prezzo: z.number(),
    immagine: z.string(),
    altImmagine: z.string(),
  }),
});

export const collections = { vini };
