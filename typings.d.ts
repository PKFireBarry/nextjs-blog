import { Reference, Slug } from "sanity";

type Base = {
    _createdAt: string;
    _updatedAt: string;
    _id: string;
    _rev: string;
    _type: string;
};

interface Post extends Base {
    title: string;
    slug: Slug;
    author: Author;
    mainImage: Image;
    body: Block[];
    description: string;
    categories: Category[];
}

interface Author extends Base {
    name: string;
    image: Image;
    bio: Block[];
    slug: Slug;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _type: "block";
    children: Span[];
    markDefs: any[];
    _key: string;
    style: "normal" | "h1" | "h2" | "h3" | "blockquote";
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}