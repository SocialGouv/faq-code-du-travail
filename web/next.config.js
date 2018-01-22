// si on est hebergé sur github.io on est dans un sous-dossier...
const baseUrl = process.env.NODE_ENV === "production" ? "/faq-code-du-travail/" : "";

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  assetPrefix: baseUrl,
  webpack: config => {
    config.output.publicPath = `${baseUrl}${config.output.publicPath}`;
    return config;
  }
};
