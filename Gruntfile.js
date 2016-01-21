/*
 * This code takes the pseudo-translations and coalesces them into an easy JSON
 * for the i18n library to read
 */
module.exports = function(grunt) {
  grunt.initConfig({
    po2json: {
      options: {
        format: 'jed',
        pretty: true,
        singleFile: true
      },
      en: {
        src: ['translations/templates/*.po'],
        dest: 'public/en'
      },
      pseudo: {
        src: ['translations/pseudo/*.po'],
        dest: 'public/translations'
      },
      it: {
        src: ['translations/it/*.po'],
        dest: 'public/it'
      }
    },
  });
  grunt.loadNpmTasks('grunt-po2json');
  grunt.registerTask('default', [
    'po2json:pseudo',
    'po2json:it',
    'po2json:en',
    ]);
};
