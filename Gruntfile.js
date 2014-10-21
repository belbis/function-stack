/**
 * Grunt File for Function Stack
 * @param g - grunt
 */
var grunt = function (g) {
  // initialize grunt
  g.initConfig({
    pkg: g.file.readJSON('package.json'),
    watch: {
      files: ['test/*', 'src/*.js'],
      tasks: ['test']
    },
    qunit: {
      all: ['test/FunctionStackTest.html']
    },
    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      target: {
        files: [{
          src: ['src/fs.js'],
          dest: ['dist/fs.min.js']
        }]
      }
    }
  });

  // load up tasks
  g.loadNpmTasks('grunt-contrib-watch');
  g.loadNpmTasks('grunt-contrib-uglify');
  g.loadNpmTasks('grunt-contrib-qunit');

  // register tasks
  g.registerTask('default', ['qunit', 'uglify']);
  g.registerTask('test', ['qunit']);
};

module.exports = grunt;