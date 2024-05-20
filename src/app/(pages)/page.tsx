import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function Home() {
  const data = await client.fetch(groq`*[_type == "pages" && title == "Home"][0]`);

  return (
    <div className="container">
      <PortableText value={data.content} />
    </div>
  );
}
