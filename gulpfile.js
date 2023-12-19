const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");

function compressSass() {
    return gulp
        .src("./source/styles/main.sass")
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: "compressed",
            })
        )
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./build/styles"));
}

function compressJS() {
    return gulp
        .src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./build/scripts"));
}

function compressImages() {
    return gulp.src("./source/image/*").pipe(imagemin()).pipe(gulp.dest("./build/image"));
}

exports.default = gulp.parallel(compressSass, compressJS, compressImages);
