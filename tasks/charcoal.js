/*
 * Backend Task Loader
 * @link https://github.com/locomotivemtl/grunt-charcoal-backend
 *
 * @copyright © 2015 Locomotive
 * @license   MIT
 */

'use strict';

/*global __dirname:true*/
/*global require:true*/
module.exports = function(grunt) {

    grunt.loadConfig = function (path) {
        var glob = require('glob');
        var object = {};
        var key;

        glob.sync('*.js', { cwd: path }).forEach(function(option) {
            key = option.replace(/\.js$/,'');
            object[key] = require(path + option);
        });

        return object;
    }

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        tests: {
            backend: [ 'jsonlint', 'phplint', 'phpunit', 'phpcs' ]
        }
    };

    grunt.util._.extend(config, grunt.loadConfig(__dirname + '/../config/'));
    // grunt.initConfig(config);
    grunt.config.merge(config);

    require('load-grunt-tasks')(grunt, {
        scope: 'dependencies',
        config: require('../package.json')
    });

    grunt.registerMultiTask('tests', 'Test Charcoal', function () {
        grunt.task.run( this.data );
    });

};
