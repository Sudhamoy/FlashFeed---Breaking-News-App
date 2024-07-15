import {createStore , applyMiddleware} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import newsReducer from '../reducers/news'
import {thunk} from 'redux-thunk'


const store=createStore(newsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store



/*
If we are not using redux devtools:
const store=createStore(newsReducer, (applyMiddleware(thunk))
*/