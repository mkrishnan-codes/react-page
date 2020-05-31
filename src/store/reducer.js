import { createSlice } from '@reduxjs/toolkit';
const sortData = (state, field) => {
    state.sortField = field;
    if (state.data.length > 0) {
        const order = state.order === 'asc' ? 1 : -1;
        state.data.sort((a, b) => {
            if (a[field] < b[field]) { return -order; }
            if (a[field] > b[field]) { return order; }
            return 0;
        })
    }
}
const postsSlice = createSlice({
    name: 'items',
    initialState: {
        data: [],
        wholedata: [],
        pageSize: 100, limit: 0, indexed: false,
        order: 'asc',
        sortField: 'platform',
        search: '',
        suggest: []
    },
    reducers: {
        fillGames(state, action) {
            state.data = action.payload;
            state.data.map((game, i) => state.data[i].s = game.title.toString().toLowerCase())
        },
        loadMore(state) {
            state.limit = state.limit + state.pageSize;
        },
        search(state, action) {
            state.search = action.payload;
            if (action.payload > 2) {
                state.pageSize = state.data.length
                // let iter = 0;
                // state.data.map((game, i) => {
                //     if (iter < 10) {
                //         const flag = game.s && game.s.search();
                //         if (flag) {
                //             iter++;
                //         }
                //         return game.s && game.s.search(crit) > -1
                //     } else {
                //         return false
                //     }
                // })
                // state.data = state.wholedata.filter((game) => game.s.search(crit) > -1)
            }
        },
        sort(state, action) {
            sortData(state, action.payload)
        },
        sortOrder(state) {
            state.order = (state.order === 'asc') ? 'desc' : 'asc';
            sortData(state, state.sortField)
        }

    }
})

const { actions, reducer } = postsSlice
export const { fillGames, loadMore, search, sort, sortOrder } = actions
export default reducer