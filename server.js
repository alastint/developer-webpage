const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

/**
 * Gzip
 */
app.use(compression());

/**
 * Run the app by serving the static files in the dist directory
 */
app.use(express.static(__dirname + '/dist/my-personal-cv', { redirect: false }));

/**
 * Start the app by listening on the default port
 */
app.listen(port);

/**
 * For all GET requests, send back index.html so that PathLocationStrategy can be used
 */
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/my-personal-cv/index.html'));
});

console.log('Server listening on ' + port);
