import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  tags: z.array(z.string()),
  sku: z.string(),
  weight: z.number(),

  dimensions: z.object({
    width: z.number(),
    height: z.number(),
    depth: z.number(),
  }),

  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),

  reviews: z.array(z.object({})),

  returnPolicy: z.string(),
  minimumOrderQuantity: z.number(),

  meta: z.object({}),

  images: z.array(z.string()),
  thumbnail: z.string(),
});

export const ProductsResponseSchema = z.object({
  products: z.array(ProductSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});
