module.exports = function(grunt) {

  return {

    LOG_SUCCESS: 0,
    LOG_DEBUG: -1,
    LOG_INFO: -2,
    LOG_NOTICE: -3,
    LOG_ERROR: -4,
    LOG_CRITICAL: -5,

    log: function(msg, level) {
      switch ( level ) {
        case this.LOG_CRITICAL:
          grunt.fail.fatal(msg);
          break;
        case this.LOG_ERROR:
          grunt.log.errorlns(msg);
          break;
        case this.LOG_DEBUG:
          grunt.verbose.writeln(msg);
          break;
        case this.LOG_INFO:
          grunt.log.writeln(msg);
          break;
        case this.LOG_NOTICE:
          grunt.log.writeln(msg);
          break;
        case this.LOG_SUCCESS:
          grunt.log.oklns(msg);
          break;
      }
    }
  };
};