import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => [
        Rule.required(),
        // check if slug has spaces
        Rule.custom(slug => {
          if (slug?.current?.includes(" ")) {
            return "Slugs cannot have spaces";
          }
          return true;
        }),
        // check if slug has uppercase letters
        Rule.custom(slug => {
          if (slug?.current !== slug?.current?.toLowerCase()) {
            return "Slugs must be lowercase";
          }
          return true;
        })
      ]
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [defineArrayMember({ type: "textSection" })]
    })
  ]
});
