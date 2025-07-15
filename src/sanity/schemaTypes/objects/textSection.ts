import { defineType, defineField, defineArrayMember } from "sanity";
import { BlockContentIcon } from "@sanity/icons";
import TextSectionPreview from "../components/previews/TextSectionPreview";

export default defineType({
  name: "textSection",
  title: "Text Section",
  icon: BlockContentIcon,
  type: "object",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        defineArrayMember({
          title: "Block",
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" }
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" }
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url"
                  }
                ]
              }
            ]
          }
        })
      ]
    })
  ],
  preview: {
    select: {
      content: "content"
    },
    prepare({ content }) {
      return {
        title: "Text Section",
        content: content
      };
    }
  },
  components: {
    preview: TextSectionPreview
  }
});
