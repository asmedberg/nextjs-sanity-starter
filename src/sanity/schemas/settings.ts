import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text"
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [{ type: "reference", to: { type: "pages" } }]
    })
  ]
});
