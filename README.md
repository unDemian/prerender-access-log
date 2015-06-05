prerender-access-log
=======================
Prerender plugin for creating access log file with morgan, to be used with the prerender node application from https://github.com/prerender/prerender.

How to use
----------

In your local prerender project run:

`npm install prerender-access-log --save`

Then in the server.js that initializes the prerender:

`server.use(require('prerender-access-log'));`

Configuration
-------------
The plugin uses the [morgan](https://github.com/expressjs/morgan#predefined-formats) for creating logs and [file-stream-rotator](https://www.npmjs.com/package/file-stream-rotator) for managing file names.

```javascript
  var server = prerender({
    accessLog: {
        // Check out the file-stream-rotator docs for parameters
        fileStreamRotator: {
            filename: '/var/logs/prerender/access-%DATE%.log',
            frequency: 'daily',
            date_format: 'YYYY-MM-DD',
            verbose: false
        },

        // Check out the morgan docs for the available formats
        morgan: {
            format: 'combined'
        }
    }
  });
  ```
