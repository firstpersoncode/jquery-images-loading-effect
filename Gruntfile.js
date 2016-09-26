module.exports = function (grunt) {
	grunt
		.initConfig({
			sass: {
			    dist: {
			      files: {
			        'build/css/main.css': 'main.scss'
			      }
			    }
			  },
			concat: {
			  js: {
			    src: [
			    'js/head.js',
			    'js/prototype.js',
			    ],
			    dest: 'build/js/loadImages.js',
			  },
			},
			uglify: {
			    my_target: {
			      files: {
			        'build/js/loadImages.min.js': ['build/js/loadImages.js']
			      }
			    }
			  },
		  	watch: {
			  js: {
			    files: ['js/**/*.js'],
			    tasks: ['concat:js', 'uglify'],
			  },
			  css: {
			    files: ['css/**/*.css', 'sass/**/*.scss'],
			    tasks: ['sass'],
			  },
			},
		});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);
};