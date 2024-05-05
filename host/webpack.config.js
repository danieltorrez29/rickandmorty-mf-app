const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:8080/"
        : "https://master--host-rickandmorty.netlify.app/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        mf_navbar:
          argv.mode === "development"
            ? "mf_navbar@http://localhost:8081/remoteEntry.js"
            : "mf_navbar@https://mf-navbar-rickandmorty.netlify.app/remoteEntry.js",
        mf_counter:
          argv.mode === "development"
            ? "mf_counter@http://localhost:8082/remoteEntry.js"
            : "mf_counter@https://master--mf-counter-rickandmorty.netlify.app/remoteEntry.js",
        mf_characters:
          argv.mode === "development"
            ? "mf_characters@http://localhost:8083/remoteEntry.js"
            : "mf_characters@https://mf-characters-rickandmorty.netlify.app/remoteEntry.js",
        mf_character_detail:
          argv.mode === "development"
            ? "mf_character_detail@http://localhost:8084/remoteEntry.js"
            : "mf_character_detail@https://mf-character-detail-rickandmorty.netlify.app/remoteEntry.js",
        mf_about:
          argv.mode === "development"
            ? "mf_about@http://localhost:8085/remoteEntry.js"
            : "mf_about@https://mf-about-rickandmorty.netlify.app/remoteEntry.js",
        mf_not_found:
          argv.mode === "development"
            ? "mf_not_found@http://localhost:8086/remoteEntry.js"
            : "mf_not_found@https://mf-not-found-rickandmorty.netlify.app/remoteEntry.js",
        mf_loader:
          argv.mode === "development"
            ? "mf_loader@http://localhost:8087/remoteEntry.js"
            : "mf_loader@https://master--mf-loader-rickandmorty.netlify.app/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
});
