import React from 'react';
import { InputBase, makeStyles, fade, Popover, Typography, ClickAwayListener } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},

	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	typography: {
		padding: theme.spacing(2),
	},
}));


const SearchBox = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const id = open ? 'srch-popover' : undefined;
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<ClickAwayListener onClickAway={handleClose}>
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>
				<InputBase
					placeholder="Search…"
					onFocus={handleClick}

					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ 'aria-label': 'search' }}
				/>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
				>
					<Typography className={classes.typography}>The content of the Popover.</Typography>
				</Popover>
			</div>
		</ClickAwayListener>
	);
}

export default SearchBox;
