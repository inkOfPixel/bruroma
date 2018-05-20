/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  presets: babelrc.presets.concat(["flow"]),
  plugins: babelrc.plugins.concat(["babel-plugin-styled-components"])
});

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      root: path.resolve(__dirname, "./src"),
      extensions: ["", ".js", ".jsx", ".json"]
    }
  });
  return config;
};
