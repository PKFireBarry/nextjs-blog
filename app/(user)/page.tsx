import { previewData } from "next/headers"
import {groq} from 'next-sanity'
import { sanityClient } from "../../lib/sanity.client";
import { PreviewSuspense } from "next-sanity/preview";
import {BlogList} from "../../components/BlogList";
import PreviewBlogList from "../../components/PreiviewBlogList";

const query = groq`
  *[_type== "post"] {
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`


async function page() {

  if (previewData()) {
    return (
      <PreviewSuspense fallback={
        (
        <div>
          <p>
            loading preview...
          </p>
        </div>
        )
      }
    >

        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }


  const post = await sanityClient.fetch(query);
  return (       
        <BlogList posts={post} />
    );

}

export default page