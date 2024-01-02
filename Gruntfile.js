module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    "main.css": "main.less",
                },
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    "main.min.css": "main.less",
                },
            },
        },

        sass: {
            dist: {
                files: {
                    "main2.min.css": "main2.sass",
                },
            },
        },
        concurrent: {
            target: ["olaGrunt", "less", "sass"],
        },
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-concurrent");

    grunt.registerTask("olaGrunt", function () {
        const done = this.async();
        setTimeout(function () {
            console.log("Olá Grunt!");
            done();
        }, 3000);
    });

    grunt.registerTask("default", ["concurrent"]);
};
