import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
	let location = useLocation();
	return (
		<div>
			<h3>
				Page not found<code>{location.pathname}</code>
			</h3>
		</div>
	);
}

export default NotFound;
