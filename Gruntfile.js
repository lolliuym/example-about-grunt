module.exports = function(grunt) {
	
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			combine: {
				files: {
					'html/css/main.css': ['html/css/loll-s-dynamite-site.webflow.css', 'html/css/normalize.css', 'html/css/webflow.css']
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'html/js/main.js': ['html/js/modernizr.js', 'html/js/webflow.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['cssmin', 'uglify']);

};