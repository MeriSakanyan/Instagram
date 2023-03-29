import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        toggleSearchText(state, {payload}){
            return payload
        },
        resetSearchText() {
            return ''
        }
    }
})


export const selectSearch = state => state.search

export const {resetSearchText, toggleSearchText} = searchSlice.actions

export const searchReducer = searchSlice.reducer