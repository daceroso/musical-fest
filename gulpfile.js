const { series, src, dest, watch, parallel } = require("gulp");

const sass = require("gulp-sass");
const imgmin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");
const concat = require("gulp-concat");

// Utilities CSS

const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");

// Utilities JS
const terser = require("gulp-terser-js");
const rename = require("gulp-rename");

// Compile Function

const paths = {
  img: "src/img/**/*",
  scss: "src/scss/**/*.scss",
  js: "src/js/**/*.js",
};

const css = function () {
  return src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./build/css"));
};

const minifycss = function () {
  return src(paths.scss)
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(dest("./build/css"));
};

const javascript = function () {
  return src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(concat("bundle.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./build/js"));
};

const images = function () {
  return src(paths.img)
    .pipe(imgmin())
    .pipe(dest("./build/img"))
    .pipe(notify({ message: "Image minified" }));
};

const webpVersion = function () {
  return src(paths.img)
    .pipe(webp())
    .pipe(dest("./build/img"))
    .pipe(notify({ message: "Webp version done" }));
};

const watchFiles = function () {
  watch(paths.scss, css); // * current folder - ** meaning all files
  watch(paths.js, javascript); // *
};

exports.css = css;
exports.images = images;
exports.watchFiles = watchFiles;

exports.default = series(css, javascript, images, webpVersion, watchFiles);
