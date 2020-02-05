/* global Promise */

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var exec = require('child_process').exec;
var pack = require('./util/pack');

function run(bin, args) {
	return new Promise(function(resolve, reject) {
		var exe = '"' + process.execPath + '"';
		var src = require.resolve(bin);
		var ps = exec([exe, src].concat(args || []).join(' '));

		ps.stdout.pipe(process.stdout);
		ps.stderr.pipe(process.stderr);
		ps.on('close', function(error) {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

function buildTask() {
	pack();
	return run('rollup/bin/rollup', ['-c']);
}

function lintJsTask() {
	var files = [
		'src/**/*.js',
		'test/**/*.js'
	];
	var options = {
		rules: {
			complexity: [1, 10],
			'max-statements': [1, 30]
		}
	};

	return gulp.src(files)
		.pipe(eslint(options))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}

gulp.task('build', buildTask);
gulp.task('lint-js', lintJsTask);
