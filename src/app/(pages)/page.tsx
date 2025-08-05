import { client } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";
import Content from "@/components/Content";

export default async function Home() {
  const homeData = await client.fetch(HOME_QUERY);

  return <Content content={homeData?.content} />;
}
