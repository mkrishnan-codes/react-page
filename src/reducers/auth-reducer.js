import { createSlice, createAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'items',
	initialState: {
		loggedIn: false
	},
	reducers: {
		signInSuccess: (action, state) => {
			state.loggedIn = true;
			return state
		}

	}
})

const { actions, reducer } = authSlice
export const SignIn = createAction('SIGNIN');
export const { signInSuccess } = actions
export default reducer