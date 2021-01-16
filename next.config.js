// next.config.js
const withOptimizedImages = require("next-optimized-images");
const path = require("path");
module.exports = withOptimizedImages({
    webpack(config) {
        config.resolve.alias.images = path.join(__dirname, "images");
        config.resolve.alias.api = path.join(__dirname, "pages", "api");
        config.resolve.alias.components = path.join(__dirname, "components");
        return config;
    },
});
