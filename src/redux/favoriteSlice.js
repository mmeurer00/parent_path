import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchFavorites = createAsyncThunk(
    'favorites/fetchFavorites',
    async () => {
        //using await instead of then (async events)
        const response = await fetch("http://127.0.0.1:3000/users/1/favorites")
        const data = await response.json()
        return data
    }
)

export const createFavoriteResources = createAsyncThunk(
    'favorites/createFavoriteResources',
    async (resource) => {
        const response = await fetch(`http://127.0.0.1:3000/users/1/favorites`,
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({favorite: {user_id: 1, resource_id: resource.id}})
            })
        const data = await response.json()
        return data
    }
)

export const createFavoritePosts = createAsyncThunk(
    'favorites/createFavoritePosts',
    async (post) => {
        const response = await fetch(`http://127.0.0.1:3000/users/1/favorites`,
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({favorite: {user_id: 1, post_id: post.id}})
            })
        const data = await response.json()
        return data
    }
)

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        all: [],
       loading: false,
    },

    reducers: {
        startLoading(state, action) {
            state.loading = true
        },
        endLoading(state, action){
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFavorites.fulfilled, (state, action) => { 
            state.all = action.payload
        })
        .addCase(createFavoriteResources.fulfilled, (state, action) => {
            state.all.push(action.payload)
        
        })
        .addCase(createFavoritePosts.fulfilled, (state, action) => {
            state.all.push(action.payload)
        })
    }

})

console.log(favoriteSlice)
export  const {startLoading, endLoading} = favoriteSlice.actions
export default favoriteSlice.reducer