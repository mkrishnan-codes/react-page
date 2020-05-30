import { Login } from "../components/Login/Login";
import NotFound from "../components/404/NotFound";
import { Home } from "../components/Home/Home";

export const routes = [
	{
		path: "/",
		exact: true,
		component: Login
	},
	{
		path: "/home",
		inner: true,
		component: Home,
		//   routes: [
		// 	{
		// 	  path: "/tacos/bus",
		// 	  component: Bus
		// 	},
		// 	{
		// 	  path: "/tacos/cart",
		// 	  component: Cart
		// 	}
		//   ]
	},
	{
		path: '*',
		component: NotFound
	}
];