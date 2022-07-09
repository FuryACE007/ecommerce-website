import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'mby5aszx',
    dataset: 'production',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true,
    apiVersion: '2022-03-10'
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
