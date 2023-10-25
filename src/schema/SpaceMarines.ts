export type SpaceMarineCatalogue = {
    authorName: string;
    battleScribeVersion: string;
    catalogueLinks: {
        catalogueLink: [
            {
                id: string;
                importRootEntries: string;
                name: string;
                targetId: string;
                type: string;
            },
        ];
    };
    categoryEntries: {
        categoryEntry: [
            {
                id: string;
                name: string;
                hidden: string;
            },
        ];
    };
    entryLinks: {
        entryLink: [
            {
                hidden: string;
                id: string;
                import: string;
                name: string;
                targetId: string;
                type: string;
            },
        ];
    };
    gameSystemId: string;
    gameSystemRevision: string;
    id: string;
    library: string;
    name: string;
    profileTypes: {
        profileType: {
            characteristicTypes: {
                characteristicType: [
                    {
                        id: string;
                        name: string;
                    },
                ];
            };
            hidden: string;
            id: string;
            name: string;
        };
    };
    publications: {
        publication: [
            {
                hidden: string;
                id: string;
                name: string;
                publicationDate: string;
                publisherUrl: string;
                shortName: string;
            },
        ];
        revision: string;
    };
    rules: {
        rule: {
            description: {
                text: string;
            };
            hidden: string;
            id: string;
            name: string;
        };
    };
    sharedProfiles: {
        profile: [
            {
                characteristics: {
                    characteristic: {
                        text: string;
                        name: string;
                        typeId: string;
                    };
                };
                hidden: string;
                id: string;
                name: string;
                typeId: string;
                typeName: string;
            },
        ];
    };
    sharedSelectionEntries: {
        selectionEntry: [
            {
                categoryLinks: {
                    categoryLink: {
                        id: string;
                        name: string;
                        primary: string;
                        targetId: string;
                    };
                };
                collective?: string;
                constraints?: {
                    constraint: {
                        field: string;
                        id: string;
                        includeChildForces: string;
                        includeChildSelections: string;
                        percentValue?: string;
                        scope?: string;
                        shared: string;
                        type: string;
                        value: string;
                    };
                };
                costs?: {
                    cost?: [
                        {
                            name: string;
                            typeId: string;
                            value: string;
                        },
                    ];
                };
                hidden: string;
                id: string;
                import: string;
                name: string;
                type: string;
                infoLinks: {
                    infoLink: [
                        {
                            hidden: string;
                            id: string;
                            name: string;
                            targetId: string;
                            type: string;
                        },
                    ];
                };
                profiles: {
                    profile: [
                        {
                            characteristics: {
                                characteristic: {
                                    text: string;
                                    name: string;
                                    typeId: string;
                                };
                            };
                            hidden: string;
                            id: string;
                            name: string;
                            typeId: string;
                            typeName: string;
                        },
                    ];
                };
                selectionEntryGroups: {
                    selectionEntryGroup: [
                        {
                            constraints: {
                                constraint: [
                                    {
                                        field: string;
                                        id: string;
                                        scope: string;
                                        shared: string;
                                        type: string;
                                        value: string;
                                    },
                                ];
                            };
                            defaultSelectionEntryId: string;
                            id: string;
                            name: string;
                            entryLinks: {
                                entryLink: [
                                    {
                                        id: string;
                                        name: string;
                                        import: string;
                                        targetId: string;
                                        type: string;
                                    },
                                ];
                            };
                        },
                    ];
                };
            },
        ];
    };
};