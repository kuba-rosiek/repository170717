module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/main.css': 'sass/main.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'build/'
  			}]
  		}
  	},

	watch: {
		scripts: {
			files: ['sass/main.sass'],
			tasks: ['sass'],
			options: {
				spawn: false,
			},
		}
	},
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // Default task(s).

  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('images', ['imagemin']);
  
  
  
};
