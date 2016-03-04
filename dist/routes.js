'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.routes = undefined;

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _index = require('./components/index');

var _index2 = _interopRequireDefault(_index);

var _about = require('./components/about');

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = {
	path: '',
	component: _app2.default,
	childRoutes: [{
		path: '/',
		component: _index2.default
	}, {
		path: '/about',
		component: _about2.default
	}]
};

exports.routes = routes;