import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const groupAdapter = createEntityAdapter({
  selectId: (group) => group.id,
  sortComparer: (a, b) => a.id.toString().localeCompare(b.id.toString()),
});

const initialState = groupAdapter.getInitialState();

export const groupsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getgroups: builder.query({
      query: () => "/groups",
      transformResponse: (responsData) => {
        return groupAdapter.setAll(initialState, responsData);
      },
      transformErrorResponse: (responsData) => {
        console.log(responsData);
      },
      providesTags: (result, error, arg) => [{ type: "groups", id: "LIST" }],
    }),
  }),
});

export const { useGetGroupQuery } = groupsSlice;

export const selectGroupResult =
  groupsSlice.endpoints.getgroups.select();

const selectGroupData = createSelector(
  selectGroupResult,
  (result) => result.data
);

export const {
  selectAll: selectAllGroups,
  selectById: selectAllGroupsById,
} = groupAdapter.getSelectors(
  (state) => selectGroupData(state) ?? initialState
);
