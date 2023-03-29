import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";



const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    reducers: {
        addComment(state, {payload: {id, body, name}}){
            const idx = state.data.findIndex(post => post.id === id)
            state.data[idx].comments.push({
                id: new Date().getTime.toString(),
                body, name
            })
        }
    },
    adddNewPost(state, {payload}){
        state.data.unshift({
            ...payload
        })
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isLoading = true
            state.isError = false
        },
        [fetchPosts.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.isError = false
            state.data = [...payload]
        },
        [fetchPosts.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        }
    }
})

export const selectPosts = state => state.posts

export const {addComment, adddNewPost} = postsSlice.actions

export const postsReducer = postsSlice.reducer