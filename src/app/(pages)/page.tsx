import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries";
import Content from "@/components/Content";

export default async function Home() {
  const { data: homeData } = await sanityFetch({ query: HOME_QUERY });

  return <Content content={homeData?.pageContent ?? []} />;
}
