var gulp = require('gulp');
var typescript = require('gulp-typescript');
var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build', function() {  
    return tsProject.src()
        .pipe(typescript(tsProject))
        .pipe(gulp.dest('./'));
});
