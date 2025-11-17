import { sanityClient } from "../client";

// TypeScript types for your blog content
export interface BlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: SanityImage;
  body?: BlockContent[]; // Portable Text content
  author?: {
    name: string;
    image?: SanityImage;
  };
  categories?: Array<{
    title: string;
    _id: string;
  }>;
  publishedAt?: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
    url: string;
  };
}

export interface BlockContent {
  _type: "block";
  _key: string;
  style?: string;
  children?: {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
  }[];
  markDefs?: {
    _key: string;
    _type: string;
    href?: string;
  }[];
}

// Fetch all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    author->{
      name,
      image
    },
    categories[]->{
      _id,
      title
    },
    publishedAt
  }`;

  try {
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    body,
    author->{
      name,
      image
    },
    categories[]->{
      _id,
      title
    },
    publishedAt
  }`;

  try {
    return await sanityClient.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
