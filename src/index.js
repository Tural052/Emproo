import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./root/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { studentsSlice } from "./features/redux/studentsSlice";
import { teachersSlice } from "./features/redux/teachersSlice";
import { usersSlice } from "./features/redux/usersSlice";
import { AuthProvider } from "./features/context/AuthProvider";
import { groupsSlice } from "./features/redux/groupSlice";
import { lessonSlice } from "./features/redux/lessonSlice";
import {formalSlice} from "./features/redux/formalSlice";

const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(teachersSlice.endpoints.getTeachers.initiate());
store.dispatch(studentsSlice.endpoints.getStudents.initiate());
store.dispatch(usersSlice.endpoints.getUsers.initiate());
store.dispatch(groupsSlice.endpoints.getgroups.initiate());
store.dispatch(lessonSlice.endpoints.getLessons.initiate());
store.dispatch(formalSlice.endpoints.getFormal.initiate())
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
