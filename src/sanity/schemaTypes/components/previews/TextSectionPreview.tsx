import { PreviewProps } from "sanity";
import { PortableText, PortableTextProps } from "next-sanity";
import { Stack, Card, Text } from "@sanity/ui";

interface TextSectionPreviewProps extends PreviewProps {
  content?: PortableTextProps["value"];
}

const TextSectionPreview = (props: TextSectionPreviewProps) => {
  return (
    <Stack>
      {props.renderDefault(props)}
      <Card padding={2}>
        {props.content ? <PortableText value={props.content} /> : <Text>No content available.</Text>}
      </Card>
    </Stack>
  );
};

export default TextSectionPreview;
