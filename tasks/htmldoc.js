/*
 * grunt-htmldoc
 * https://github.com/cxpartners/grunt-htmldoc
 *
 * Copyright (c) 2014 Jon Brace
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var htmldoc = require("htmldoc");
  var logger = require("./grunt-logger.js")(grunt);
  var config;
  var _ = require("lodash");
  var yaml = require("js-yaml");
  var fs = require("fs-extra");
  var path = require("path");

  grunt.registerMultiTask('htmldoc', 'Grunt wrapper for HTMLDoc', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      configFile: './htmldoc.yaml'
    });

    try {
      config = yaml.safeLoad(fs.readFileSync(options.configFile, 'utf8'));
    } catch (e) {
      logger.log(e, logger.LOG_CRITICAL);
    }

    _.defaults(config, options);

    /*
     * Change to the directory the config yaml
     */
    process.chdir(path.dirname(options.configFile));

    htmldoc.generate(config, logger);
  });
};
