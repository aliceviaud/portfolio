import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/projects" }),
    schema: z.object({
        title: z.string(),
        program: z.string(),
        date: z.string(),
        image: z.string(),
        site: z.string(),
    }),
});

const annex = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/annex" }),
    schema: z.object({
        title: z.string(),
        image: z.string(),
        category: z.enum(["plastic", "photo", "digital"]),
    })
})

const index = defineCollection({
    loader: glob({ pattern: "index.md", base: "./content" }),
    schema: z.object({
        heading: z.string(),
        description: z.string(),
    }),
});

export const collections = { projects, index, annex };
