import { test, expect } from "@playwright/test";
import { ProductsResponseSchema, ProductSchema } from "../../models/product.ts";
import { regex } from "zod";

test("Get all products", async ({ request }) => {
  const response = await request.get("products");
  const body = await response.json();
  const validateBody = ProductsResponseSchema.safeParse(body);
  expect(response.status()).toBe(200);
  expect(body.products.length).toBeGreaterThan(0);
  expect(body.products.length).toBeLessThanOrEqual(body.limit);
  expect(validateBody.success).toBe(true);
});

test("Get product by id", async ({ request }) => {
  const productId = 22;
  const response = await request.get(`products/${productId}`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  const validateBody = ProductSchema.safeParse(body);
  expect(validateBody.success).toBe(true);
  expect(body.id).toBe(productId);
  expect(body.title).toBe("Dog Food");
  expect(body.category).toBe("groceries");
  expect(body.price).toBe(10.99);
});
