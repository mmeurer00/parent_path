import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchResources = createAsyncThunk(
    'resources/fetchResources',
    async () => {
        //using await instead of then (async events)
        const response = await fetch("http://127.0.0.1:3000/resources")
        const data = await response.json()
        return data
    }
)

const resourceSlice = createSlice({
    name: 'resources',
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
        builder.addCase(fetchResources.fulfilled, (state, action) => { 
            state.all = action.payload 
        })
    }

})

export const fetchFavoriteResources = createAsyncThunk(
    'favoriteResourcse/fetchFavoriteResources',
    async () => {
        //using await instead of then (async events)
        const response = await fetch(`http://127.0.0.1:3000/users/1/favorites`)
        const data = await response.json()
        return data
    }
)

export const createFavoriteResources = createAsyncThunk(
    'favoriteResources/createFavoriteResources',
    async (resource) => {
        const response = await fetch(`http://127.0.0.1:3000/users/1/favorites`,
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({favorite: {user_id: 1, resources_id: resource.id}})
            })
        const data = await response.json()
        return data
    }
)

export const favoriteResourceSlice = createSlice({
    name: 'favoriteResources',
    initialState: {
        favoriteResources: [],
       loading: false,
    },

    reducers: {
        startLoadingFavorites(state, action) {
            state.loading = true
        },
        endLoadingFavorites(state, action){
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFavoriteResources.fulfilled, (state, action) => { 
            state.favoriteResources = action.payload 
        })
        .addCase(createFavoriteResources.fulfilled, (state, action) => {
            state.favoriteResources.push(action.payload)
        })
    }
})


console.log(resourceSlice)
export  const {startLoading, endLoading} = resourceSlice.actions
export default resourceSlice.reducer
export  const {startLoadingFavorites, endLoadingFavorites} = favoriteResourceSlice.actions
export const favoriteResourcesReducer = favoriteResourceSlice.reducer