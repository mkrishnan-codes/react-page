import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import { Grid } from '@material-ui/core';
import InfiniteScroller from '../InfiniteScroller/InfiniteScroller';
import { loadMore } from '../../store/reducer';


export const Items = () => {
    // const classes = useStyles();
    const { data: games, limit } = useSelector((state) => state);
    const dispatch = useDispatch();
    const onBottom = () => {
        dispatch(loadMore())
    }
    return (
        <InfiniteScroller
            onBottomReach={onBottom}
            hasMore={true}>
            <Grid container spacing={3} id="items-grid">
                {
                    games && games.map((game, index) => index < limit && <Item
                        key={index}
                        {...game} />)
                }
            </Grid>
        </InfiniteScroller>

    );
}
