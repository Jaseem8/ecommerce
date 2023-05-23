import { client } from "@/lib/client";

export default async function handler(req, res) {
  const searchData = req.body;

  if (req.method === "POST") {
    try {
      const query = `*[_type=="product" && name match "${searchData}*" ]`;
      const products = await client.fetch(query);

      res.status(201).json(products);
    } catch (error) {
      console.log(error);
    }
  }
}
