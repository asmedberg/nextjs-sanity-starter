import { Inter } from "next/font/google";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Navigation from "@/components/Navigation";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const { title, description, keywords } = await client.fetch(groq`*[_type == "settings"][0]{
    title,
    description,
    keywords
  }`);

  return {
    title: {
      template: `%s | ${title}`,
      default: title
    },
    description: description,
    keywords: keywords
  };
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = await client.fetch(groq`*[_type == "settings"][0].navigation[]->`);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation navItems={navItems} />
        <main>{children}</main>
      </body>
    </html>
  );
}
