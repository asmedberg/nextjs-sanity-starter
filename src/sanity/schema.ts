import { type SchemaTypeDefinition } from "sanity";
import settings from "./schemas/settings";
import pages from "./schemas/pages";
import blockContent from "./schemas/blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings, pages, blockContent]
};
