module.exports = function(grunt){
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
       

        jshint: {
            options: {
                
              curly: true,
              eqeqeq: true,
              esversion: 6,
              eqnull: true,
              browser: true,
              devel: true,
              node: true,
              globals: {
               // d3:true
              },
              undef: true,
              unused: true
            },
            files: {
                src: ['dev-js/index.js']
            }

        },
        browserify: {
            dist: {
                files: {
                    // destination for transpiled js : source js
                    'js/index.js': 'dev-js/index.js'
                },
                options: {
                    transform: [['babelify', { presets: "env" }]],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        uglify: {
            options: {
              mangle: {
               // reserved: ['d3','Highcharts']
              },
              compress: {
                drop_console: true
              }
            },
            min: {
                files: grunt.file.expandMapping(['js/**/*.js'], 'js/min/', {
                    rename: function(destBase, destPath) {
                        return destBase+destPath.replace('.js', '.min.js');
                    }
                }),
                options: {
                    sourcemap: 'auto'
                }
            }
        },
        sass: {
            build: {
                files: grunt.file.expandMapping(['dev-css/*.scss'], '', {
                    rename: function(destBase, destPath) {
                        return destBase+destPath.replace('.scss', '.css');
                    }
                })
            }
        },
        cssmin: {
            build: {
                files: [{
                  expand: true,
                  cwd: 'css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'css',
                  ext: '.min.css'
                }]
            }
        },
        watch: {
           
            js: {
                files: ['dev-js/index.js'],
                tasks: ['jshint','browserify']
            },
            jsHintOnly: {
                files: ['dev-js/*.js','!dev-js/index.js'],
                tasks: ['jshint']
            },
            scss: {
                files: ['dev-css/*.scss'], 
                tasks: ['sass']
            },
            postcss: {
                files: ['dev-css/*.css'],
                tasks: ['postcss']
            }
        },
        postcss: {
            options: {
                 processors: [require('autoprefixer')({browsers:['>1%','last 2 versions']})]
            },
            dist: {
                 src: 'dev-css/styles.css',
                dest: 'css/styles.css'
            }
        }
    });

    grunt.registerTask('default', []);
    grunt.registerTask(
      'build', 
      'Does the watch things without having to change file.', 
      [ 'browserify','sass','postcss']
    );

};