import React from 'react';
import { InputBase, makeStyles, fade, Popover, ClickAwayListener, ListItem, List, ListItemText } from '@material-ui/core';
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
	listRoot:{
		width: 220,
		backgroundColor: theme.palette.background.paper,
	}
}));


const SearchBox = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	let open = Boolean(anchorEl);
	const id = open ? 'srch-popover' : undefined;
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
		handleClose();
	};
	return (
		<ClickAwayListener onClickAway={handleClose}>
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>
				<InputBase
					onKeyPress={handleClick}
					placeholder="Search…"

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
					<div className={classes.listRoot}>

					{/* <Typography className={classes.typography}>The content of the Popover.</Typography> */}
					<List component="nav" aria-label="main mailbox folders">
						<ListItem
							button
							selected={selectedIndex === 0}
							onClick={(event) => handleListItemClick(event, 0)}
						>
							{/* <ListItemIcon>
								<InboxIcon />
							</ListItemIcon>*/}
							<ListItemText primary="Inbox" /> 
						</ListItem>
						<ListItem
							button
							selected={selectedIndex === 1}
							onClick={(event) => handleListItemClick(event, 1)}
						>
							<ListItemText primary="dfgdfg" /> 

						</ListItem>
					</List>
					</div>
				</Popover>
			</div>
		</ClickAwayListener>
	);
}

export default SearchBox;
