//引入gulp模块
const gulp = require("gulp");
const connect = require("gulp-connect
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const cleanCss = require("gulp-clean-css"); 
const babel = require("gulp-babel");

gulp.task("babel", function () {
    gulp.src("js/*.js")
    .pipe(babel({
        presets: ['ES2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
gulp.task("copyIndex",function(){
	gulp.src("html/*.html").pipe(gulp.dest("dist/html"));
});
gulp.task("copyImg",function(){
	gulp.src("html/img/**").pipe(gulp.dest("dist/img"));
});
gulp.task("copyJs",function(){
	gulp.src("js/*.js").pipe(gulp.dest("dist/js"));
});
gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(cleanCss())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"));
});
//检测文件变化，修改文件后页面自动刷新
gulp.task("watch",function(){
	gulp.watch("html/*.html",["copyIndex"]);
	gulp.watch("img/*img",["copyImg"]);
	gulp.watch("sass/*scss",["sass"]);
	gulp.watch("js/*js",["copyJs"])
});
gulp.task('server',function(){
	connect.server({
		root:'dist',
		livereload:true
	})
});

gulp.task("default",["watch","server","copyIndex","copyImg","sass","babel"],function(){
	console.log("jj")
});