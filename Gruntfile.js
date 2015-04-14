module.exports = function (grunt) {
    'use strict';
    var gruntConfig = {
        // uglify
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'assets/js/main.min.js': ['dev/js/scripts.js']
                }
            }
        },
        imageoptim: {
            dist: {
                options: {
                    jpegMini: false,
                    imageAlpha: true,
                    quitAfter: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/img',
                    src: '**/*.{png,jpg,jpeg,gif}',
                    dest: 'assets/img'
                }]
            }
        },
        // less
        less: {
            development: {
                options: {
                    paths: ["assets/css"],
                    compress: true
                },
                files: {
                    'assets/css/style.min.css': ["dev/css/less/style.less"]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'assets/index.html': 'dev/index.html'
                }
            }
        },
        bowerInstall: {
            target: {
                src: [
                    'dev/index.html'
                ],
                cwd: '',
                dependencies: true,
                devDependencies: false,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        },
        // watch
        watch : {
            dist : {
                files : [
                    'dev/js/**/*',
                    'dev/css/less/**/*'
                ],
                tasks : [ 'uglify', 'less' ]
            }
        }
    };
    /**/
    grunt.initConfig(gruntConfig);
    var keys  = Object.keys(gruntConfig);
    var tasks = [];
    for(var i = 1, l = keys.length; i < l; i++) {
        tasks.push(keys[i]);
    }
    // Plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-imageoptim');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // Tarefas que serão executadas
    grunt.registerTask('default', tasks);
    // Tarefa para Watch
    grunt.registerTask( 'w',['watch']);
};