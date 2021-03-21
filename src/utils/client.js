import sanityClient from '@sanity/client';

const options = {
    "projectId": "o8t43aom",
    "dataset": "production"
};


const client = sanityClient ({
    ...options,
    useCdn: process.env.NODE_ENV === 'production'
});

export default client;