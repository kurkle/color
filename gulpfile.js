const gulp = require('gulp');
const eslint = require('gulp-eslint');
const exec = require('child_process').exec;
const pack = require('./util/pack');

function run(bin, args) {
	return new Promise(function(resolve, reject) {
		const exe = '"' + process.execPath + '"';
		const src = require.resolve(bin);
		const ps = exec([exe, src].concat(args || []).join(' '));

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
	gulp.src('./color.d.ts').pipe(gulp.dest('./dist/'));
	return run('rollup/dist/bin/rollup', ['-c']);
}

function lintJsTask() {
	const files = [
		'src/**/*.js',
		'test/**/*.js'
	];
	const options = {
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
