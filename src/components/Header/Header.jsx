import React from 'react';
import './style.scss'
export const Header = (props) => {
	return (
		<header className="top-bar">
			<div id="main" className={props.open ? 'open' : ''}>
				<span className="spn" onClick={props.onClick}>
					<i className="material-icons">menu</i>
				</span>
			</div>
			{props.children}
		</header>
	)
}