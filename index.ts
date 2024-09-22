const ArchitectPlugin = {
    name: "architect-atomic-structure",

    config: {
        defaultStructureItem: {
            caseFormat: "pascal",
        },
        structure: {
            components: {
                generateIndex: true,
                generateSubIndex: true,
                subdirs: {
                    atoms: "atom",
                    molecules: "molecule",
                    organisms: "organism",
                    templates: "template",
                },
                type: "component",
            },
            constants: {
                caseFormat: {
                    name: "snake-upper",
                },
                generateIndex: true,
                prefix: "C",
                type: "constant",
            },
            hooks: {
                generateIndex: true,
                prefix: "use",
                type: "hook",
            },
            services: {
                generateIndex: true,
                suffix: "Service",
                type: "service",
            },
            types: {
                generateIndex: true,
                prefix: "T",
                type: "type",
            },
            utils: {
                generateIndex: true,
                prefix: "U",
                type: "util",
            },
            views: {
                generateIndex: true,
                generateSubdirs: true,
                type: "view",
            },
        },
    },
};
export default ArchitectPlugin;
