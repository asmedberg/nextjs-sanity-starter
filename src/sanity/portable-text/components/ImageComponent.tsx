import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

interface Image {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface ComponentProsp {
  value: Image;
  isInline: boolean;
}

export default async function ImageComponent({ value, isInline }: ComponentProsp) {
  const image = await client.fetch(
    `*[_id == $ref][0]{
    _id,
    url,
    "dimensions": metadata.dimensions,
    "placeholer": metadata.lqip
  }`,
    { ref: value.asset._ref }
  );

  return (
    <Image
      src={urlForImage(image)}
      alt=""
      width={image.dimensions.width}
      height={image.dimensions.height}
      placeholder={image.placeholder}
      className={`${!isInline ? "w-full" : "max-w-full"} h-auto`}
    />
  );
}
