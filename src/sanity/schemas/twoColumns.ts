import { defineType, defineField } from "sanity";
import { InlineIcon } from "@sanity/icons";

export default defineType({
  name: "twoColumns",
  title: "Two Columns",
  icon: InlineIcon,
  type: "object",
  fields: [
    defineField({
      name: "verticalAlignment",
      title: "Vertical Alignment",
      type: "string",
      initialValue: "top",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
          { title: "Bottom", value: "bottom" }
        ],
        layout: "radio",
        direction: "horizontal"
      }
    }),
    defineField({
      name: "columns",
      title: "Columns",
      type: "object",
      fields: [
        defineField({
          name: "leftColumn",
          title: "Left Column",
          type: "blockContent"
        }),
        defineField({
          name: "rightColumn",
          title: "Right Column",
          type: "blockContent"
        })
      ],
      options: {
        columns: 2
      }
    })
  ],
  preview: {
    select: {
      leftColumn: "columns.leftColumn",
      rightColumn: "columns.rightColumn"
    },
    prepare({ leftColumn, rightColumn }) {
      const substring = (text: string) => text.substring(0, 12);
      const leftContent =
        leftColumn[0]._type == "block" ? `${substring(leftColumn[0].children[0].text)}...` : leftColumn[0]._type;
      const rightContent =
        rightColumn[0]._type == "block" ? `${substring(rightColumn[0].children[0].text)}...` : rightColumn[0]._type;
      return {
        title: "Two Columns",
        subtitle: `Left: ${leftContent} | Right: ${rightContent};`
      };
    }
  }
});
