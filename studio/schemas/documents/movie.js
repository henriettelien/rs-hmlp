const movie = {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            description: 'Dette er tittelen på filmen',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'slug',
            description: 'Dette er den unike url-en',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
                maxLenth: 96,
            }
        },
        {
            name: 'preAmble',
            type: 'text',
            title: 'Ingress',
            description: 'Dette er ingressen',

        },
        {
            title: 'Skuespiller',
            name: 'actor',
            description: 'Hent en skuespiller som spiller i filmen',
            type: 'reference',
            to: [{type: 'actor'}]
        }
    ],
    preview: {
        select: {
            title: 'title',
            cast: 'actor.name'
        }, 
        prepare(selection) {
            const {title, cast} = selection;
            return {
                title,
                subtitle: `Medvirkende: ${cast}`
            }

        }
    }
}

export default movie;