import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "pages" && defined(slug.current) && slug.current != "home"].slug.current`
  );
  return slugs.map((slug: string) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await client.fetch(groq`*[_type == "pages" && slug.current == $slug][0]`, params);

  return (
    <div className="container">
      <PortableText value={data.content} />
    </div>
  );
}
