# Architect plugin: Atomic Structure

The **architect-atomic-structure** plugin extends the [Architect CLI tool](https://www.npmjs.com/package/@amphore-dev/architect) to help developers structure their projects using the atomic design methodology. This plugin provides a clear and scalable structure for components, pages, utilities, constants, types, hooks, and services, promoting consistency and maintainability across projects.

## Features

-   Follows the atomic design principle with support for Atoms, Molecules, Organisms, and Templates.
-   Organizes pages, utilities, constants, types, hooks, and services into their own directories.
-   Automatic generation of index files and sub-index files for easy imports.
-   Customizable directory and naming conventions, including prefixes, suffixes, and case formats.
-   Seamless integration with the Architect CLI for efficient project scaffolding.

## Atomic Structure Breakdown

| Name      | Type       | Out folder name | Description                                           |
| --------- | ---------- | --------------- | ----------------------------------------------------- |
| Atoms     | `atom`     | atoms           | Basic building blocks like buttons or form fields.    |
| Molecules | `molecule` | molecules       | Groups of atoms that form more complex elements.      |
| Organisms | `organism` | organisms       | Complex structures that combine multiple molecules.   |
| Templates | `template` | templates       | Layout components that define the structure of pages. |
| Pages     | `page`     | pages           | The highest level, representing full-page components. |
| Utilities | `util`     | utils           | Helper functions and classes.                         |
| Constants | `constant` | constants       | Constants like enums or configuration values.         |
| Types     | `type`     | types           | Type definitions for TypeScript.                      |
| Hooks     | `hook`     | hooks           | Custom React hooks.                                   |
| Services  | `service`  | services        | API services or other external services.              |

## Installation

Install the plugin in your project directory using npm or Yarn:

```bash
npm install --save-dev @amphore-dev/architect-atomic-structure
```

or

```bash
yarn add --dev @amphore-dev/architect-atomic-structure
```

## Usage

To include the plugin, modify the `architect.config.json` file in your project directory.

```json
{
    "plugins": ["@amphore-dev/architect-atomic-structure"],
    "outputDir": "src"
}
```

To avoid conficlts with other plugins, don't forget to add the plugin to the `plugins` array AFTER all other plugins.

## License

This plugin is licensed under the ISC License.
