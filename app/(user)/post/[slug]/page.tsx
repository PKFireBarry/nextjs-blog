import groq from 'groq'
import { sanityClient } from '../../../../lib/sanity.client'
import Image from 'next/image'
import urlFor from '../../../../lib/urlFor';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../../../components/RichTextComponents';

type Props = {
    params: {
        slug: string;
    };
};

async function Post({ params : {slug}}: Props)  {

    const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->
    }
    `

    const post = await sanityClient.fetch(query, {slug});



  return (
    <article className='px-10 pb-28'>
        <section className='space-y-2 border text-white'>
            <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
                <div className='absolute top-0 w-full opacity-10 blur-sm p-10'>
                    <Image
                        className='object-cover object-center mx-auto'
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                    />
                </div>
                <section className='p-5 w-full'>
                    <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                        <div>
                            <h1 className='text-4xl font-extrabold'>
                                {post.title}
                            </h1>

                            <p className=''>
                                {
                                    new Date(post._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })
                                }
                            </p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Image
                                className='rounded-full'
                                src={urlFor(post.author.image).url()}
                                alt={post.author.name}
                                width={40}
                                height={40}
                            />
                            <div className='w-64'>
                                <h3 className='text-lg font-bold'>
                                    {post.author.name}
                                </h3>
                                {/* Author bio */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='italic pt-10'>
                            {post.description}
                        </h2>
                        <div className='flex items-center justify-end mt-auto spcae-x-2'>
                            {post.categories.map((category: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                                <div>
                                    <p key={category.id} className='text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                                        {category.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <PortableText value={post.body} components={RichTextComponents} />

    </article>
  )
}

export default Post