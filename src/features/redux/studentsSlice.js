import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const studentAdapter = createEntityAdapter({
  selectId: (student) => student.id,
  sortComparer: (a, b) => a.id.toString().localeCompare(b.id.toString()),
});

const initialState = studentAdapter.getInitialState();

export const studentsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/students",
      transformResponse: (responsData) => {
        return studentAdapter.setAll(initialState, responsData);
      },
      transformErrorResponse: (responsData) => {
        console.log(responsData);
      },
      providesTags: (result, error, arg) => [{ type: "Students", id: "LIST" }],
    }),
  }),
});

export const { useGetStudentQuery } = studentsSlice;

export const selectStudenstResult =
  studentsSlice.endpoints.getStudents.select();

const selectStudenstData = createSelector(
  selectStudenstResult,
  (result) => result.data
);

export const {
  selectAll: selectAllStudents,
  selectById: selectAllStudentsById,
} = studentAdapter.getSelectors(
  (state) => selectStudenstData(state) ?? initialState
);
