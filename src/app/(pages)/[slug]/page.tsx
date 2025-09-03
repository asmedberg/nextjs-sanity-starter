import Content from "@/components/Content";
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { PAGES_QUERY, PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { data: page } = await sanityFetch({ query: PAGE_QUERY, params: await params });

  if (!page) {
    return {
      title: "Page not found"
    };
  }

  return {
    title: page.title || ""
  };
}

export async function generateStaticParams() {
  try {
    const pages = await client.fetch(PAGES_QUERY);

    return pages.map(page => ({
      slug: page.slug?.current
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { data: page } = await sanityFetch({ query: PAGE_QUERY, params });

  return <Content content={page?.pageContent ?? []} />;
}
