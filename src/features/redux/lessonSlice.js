import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const lessonAdapter = createEntityAdapter({
  selectId: (lesson) => lesson.id,
  sortComparer: (a, b) => a.id.toString().localeCompare(b.id.toString()),
});

const initialState = lessonAdapter.getInitialState();

export const lessonSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLessons: builder.query({
      query: () => "/lessons",
      providesTags: (result, error, arg) => [{ type: "Lessons", id: "LIST" }],
    }),
    addLessons: builder.mutation({
      query: (lesson) => ({
        url: "/lessons",
        method: "POST",
        body: lesson,
      }),
      invalidatesTags: ["Lessons"],
    }),
    updateLessons: builder.mutation({
      query: (lesson) => ({
        url: `/lessons/${lesson.id}`,
        method: "PUT",
        body: lesson,
      }),
      invalidatesTags: ["Lessons"],
    }),
    deleteLessons: builder.mutation({
      query: (lessonId) => ({
        url: `/lessons/${lessonId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Lessons"],
    }),
  }),
});

export const {
  useGetLessonsQuery,
  useAddLessonsMutation,
  useUpdateLessonsMutation,
  useDeleteLessonsMutation,
} = lessonSlice;

export const selectLessonsResult = lessonSlice.endpoints.getLessons.select();

const selectLessonsData = createSelector(
  selectLessonsResult,
  (result) => result.data
);

export const { selectAll: selectAllLessons, selectById: selectAllLessonsById } =
  lessonAdapter.getSelectors(
    (state) => selectLessonsData(state) ?? initialState
  );
