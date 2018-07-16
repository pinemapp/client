const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';
const isDev = env == 'development';

if (isDev) {
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const WebpackDevMiddleware = require('webpack-dev-middleware');
  const WebpackHotMiddleware = require('webpack-hot-middleware');
  const historyApiFallback = require('connect-history-api-fallback');

  const compiler = webpack(config);

  app.use(historyApiFallback({
    verbose: false
  }));

  app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(WebpackHotMiddleware(compiler));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, 'dist')))
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log(`Listening at http://localhost:${port}`);
});

