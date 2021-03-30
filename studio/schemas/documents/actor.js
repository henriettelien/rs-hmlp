const actor = {
    title: 'actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'actor',
            description: 'Dette er navnet på skuespilleren',
            validation: (Rule) => Rule.required(),
        },

    ]
}

export default actor;

