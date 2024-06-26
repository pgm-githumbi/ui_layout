import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import NavbarSlice from "./redux/ui/NavbarSlice";

const rootReducer = combineReducers({
  navbar: NavbarSlice,
});

const store = configureStore({
  reducer: { navbar: NavbarSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
