import { test, expect } from "@playwright/test";
import { ProductsResponseSchema } from "../../models/product.ts";

test("Get all products", async ({ request }) => {
  const response = await request.get("products");
  const body = await response.json();
  const result = ProductsResponseSchema.safeParse(body);
  expect(response.status()).toBe(200);
  expect(body.products.length).toBeGreaterThan(0);
  expect(body.products.length).toBeLessThanOrEqual(body.limit);
  expect(result.success).toBe(true);
});
