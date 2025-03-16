import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { Inspect } from "lucide";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/projects" }),
  schema: z.object({
    title: z.string(),
    program: z.string(),
    order: z.number(),
    images: z.array(
      z.object({
        src: z.string(),
        description: z.string().optional(),
      }),
    ),
    site: z.string(),
  }),
});

const annex = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/annex" }),
  schema: z.object({
    title: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        description: z.string().optional(),
      }),
    ),
    category: z.enum(["plastic", "photo", "digital"]),
  }),
});

const index = defineCollection({
  loader: glob({ pattern: "index.md", base: "./content" }),
  schema: z.object({
    heading: z.string(),
    description: z.string(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "education.yml", base: "./content" }),
  schema: z.array(
    z.object({
      diploma: z.string(),
      institution: z.string(),
      start: z.string(),
      end: z.string().optional(),
      image: z.string(),
    }),
  ),
});

const experience = defineCollection({
  loader: glob({ pattern: "experience.yml", base: "./content" }),
  schema: z.array(
    z.object({
      job: z.string(),
      company: z.string(),
      period: z.string(),
      image: z.string(),
    }),
  ),
});

export const collections = { projects, index, annex, education, experience };
