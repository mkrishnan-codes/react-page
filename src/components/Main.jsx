/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Main = (props) => {
	return (
		<div id="main" className={props.open ? 'open' : ''}>
			<span className="spn" onClick={props.onClick}>&#9776;</span>
		</div>

	)
}

