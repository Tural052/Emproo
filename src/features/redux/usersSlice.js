import { createEntityAdapter,createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const userAdapter = createEntityAdapter({
    selectId:(user) => user.id,
    sortComparer:(a,b) => a.id.toString().localeCompare(b.id.toString())
});

const initialState = userAdapter.getInitialState();

export const usersSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getUsers:builder.query({
            query:() => "/users",
            transformResponse:(responsData) => {
                return userAdapter.setAll(initialState,responsData);
            },
            transformErrorResponse:(responsData) => {
                console.log(responsData);
            }
        })
    })
});

export const { useGetUsersQuery } = usersSlice;

export const selectUsersResult = usersSlice.endpoints.getUsers.select();

const selectUsersData = createSelector(
    selectUsersResult,
    (result) => result.data
);

export const {
    selectAll:selectAllUsers,
    selectById:selectAllUsersById
} = userAdapter.getSelectors(
    (state) => selectUsersData(state) ?? initialState
);

