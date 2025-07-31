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
