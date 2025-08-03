import { CogIcon } from "@sanity/icons";
import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  icon: CogIcon,
  type: "document",
  fieldsets: [{ name: "navigation", title: "Navigation" }],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "home",
      title: "Home Page",
      type: "reference",
      to: [{ type: "pages" }],
      fieldset: "navigation"
    }),
    defineField({
      name: "navigation",
      title: "Navigation List",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "pages" }]
        })
      ],
      fieldset: "navigation"
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
