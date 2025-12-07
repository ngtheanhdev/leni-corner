import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const products = defineCollection({
	loader: glob({ base: "./src/content/products", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		name: z.string(),
		description: z.string(),
		priceRange: z.string(), // VD: "150.000 - 250.000 VNĐ"
		image: z.string(),
		images: z.array(z.string()).optional(), // Thêm nhiều ảnh
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		available: z.boolean().default(true),
		createdDate: z.coerce.date().optional(),
	}),
});

export const collections = { blog, products };
