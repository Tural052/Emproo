import React from "react";

import { useParams } from "react-router-dom";
import { selectAllTeachers } from "../redux/teachersSlice";
import { useSelector } from "react-redux";
import Pagination from "../../companent/Pagination";

const MeetingsListStudenst = ({ selectGroup, selectUser }) => {
  const { id } = useParams();
  const allTeachers = useSelector(selectAllTeachers);
  let selectLesson =
    selectGroup && selectGroup.fenler.find((item) => item.id.toString() === id);

  let teachersName = selectLesson && selectLesson.teacher.split(" ");
  let selectTeacher = allTeachers.find(
    (item) =>
      teachersName &&
      item.name === teachersName[1] &&
      item.surname === teachersName[0]
  );
  let allLessons =
    selectTeacher &&
    selectGroup &&
    selectTeacher.qrups.find((item) => item.qrup === selectGroup.qrup).lesson;
  let arr =
    allLessons &&
    allLessons.map((item) => {
      return { ...item, date: new Date(item.date) };
    });

  let sortAllLessons =
    arr && arr.slice().sort((a, b) => Number(a.date) - Number(b.date));




  return (
    <div>
  
      {/* <div className="meetingsList">{renderedPost}</div> */}
      <Pagination  data={sortAllLessons} itemsPerPage={5}/>
    </div>
  );
};

export default MeetingsListStudenst;
