module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'vendor/exceptions.js',
                    'src/is.js',
                    'src/init.js',
                    'src/validate-keys.js',
                    'src/validate-specification.js',
                    'src/create-specification.js',
                    'src/return-errors.js',
                    'src/mixins/validations.js',
                    'src/validations/max-length.js',
                    'src/validations/min-length.js',
                    'src/validations/regex.js',
                    'src/validations/type.js',
                    'src/validate.js'
                ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true, 
                eqnull: true,
                browser: true,
                reporter: 'jslint',
                reporterOutput: 'reports/jshint.xml',
                globals: {
                    jQuery: true
                },
            },
            all: ['src/**/*.js']
        },
        watch: {
            scripts: {
                files: ['src/**/*.js', 'vendor/**/*.js'],
                tasks: ['build-js'],
                options: {
                    spawn: false,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build-js', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('build', ['build-js']);

};
