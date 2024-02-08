module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            dev: {
                files: {
                    "dev/styles/main.css": "src/styles/main.sass",
                },
            },
            prod: {
                options: {
                    style: "compressed",
                },
                files: {
                    "dist/styles/main.min.css": "src/styles/main.sass",
                },
            },
        },
        watch: {
            files: ["src/styles/**/*.sass"],
            tasks: ["sass:dev"],
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: "ENDERECO_DO_CSS",
                            replacement: "./styles/main.css",
                        },
                        {
                            match: "ENDERECO_DO_JS",
                            replacement: "../src/scripts/main.js",
                        },
                    ],
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ["src/index.html"],
                        dest: "dev/",
                    },
                ],
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: "ENDERECO_DO_CSS",
                            replacement: "./styles/main.min.css",
                        },
                        {
                            match: "ENDERECO_DO_JS",
                            replacement: "./scripts/main.min.js",
                        },
                    ],
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ["prebuild/index.html"],
                        dest: "dist/",
                    },
                ],
            },
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    "prebuild/index.html": "src/index.html",
                },
            },
        },
        clean: ["prebuild"],
        uglify: {
            target: {
                files: {
                    "dist/scripts/main.min.js": "src/scripts/main.js",
                },
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-replace");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", [
        "sass:prod",
        "htmlmin:dist",
        "replace:dist",
        "clean",
        "uglify",
    ]);
};
