import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const formalsAdapter = createEntityAdapter({
  selectId: (lesson) => lesson.id,
  sortComparer: (a, b) => a.id.toString().localeCompare(b.id.toString()),
});

const initialState = formalsAdapter.getInitialState();

export const formalSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFormal: builder.query({
      query: () => "/formal",
      providesTags: (result, error, arg) => [{ type: "Formals", id: "LIST" }],
    }),
    addFormal: builder.mutation({
      query: (lesson) => ({
        url: "/formal",
        method: "POST",
        body: lesson,
      }),
      invalidatesTags: ["Formals"],
    }),
    updateFormal: builder.mutation({
      query: (lesson) => ({
        url: `/formal/${lesson.id}`,
        method: "PUT",
        body: lesson,
      }),
      invalidatesTags: ["Formals"],
    }),
    deleteFormal: builder.mutation({
      query: (lessonId) => ({
        url: `/formal/${lessonId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Formals"],
    }),
  }),
});

export const {
  useGetFormalQuery,
  useAddFormalMutation,
  useUpdateFormalMutation,
  useDeleteFormalMutation,
} = formalSlice;

export const selectLessonsResult = formalSlice.endpoints.getFormal.select();

const selectLessonsData = createSelector(
  selectLessonsResult,
  (result) => result.data
);

export const { selectAll: selectAllLessons, selectById: selectAllLessonsById } =
  formalsAdapter.getSelectors(
    (state) => selectLessonsData(state) ?? initialState
  );
