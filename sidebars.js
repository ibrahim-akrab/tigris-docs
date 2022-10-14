/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  docs: [
    {
      type: "doc",
      label: "Overview",
      id: "overview/overview",
    },
    {
      type: "category",
      label: "Quickstart",
      link: {
        type: "doc",
        id: "quickstart/quickstart",
      },
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Quickstart: TypeScript",
          id: "quickstart/quickstart",
        },
        {
          type: "doc",
          label: "Quickstart: Go",
          id: "quickstart/quickstart-go",
        },
        {
          type: "doc",
          label: "Quickstart: Java",
          id: "quickstart/quickstart-java",
        },
        {
          type: "doc",
          label: "Quickstart: HTTP",
          id: "quickstart/quickstart-http",
        },
      ],
    },
    "overview/why-tigris",
    "overview/architecture",
    {
      type: "doc",
      label: "Databases, Collections and Topics",
      id: "overview/databases",
    },
    {
      type: "category",
      label: "Document Store",
      link: {
        type: "doc",
        id: "documents/document-store",
      },
      collapsed: true,
      items: [
        "documents/documents",
        "documents/datamodel",
        "documents/schema-validation",
        "documents/schema-modification",
        "documents/crud",
        "documents/search",
        "documents/transaction",
        "documents/filters",
        "documents/restrictions",
      ],
    },
    {
      type: "category",
      label: "Event Streaming",
      link: {
        type: "doc",
        id: "events/events",
      },
      collapsed: true,
      items: [
        "events/schema-modification",
        "events/subscriber",
        "events/publisher",
        "events/search-query",
      ],
    },
    {
      type: "doc",
      label: "Search",
      id: "searching/search",
    },
    {
      type: "doc",
      label: "Authentication",
      id: "auth/auth",
    },
    {
      type: "category",
      label: "Observability",
      link: {
        type: "doc",
        id: "observability/observability",
      },
      collapsed: true,
      items: ["observability/metrics", "observability/tags"],
    },
    {
      type: "category",
      label: "TypeScript Reference",
      link: {
        type: "doc",
        id: "typescript/index",
      },
      collapsed: true,
      items: [
        "typescript/getting-started",
        {
          type: "category",
          label: "Documents",
          link: {
            type: "doc",
            id: "typescript/documents/documents",
          },
          collapsed: false,
          items: [
            "typescript/documents/datamodel",
            "typescript/documents/types",
            "typescript/documents/schema",
            "typescript/documents/insert",
            "typescript/documents/update",
            "typescript/documents/delete",
            "typescript/documents/query",
            "typescript/documents/search",
            "typescript/documents/transactions",
            "typescript/documents/cursor",
          ],
        },
        {
          type: "category",
          label: "Event Streaming",
          link: {
            type: "doc",
            id: "typescript/events/events",
          },
          collapsed: false,
          items: [
            "typescript/events/datamodel",
            "typescript/events/types",
            "typescript/events/schema",
            "typescript/events/publish_subscribe",
            "typescript/events/query",
            "typescript/events/search",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Go Reference",
      link: {
        type: "doc",
        id: "golang/index",
      },
      collapsed: true,
      items: [
        "golang/getting-started",
        {
          type: "category",
          label: "Documents",
          link: {
            type: "doc",
            id: "golang/documents/documents",
          },
          collapsed: false,
          items: [
            "golang/documents/datamodel",
            "golang/documents/types",
            "golang/documents/schema",
            "golang/documents/insert",
            "golang/documents/update",
            "golang/documents/delete",
            "golang/documents/query",
            "golang/documents/search",
            "golang/documents/transactions",
          ],
        },
        {
          type: "category",
          label: "Events",
          link: {
            type: "doc",
            id: "golang/events/events",
          },
          collapsed: false,
          items: [
            "golang/events/datamodel",
            "golang/events/types",
            "golang/events/schema",
            "golang/events/publish_subscribe",
            "golang/events/query",
            "golang/events/search",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Java Reference",
      link: {
        type: "doc",
        id: "java/index",
      },
      collapsed: true,
      items: [
        "java/getting-started",
        {
          type: "category",
          label: "Data Modeling",
          link: {
            type: "doc",
            id: "java/datamodel/overview",
          },
          collapsed: false,
          items: [
            "java/datamodel/declare",
            "java/datamodel/primary-key",
            "java/datamodel/embedded",
            "java/datamodel/types",
          ],
        },
        "java/insert",
        "java/update",
        "java/delete",
        "java/query",
        "java/search",
        "java/transactions",
      ],
    },
    {
      type: "category",
      label: "HTTP Reference",
      collapsed: true,
      link: {
        type: "doc",
        id: "http/index",
      },
      items: [
        "http/getting-started",
        {
          type: "category",
          label: "Data Modeling",
          link: {
            type: "doc",
            id: "http/datamodel/overview",
          },
          collapsed: false,
          items: [
            "http/datamodel/declare",
            "http/datamodel/primary-key",
            "http/datamodel/embedded",
            "http/datamodel/types",
          ],
        },
        "http/insert",
        "http/update",
        "http/delete",
        "http/query",
        "http/search",
        "http/event_streaming",
      ],
    },
    "overview/deployment",
    {
      type: "category",
      label: "Command Line Interface",
      link: {
        type: "doc",
        id: "cli/overview",
      },
      collapsed: true,
      items: [
        "cli/authentication",
        "cli/installation",
        "cli/configuration",
        "cli/working-locally",
        {
          type: "category",
          label: "Reference",
          items: [
            "cli/reference/alter-application",
            "cli/reference/alter-collection",
            "cli/reference/completion",
            "cli/reference/config-show",
            "cli/reference/create-application",
            "cli/reference/create-collection",
            "cli/reference/create-database",
            "cli/reference/delete",
            "cli/reference/describe-collection",
            "cli/reference/describe-database",
            "cli/reference/dev-logs",
            "cli/reference/dev-start",
            "cli/reference/dev-stop",
            "cli/reference/drop-application",
            "cli/reference/drop-collection",
            "cli/reference/drop-database",
            "cli/reference/generate-sample-schema",
            "cli/reference/insert",
            "cli/reference/list-applications",
            "cli/reference/list-collections",
            "cli/reference/list-databases",
            "cli/reference/login",
            "cli/reference/logout",
            "cli/reference/ping",
            "cli/reference/publish",
            "cli/reference/read",
            "cli/reference/replace",
            "cli/reference/scaffold-go",
            "cli/reference/search",
            "cli/reference/server-info",
            "cli/reference/server-version",
            "cli/reference/subscribe",
            "cli/reference/transact",
            "cli/reference/update",
            "cli/reference/version",
          ],
        },
      ],
    },
  ],
  guides: [
    {
      type: "doc",
      id: "guides/guides",
    },
    {
      type: "category",
      label: "Next.js",
      link: {
        type: "doc",
        id: "guides/nextjs/nextjs",
      },
      items: [],
    },
    {
      type: "doc",
      id: "guides/rest-webapp-typescript",
    },
    {
      type: "doc",
      id: "guides/rest-webapp-go",
    },
    {
      type: "doc",
      id: "guides/rest-webapp-java",
    },
  ],
};

module.exports = sidebars;
