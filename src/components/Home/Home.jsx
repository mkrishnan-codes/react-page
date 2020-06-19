import React, { useEffect } from 'react';
import { Items } from '../items/Items';
import { useDispatch } from 'react-redux';
import { getItems } from '../../reducers/items-reducer';

export const Home = () => {
    const dispatch = useDispatch();
    // const field = useSelector((state) => state.sortField);
    // const searchTxt = useSelector((state) => state.search);
    // useEffect(() => {
    //     async function initDataCall() {
    //         const data = await GET({ limit: 10 });
    //         if (data) {
    //             dispatch(fillGames(data));
    //             dispatch(loadMore());
    //             dispatch(sort(field));
    //         }
    //     }
    //     initDataCall();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    useEffect(() => {
        dispatch(getItems())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Items />
    );
}

