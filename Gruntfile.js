module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), //load configuration

        concat: { // concatination task settings
            dist: {
                src: [
                    'lib/css/libs/*.css',
                    'lib/js/default.css'
                ],
                dest: 'lib/build/css/production.css',
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-concat'); // which NPM packages to load
    grunt.registerTask('default', ['concat']); // which packages to run
};