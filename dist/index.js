'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tips = require('./routes/tips.js');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use('/tips', _tips.router);
app.use((0, _cors2.default)());

var port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, function () {
  console.log('Server is listening on port: ' + port);
});