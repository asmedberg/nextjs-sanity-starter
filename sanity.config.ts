/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schema";

import { CogIcon } from "@sanity/icons";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);
// Define the singleton document types
const singletonTypes = new Set(["settings"]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: { ...schema, templates: templates => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)) },
  document: {
    actions: (input, context) => {
      return singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input;
    }
  },
  plugins: [
    structureTool({
      structure: S => {
        return S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Settings")
              .icon(CogIcon)
              .child(S.editor().schemaType("settings").documentId("settings")),
            S.divider(),
            S.documentTypeListItem("pages").title("Pages")
            // ...S.documentTypeListItems().filter(listItem => !["settings"].includes(listItem.getId()))
          ]);
      }
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion })
  ]
});
