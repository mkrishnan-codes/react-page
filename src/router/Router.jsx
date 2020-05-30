import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from './router-config';
import AppLayout from '../components/AppLayout/AppLayout';
const RouteWithSubRoutes = (route) => {
	return (
		<AppLayout inner={route.inner}>
			<Route
				path={route.path}
				render={props => (
					// pass the sub-routes down to keep nesting
					<route.component {...props} routes={route.routes} />
				)}
			/>
		</AppLayout>
	);
}
export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		</BrowserRouter >
	);
}