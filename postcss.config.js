const autofixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    autofixer,
    cssnano({ preset: "default"})
  ]
};
