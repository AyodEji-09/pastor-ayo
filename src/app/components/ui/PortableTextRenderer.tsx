import { BlockContent } from "@/sanity/queries/blogs";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

type Props = {
  value: BlockContent[] | undefined;
};

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={value.asset?.url}
        alt={value.alt || ""}
        className="my-4 rounded-xl"
      />
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-700"
      >
        {children}
      </a>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-extrabold my-5">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold my-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold my-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold my-2">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-semibold my-2">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold my-2">{children}</h6>
    ),
    normal: ({ children }) => (
      <p className="my-2 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
};

export const PortableTextRenderer = ({ value }: Props) => {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
};
