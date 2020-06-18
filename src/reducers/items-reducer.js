import { createSlice, createAction } from '@reduxjs/toolkit';
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
		pageSize: 100, limit: 100, indexed: false,
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
		},
		sort(state, action) {
			sortData(state, action.payload)
		},
		sortOrder(state) {
			state.order = (state.order === 'asc') ? 'desc' : 'asc';
			sortData(state, state.sortField)
		},
		getItemsSuccess(state, action) {
			state.data = action.payload;
			state.data.map((game, i) => state.data[i].s = game.title.toString().toLowerCase())

		},
		getSearchResultSuccess(state, action) {
			console.log(state, action);
			state.suggest = action.payload;
		}

	}
})

const { actions, reducer } = postsSlice;
export const getItems = createAction('GET_ITEMS');
export const searchRequest = createAction('SEARCH_REQUEST')
export const { fillGames, loadMore, search, sort, sortOrder, getItemsSuccess, getSearchResultSuccess } = actions
export default reducer