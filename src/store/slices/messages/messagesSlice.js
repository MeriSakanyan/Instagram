import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        activeUserId: '',
        allMessages: [],
        currentDialog: [],
    },
     reducers: {
        toggleActiveUser(state, {payload: {userId, currentUserId}}){
            state.activeUserId = userId
            state.currentDialog = [
                ...state.allMessages.filter(message => (message.fromId === userId && message.toId === currentUserId)|| 
                                                            (message.fromId === currentUserId && message.toId === userId))
            ]
        },
        removeActiveUser(state){
           state.activeUserId = ''
           state.currentDialog = []
        },
        addMessage(state, {payload}){
            const message = {
                id: new Date().getTime().toString(),
                ...payload
            }
            state.allMessages.push({...message})
            state.currentDialog.push({...message})
        }
     }
})

export const selectMessages = state => state.messages

export const {toggleActiveUser, addMessage, removeActiveUser} = messagesSlice.actions

export const messagesReducer = messagesSlice.reducer