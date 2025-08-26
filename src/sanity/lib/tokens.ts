export const token = process.env.SANITY_READ_TOKEN;

if (!token) {
  throw new Error("Missing SANITY_READ_TOKEN");
}
