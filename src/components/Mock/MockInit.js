import React from 'react';
import { Link } from 'react-router-dom';

const MockInit = () => {
	return (
		<div>
			<Link to="/mock-downloader">
				<button id="btn-navigate">navigate</button>
			</Link>
		</div>
	);
}

export default MockInit;
