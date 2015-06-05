var morgan = require('morgan'),
    FileStreamRotator = require('file-stream-rotator');

module.exports = {
	init: function(server) {
    this.options = server.options;
    this.stream = FileStreamRotator.getStream(this.options.accessLog.fileStreamRotator);
	},

  beforePhantomRequest: function(req, res, next) {
    morgan(this.options.accessLog.morgan.format, { stream: this.stream })(req, res, next);
  }
}
