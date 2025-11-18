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
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold my-5 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold my-3 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base sm:text-lg md:text-xl font-semibold my-2 leading-snug">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-sm sm:text-base md:text-lg font-semibold my-2 leading-snug">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm md:text-base font-semibold my-2 leading-snug">
        {children}
      </h6>
    ),
    normal: ({ children }) => (
      <p className="my-2 leading-relaxed text-base md:text-lg">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 sm:pl-6 italic text-gray-600 my-4 text-sm md:text-base lg:text-lg">
        {children}
      </blockquote>
    ),
  },
};

export const PortableTextRenderer = ({ value }: Props) => {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
};
