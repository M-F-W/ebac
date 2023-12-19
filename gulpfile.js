const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");

function comprimeImagem() {
    return gulp
        .src("./source/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./build/images"));
}

function comprimeJavaScript() {
    return gulp
        .src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest("./build/scripts"));
}

function compilaSass() {
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

function funcaoPadrao(callback) {
    console.log("Executando o gulp");
    callback();
}

function dizOi(callback) {
    console.log("Oi Gulp");
    dizTchau();
    callback();
}

function dizTchau() {
    console.log("Tchau Gulp");
}

exports.default = function () {
    gulp.watch(
        "./source/styles/*.sass",
        { ignoreInitial: false },
        gulp.series(compilaSass)
    );
    gulp.watch(
        "./source/scripts/*.js",
        { ignoreInitial: false },
        gulp.series(comprimeJavaScript)
    );
    gulp.watch("./source/images", { ignoreInitial: false }, gulp.series(comprimeImagem));
};
