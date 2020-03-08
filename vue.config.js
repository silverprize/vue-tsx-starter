module.exports = {
  chainWebpack: config => {
    config.module
      .rule("tsx")
      .use("vue-jsx-hot-loader")
      .loader("vue-jsx-hot-loader");
    return config;
  }
};
