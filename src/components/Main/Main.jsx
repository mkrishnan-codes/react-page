/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';

export const Main = (props) => {
	const [open, setopen] = useState(false);
	const toggle = () => {
		setopen(!open)
	}
	return (<>
		<Header open={open} onClick={toggle} >
		</Header>
		<Sidebar open={open} onClose={toggle} />
	</>
	)
}

