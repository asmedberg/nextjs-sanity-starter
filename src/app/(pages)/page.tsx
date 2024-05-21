import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { components } from "@/sanity/portable-text/components";

export default async function Home() {
  const data = await client.fetch(groq`*[_type == "pages" && title == "Home"][0]`);
  return (
    <div className="container">
      <PortableText value={data.content} components={components} />
    </div>
  );
}
