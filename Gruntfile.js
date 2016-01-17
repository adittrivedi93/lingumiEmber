module.exports = function(grunt) {
  grunt.initConfig({
    po2json: {
      options: {
        format: 'jed',
        singleFile: true
      },
      all: {
        src: ['translations/**/*.po'],
        dest: 'app/public/translations'
      }
    },
  });
  grunt.loadNpmTasks('grunt-po2json');
  grunt.registerTask('default', ['po2json']);
};
