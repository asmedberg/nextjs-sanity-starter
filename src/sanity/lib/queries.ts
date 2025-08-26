import { defineQuery } from "next-sanity";

export const SETTINGS_QUERY = defineQuery(`
  *[_type == "settings"][0]{
    ...,
    seo{
      ...,
      "image": image.asset->url
    }
  }
`);

export const NAV_QUERY = defineQuery(`
  *[_type=="settings"][0]{
    "navItems": navigation[]->{
      _id,
      title,
      "url": slug.current
    }
  }
`);

export const HOME_QUERY = defineQuery(`
  *[_type == "pages" && slug.current == "home"][0]
`);

export const PAGES_QUERY = defineQuery(`
  *[_type == "pages"]
`);

export const PAGE_QUERY = defineQuery(`
  *[_type == "pages" && slug.current == $slug][0]
`);
