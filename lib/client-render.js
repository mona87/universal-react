import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';

import { routes } from './routes';

import createBrowserHistory from 'history/lib/createBrowserHistory';

render (
	<Router routes = {routes} history={createBrowserHistory()} />,
		document.getElementById('app')
)