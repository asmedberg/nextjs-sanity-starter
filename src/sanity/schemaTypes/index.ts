import settings from "./singletons/settings";
import pages from "./documents/pages";
import textSection from "./objects/textSection";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Singletons
    settings,
    // Documents
    pages,
    // Objects
    textSection
  ]
};
