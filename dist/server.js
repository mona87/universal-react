'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('*', function (req, res) {
	// routes is our object of React routes defined above
	(0, _reactRouter.match)({ routes: _routes.routes, location: req.url }, function (err, redirectLocation, props) {
		if (err) {
			// something went badly wrong, so 500 with a message
			res.status(500).send(err.message);
		} else if (redirectLocation) {
			// we matched a ReactRouter redirect, so redirect from the server
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (props) {
			// if we got props, that means we found a valid component to render
			// for the given route
			var markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RoutingContext, props));
			// render `index.ejs`, but pass in the markup we want it to display
			res.render('index', { markup: markup });
		} else {
			// no route match, so 404. In a real app you might render a custom
			// 404 view here
			res.sendStatus(404);
		}
	});
});

var server = _http2.default.createServer(app);

server.listen(3003);

server.on('listening', function () {
	console.log('listening on 3003');
});