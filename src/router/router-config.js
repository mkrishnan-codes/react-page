import { Login } from "../components/Login/Login";
import NotFound from "../components/404/NotFound";
import { Home } from "../components/Home/Home";
import { Mock } from "../components/Mock/Mock";
import MockInit from "../components/Mock/MockInit";

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
		path: "/mock",
		exact: true,
		component: MockInit
	},
	{
		path: "/mock-downloader",
		exact: true,
		component: Mock
	},
	{
		path: '*',
		component: NotFound
	}
];