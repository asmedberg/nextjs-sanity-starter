import { PortableText } from "@portabletext/react";
import { components } from ".";

interface Column {
  _key: string;
  _type: string;
  children: object[];
}

interface Columns {
  _key: string;
  _type: string;
  columns: {
    leftColumn: Column;
    rightColumn: Column;
  };
  verticalAlignment: string;
}

interface ComponentProps {
  value: Columns;
  isInline: boolean;
}

export default function TwoColumnsComponent({ value, isInline }: ComponentProps) {
  const {
    columns: { leftColumn, rightColumn },
    verticalAlignment
  } = value;
  const itemsAlign =
    verticalAlignment === "top" ? "items-start" : verticalAlignment === "center" ? "items-center" : "items-end";

  return (
    <div className={`${!isInline ? "grid" : "inline-grid"} grid-cols-2 ${itemsAlign} gap-4`}>
      <div>
        <PortableText value={leftColumn} components={components} />
      </div>
      <div>
        <PortableText value={rightColumn} components={components} />
      </div>
    </div>
  );
}
