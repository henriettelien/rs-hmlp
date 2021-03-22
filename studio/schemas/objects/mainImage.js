const mainImage = {
    name: 'mainImage',
    title: 'bilde',
    type: 'image',
    options: {
        hotspot: true
    },
    fields : [
    {
        name: 'alternativeText',
        title: 'Alternativ tekst',
        type: 'string',
        options: {
            isHighlighted: true,
        },
    },
    {
    name: 'caption',
    title: 'Bildetekst',
    type: 'string',
    options: {
        isHighlighted: true,
    },
    },
],
preview: {
    select: {
        imageUrl: 'asset.url',
        title: 'caption',
    }
}
};

export default mainImage;