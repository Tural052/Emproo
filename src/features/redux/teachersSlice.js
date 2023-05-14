import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const teacherAdapter = createEntityAdapter({
  selectId: (teacher) => teacher.id,
  sortComparer: (a, b) => a.id.toString().localeCompare(b.id.toString()),
});

const initialState = teacherAdapter.getInitialState();

export const teachersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => "/teachers",
      transformResponse: (responsData) => {
        return teacherAdapter.setAll(initialState, responsData);
      },
      transformErrorResponse: (responsData) => {
        console.log(responsData);
      },
      providesTags: (result, error, arg) => [{ type: "Teachers", id: "LIST" }],
    }),
    addTeacherLessons: builder.mutation({
      query:initialState => ({
        url:"/teachers",
        method:"POST",
        body:initialState
      })
    }),
    updateTeacherLessons: builder.mutation({
      query: (teacher) => ({
        url: `/teachers/${teacher.id}`,
        method: "PUT",
        body: teacher,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Teachers", id: arg.id }],
    }),
  }),
});

export const { useGetTeachersQuery,useAddTeacherLessonsMutation,useUpdateTeacherLessonsMutation } = teachersSlice;

export const selectTeachersResult =
  teachersSlice.endpoints.getTeachers.select();

const selectTeachersData = createSelector(
  selectTeachersResult,
  (result) => result.data
);

export const {
  selectAll: selectAllTeachers,
  selectById: selectAllTeachersById,
} = teacherAdapter.getSelectors(
  (state) => selectTeachersData(state) ?? initialState
);



