import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postSlice'
import { favoriteReducer } from './postSlice'
import resourcesReducer from './resourceSlice'


console.log(postsReducer)
const store = configureStore({
  reducer: {
    posts: postsReducer,
    favorites: favoriteReducer,
    resources: resourcesReducer
  }
  // resources: resourcesReducer
})

export default store