// app/api/items/route.js
import { items } from "@/data/items";

export async function GET() {
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
  });
}
