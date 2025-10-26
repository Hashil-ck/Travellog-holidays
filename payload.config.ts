import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "your-secret-key",
  admin: {
    user: "users",
  },
  editor: lexicalEditor({}),
  collections: [
    {
      slug: "users",
      auth: true,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
      ],
    },
    {
      slug: "banners",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "subtitle",
          type: "text",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "ctaText",
          type: "text",
          defaultValue: "Book Now",
        },
        {
          name: "ctaLink",
          type: "text",
        },
        {
          name: "isActive",
          type: "checkbox",
          defaultValue: true,
        },
      ],
    },
    {
      slug: "packages",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "richText",
        },
        {
          name: "destination",
          type: "text",
          required: true,
        },
        {
          name: "duration",
          type: "text",
        },
        {
          name: "price",
          type: "number",
        },
        {
          name: "images",
          type: "array",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          name: "highlights",
          type: "array",
          fields: [
            {
              name: "highlight",
              type: "text",
            },
          ],
        },
        {
          name: "isInternational",
          type: "checkbox",
          defaultValue: true,
        },
        {
          name: "isActive",
          type: "checkbox",
          defaultValue: true,
        },
      ],
    },
    {
      slug: "destinations",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "richText",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "isInternational",
          type: "checkbox",
          defaultValue: true,
        },
        {
          name: "isActive",
          type: "checkbox",
          defaultValue: true,
        },
      ],
    },
    {
      slug: "media",
      fields: [
        {
          name: "alt",
          type: "text",
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  db: mongooseAdapter({
    url:
      process.env.DATABASE_URI ||
      "mongodb://localhost:27017/wonderlog-holidays",
  }),
});
