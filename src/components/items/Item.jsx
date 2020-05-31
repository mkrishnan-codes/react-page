import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const Item = (props) => {
    const classes = useStyles();
    const search = useSelector((state) => state.search);
    // const title = props.title.toLowerCase();
    // const match = search ? title.search(search) > -1 : true;
    let match = true;
    if (props.s) {
        match = search ? props.s.search(search) > -1 : true;
    }
    return match && (
        <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.platform}
                    </Typography>
                    <Typography noWrap={true}  variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Score {props.score}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Year {props.release_year}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
Item.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    platform: PropTypes.string,
    score: PropTypes.number,
    genre: PropTypes.string,
    editors_choice: PropTypes.string,
    release_year: PropTypes.number
}
export default Item;