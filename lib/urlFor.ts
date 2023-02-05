import {sanityClient} from './sanity.client';
import imageUrlBuilder from '@sanity/image-url';

// This function is used to generate the URL for the image
const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
    return builder.image(source);
}

export default urlFor