/*
 * This code takes the pseudo-translations and coalesces them into an easy JSON
 * for the i18n library to read
 */
module.exports = function(grunt) {
  grunt.initConfig({
    po2json: {
      options: {
        format: 'jed',
        singleFile: true
      },
      all: {
        src: ['translations/pseudo/*.po'],
        dest: 'app/public/translations'
      }
    },
  });
  grunt.loadNpmTasks('grunt-po2json');
  grunt.registerTask('default', ['po2json']);
};
