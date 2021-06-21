import { combineReducers } from 'redux'
import favoritesReducer from './favoritesReducer'

const reducers = combineReducers({
    //key value pair
    favorites: favoritesReducer
})
export default reducers