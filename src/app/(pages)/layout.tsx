// import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { SETTINGS_QUERY } from "@/sanity/lib/queries";
import Nav from "@/components/Nav";
import "../globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function generateMetadata() {
  // const { data: settings } = await sanityFetch({ query: SETTINGS_QUERY });
  const settings = await client.fetch(SETTINGS_QUERY);

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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
