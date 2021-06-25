// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// // export const fetchFavorites = createAsyncThunk(
// //     'posts/fetchFavorites',
// //     async () => {
// //         //using await instead of then (async events)
// //         const response = await fetch("http://127.0.0.1:3000/resources/:id/favorites")
// //         const data = await response.json()
// //         return data
// //     }
// // )

// // export const createFavorites = createAsyncThunk(
// //     'posts/createFavorites',
// //     async () => {
// //         const response = await fetch("http://127.0.0.1:3000/favorites",
// //             {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type":"application/json"
                    
// //                 },
// //                 body: JSON.stringify()
// //             })
// //         const data = await response.json()
// //         return data
// //     }
// // )

// const favoriteSlice = createSlice({
//     name: 'favorites',
//     initialState: {
//         all: [],
//        loading: false,
//     },

//     reducers: {
//         startLoading(state, action) {
//             state.loading = true
//         },
//         endLoading(state, action){
//             state.loading = false
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchFavorites.fulfilled, (state, action) => { 
//             state.all = action.payload 
//         })
//         .addCase(createFavorites.fulfilled, (state, action) => {
//             state.all.push(action.payload)
//         })
//     }

// })

// console.log(favoriteSlice)
// export  const {startLoading, endLoading} = favoriteSlice.actions
// export default favoriteSlice.reducer