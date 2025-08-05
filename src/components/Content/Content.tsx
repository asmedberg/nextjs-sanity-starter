import TextSection, { type TextSectionProps } from "./TextSection";

type ContentTypes = TextSectionProps;

const ContentSection = (content: ContentTypes) => {
  if (!content) return null;

  try {
    switch (content._type) {
      case "textSection":
        return <TextSection {...content} />;
      default:
        console.warn(`Unknown content type: ${content._type}`);
        return null;
    }
  } catch (error) {
    console.error(`Error rendering content of type ${content._type}:`, error);
    return null;
  }
};

const Content = ({ content }: { content: ContentTypes[] }) => {
  return (
    <article>
      {content.map(c => (
        <section key={c._key}>
          <ContentSection {...c} />
        </section>
      ))}
    </article>
  );
};

export default Content;
