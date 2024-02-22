const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagein = require("gulp-imagemin");

function styles() {
    return gulp
        .src("./src/styles/**/*.sass")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./dist/styles"));
}

function images() {
    return gulp.src("./src/images/**/*").pipe(imagein()).pipe(gulp.dest("./dist/images"));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
    gulp.watch("./src/styles/*.sass", gulp.parallel(styles));
};
