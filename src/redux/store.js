import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postSlice'
import { favoriteReducer } from './postSlice'


console.log(postsReducer)
const store = configureStore({
  reducer: {
    posts: postsReducer,
    favorites: favoriteReducer
  }
  // resources: resourcesReducer
})

export default store