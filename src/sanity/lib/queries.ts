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
