const ArchitectPlugin = {
    name: "architect-atomic-structure",
    config: {
        structure: {
            components: {
                type: "component",
                subdirs: {
                    atoms: "atom",
                    molecules: "molecule",
                    organisms: "organism",
                    templates: "template",
                },
                generateSubIndex: true,
                generateIndex: true,
            },
            pages: {
                type: "page",
                generateIndex: true,
                generateSubdirs: true,
            },
            utils: {
                type: "util",
                prefix: "U",
                generateIndex: true,
            },
            constants: {
                type: "constant",
                prefix: "C",
                caseFormat: {
                    name: "snake-upper",
                },
                generateIndex: true,
            },
            types: {
                type: "type",
                prefix: "T",
                generateIndex: true,
            },
            hooks: {
                type: "hook",
                prefix: "use",
                generateIndex: true,
            },
            services: {
                type: "service",
                suffix: "Service",
                generateIndex: true,
            },
        },
        defaultStructureItem: {
            caseFormat: "pascal",
        },
    },
};

export default ArchitectPlugin;
