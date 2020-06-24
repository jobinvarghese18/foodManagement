import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import pgReducer from '../reducers/pgReducer'
import userReducer from '../reducers/userReducer'
import pgsReducer from '../reducers/PgsReducer'
const configureStore = ()=>{
    const store = createStore(combineReducers({
       user:userReducer,
       pg:pgReducer,
       pgs:pgsReducer
    }),applyMiddleware(thunk))
    return store
}

export default  configureStore