import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        //using await instead of then (async events)
        const response = await fetch("http://127.0.0.1:3000/posts")
        const data = await response.json()
        return data
    }
)

export const createPosts = createAsyncThunk(
    'posts/createPosts',
    async (formInput) => {
        const response = await fetch("http://127.0.0.1:3000/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                    
                },
                body: JSON.stringify(formInput)
            })
        const data = await response.json()
        return data
    }
)

// export const createFavoritePosts = createAsyncThunk(
//     'favoritePosts/createFavoritePosts',
//     async (post) => {
//         const response = await fetch(`http://127.0.0.1:3000/users/1/favorites`,
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type":"application/json"
//                 },
//                 body: JSON.stringify({favorite: {user_id: post.user_id, post_id: post.id}})
//             })
//         const data = await response.json()
//         return data
//     }
// )


const postSlice = createSlice({
    name: 'posts',
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
        builder.addCase(fetchPosts.fulfilled, (state, action) => { 
            state.all = action.payload 
        })
        .addCase(createPosts.fulfilled, (state, action) => {
            state.all.push(action.payload)
        })
    }

})

export  const {startLoading, endLoading} = postSlice.actions
export default postSlice.reducer 
