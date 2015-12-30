'use strict';

const gulp = require('gulp');
const install = require('gulp-install');
const conflict = require('gulp-conflict');
const template = require('gulp-template');
const inquirer = require('inquirer');
const rename = require('gulp-rename');

gulp.task('default', (done) => {
  inquirer.prompt([
      {type: 'input', name: 'name', message: 'Give your app a name', default: gulp.args.join(' ')},
      {type: 'confirm', name: 'moveon', message: 'Continue?'}
    ],
    (answers) => {
      if (!answers.moveon) {
        return done();
      }
      gulp.src(__dirname + '/templates/app/**')
        .pipe(template(answers))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', function () {
          done();
        })
        .resume();
    }
  );
});

gulp.task('component', (done) => {
  inquirer.prompt([
      {type: 'input', name: 'name', message: 'Component name:', default: gulp.args.join(' ')},
      {type: 'input', name: 'destination', message: 'Destination: ', default: './src/shared/components'},
      {type: 'confirm', name: 'redux', message: 'Connect to redux: ', default: false},
      {type: 'confirm', name: 'moveon', message: 'Continue?'}
    ],
    (answers) => {
      if (!answers.moveon) {
        return done();
      }

      var ComponentFile = new Promise((resolve, reject) => {
        gulp.src(__dirname + '/templates/component/Component.js')
          .pipe(template(answers))
          .pipe(rename(answers.name + '.js'))
          .pipe(conflict(answers.destination))
          .pipe(gulp.dest(answers.destination))
          .on('end', function () {
            resolve();
          })
          .on('error', function () {
            reject();
          })
      });

      Promise.all(ComponentFile, () => {
        done();
      });

    }
  );
});