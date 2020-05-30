import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from './router-config';
const RouteWithSubRoutes = (route) => {
	return (
		<Route
			path={route.path}
			render={props => (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes} />
			)}
		/>
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