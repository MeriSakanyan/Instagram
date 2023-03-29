import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ignoreSpaceInSearch, searchLowerCase } from "./middlewares/search";
import { messagesReducer } from "./slices/messages/messagesSlice";
import { postsReducer } from "./slices/posts/postsSlice";
import { searchReducer } from "./slices/posts/search/searchSlice";
 import { usersReducer } from "./slices/posts/users/usersSlice";

import {
        persistStore,
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'ankrkneliInstagram',
    storage,
  }

  const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    search: searchReducer,
    messages: messagesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
  
    
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => {
            return [...getDefaultMiddleware({
                serializableCheck: {
                  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
              }), searchLowerCase, ignoreSpaceInSearch]
        }
})


export const persistor = persistStore(store)

export default store

 