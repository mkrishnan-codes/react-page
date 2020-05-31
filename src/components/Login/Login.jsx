import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import User from '@material-ui/icons/AccountCircleOutlined';
import Grid from '@material-ui/core/Grid';
import { Container, CssBaseline, Button, TextField, Card, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	paper: {
		flexDirection: 'column',
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	root: {
		height: '100vh'
	},
	formGrp: {
		padding: theme.spacing(1),
	},
	formGrpItem: {
		width: '100%',
		padding: theme.spacing(1)
	}
}));

export const Login = (props) => {
	const classes = useStyles();
	let history = useHistory();
	return (
		<>
			<CssBaseline />
			<Container >
				<Grid className={classes.root} container justify="center" alignItems="center">
					<Grid item xs={12} sm={6} md={6} lg={6}>
						<Card className={classes.paper}>
							<Box className={classes.formGrp}>
								<Box className={classes.formGrpItem}>
									<TextField fullWidth id="outlined-basic" label="Username" variant="outlined" />
								</Box>
								<Box className={classes.formGrpItem}>
									<TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
								</Box>
								<Box className={classes.formGrpItem}>

									<Button
										variant="contained"
										color="primary"
										size="large"
										className={classes.button}
										startIcon={<User />}
										onClick={() => history.push('/home')}
									>
										Login
      							</Button>
								</Box>
							</Box>

						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
