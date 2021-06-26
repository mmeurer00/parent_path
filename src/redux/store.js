import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postSlice'
//import { favoritePostsReducer } from './postSlice'
import resourcesReducer from './resourceSlice'
// import { favoriteResourcesReducer } from './resourceSlice'
import favoritesReducer from './favoriteSlice'



console.log(postsReducer)
const store = configureStore({
  reducer: {
    posts: postsReducer,
    resources: resourcesReducer,
    favorites: favoritesReducer
  }
  // resources: resourcesReducer
})

export default store