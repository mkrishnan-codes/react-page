import items from './items-reducer'
import auth from './auth-reducer'
import { combineReducers } from '@reduxjs/toolkit'
export const rootReducer = combineReducers({ items,auth });

