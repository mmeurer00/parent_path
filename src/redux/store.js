import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postSlice'
console.log(postsReducer)
const store = configureStore({
  reducer: {
    posts: postsReducer
  }
  // resources: resourcesReducer
})

export default store