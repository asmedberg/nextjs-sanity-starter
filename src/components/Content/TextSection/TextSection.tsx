import { PortableText } from "next-sanity";
import { type TextSectionProps } from "./TextSection.type";

const TextSection = (props: TextSectionProps) => {
  if (!props.content) return null;

  return <PortableText value={props.content} />;
};

export default TextSection;
