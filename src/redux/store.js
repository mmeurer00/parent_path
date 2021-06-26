import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postSlice'
import { favoritePostsReducer } from './postSlice'
import resourcesReducer from './resourceSlice'
import { favoriteResourcesReducer } from './resourceSlice'


console.log(postsReducer)
const store = configureStore({
  reducer: {
    posts: postsReducer,
    favoritePosts: favoritePostsReducer,
    resources: resourcesReducer,
    favoriteResources: favoriteResourcesReducer
  }
  // resources: resourcesReducer
})

export default store