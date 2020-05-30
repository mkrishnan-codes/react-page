/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.scss';
export const Sidebar = (props) => {
	return props.open && (
		<div id="mySidenav" className="sidenav">
			<a className="closebtn" onClick={props.onClose}>&times;</a>
			<a href="#about">About</a>
			<a href="#services">Services</a>
			<a href="#clients">Clients</a>
			<a href="#contacts">Contact</a>
		</div>
	)
}

