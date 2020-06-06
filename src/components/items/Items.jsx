import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import { Grid } from '@material-ui/core';
import InfiniteScroller from '../InfiniteScroller/InfiniteScroller';
import { loadMore } from '../../reducers/items-reducer';


export const Items = () => {
    const { data, limit } = useSelector((state) => state.items);
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
                    data && data.map((item, index) => index < limit && <Item
                        key={index}
                        {...item} />)
                }
            </Grid>
        </InfiniteScroller>

    );
}
