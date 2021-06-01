/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "http://localhost:1337/graphql",
    headers: {},
  },
  destination: "./sdk/gqless/index.ts",
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;
