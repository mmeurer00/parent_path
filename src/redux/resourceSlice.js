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

export  const {startLoading, endLoading} = resourceSlice.actions
export default resourceSlice.reducer