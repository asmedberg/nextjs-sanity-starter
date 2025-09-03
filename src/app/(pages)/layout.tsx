import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { SETTINGS_QUERY } from "@/sanity/lib/queries";
import Layout from "@/components/Layout";
import "../globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function generateMetadata() {
  const { data: settings } = await sanityFetch({ query: SETTINGS_QUERY });

  return {
    title: {
      template: `%s | ${settings?.seo?.title}`,
      default: settings?.seo?.title
    },
    description: settings?.seo?.description,
    keywords: settings?.seo?.keywords,
    metadataBase: new URL(SITE_URL as string),
    openGraph: {
      title: settings?.seo?.title,
      description: settings?.seo?.description,
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      siteName: settings?.seo?.title,
      images: [
        {
          url: settings?.seo?.image,
          width: 1200,
          height: 630,
          alt: settings?.seo?.title
        }
      ]
    }
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}
