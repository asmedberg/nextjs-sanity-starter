import { CogIcon } from "@sanity/icons";
import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  icon: CogIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "pages" }]
        })
      ]
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Site title",
          type: "string"
        }),
        defineField({
          name: "description",
          title: "Site description",
          type: "text"
        }),
        defineField({
          name: "keywords",
          title: "Site keywords",
          type: "array",
          of: [{ type: "string" }],
          options: {
            layout: "tags"
          }
        }),
        defineField({
          name: "author",
          title: "Site author",
          type: "string"
        }),
        defineField({
          name: "image",
          title: "Site image",
          type: "image",
          description: "This image will be used for sharing previews on social media. Dimensions: 1200x630px"
        })
      ]
    })
  ]
});
