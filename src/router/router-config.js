import { Login } from "../components/Login/Login";
import { Main } from "../components/Main/Main";
import NotFound from "../components/404/NotFound";

export const routes = [
	{
		path: "/",
		exact: true,
		component: Login
	},
	{
		path: "/home",
		component: Main,
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