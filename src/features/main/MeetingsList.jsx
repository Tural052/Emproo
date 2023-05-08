import React from "react";
import PageHelper from "./PageHelper";
import MeetingsListTeachers from "../teacherPlans/MeetingsListTeachers";
import MeetingsListStudenst from "../studentsPlans/MeetingsListStudenst";

const MeetingsList = ({ selectGroup, selectUser, userJob }) => {
  console.log(userJob)
  return (
    <div>
      <PageHelper selectGroup={selectGroup} selectUser={selectUser} />
      {userJob === "teacher" ? (
        <MeetingsListTeachers
          selectGroup={selectGroup}
          selectUser={selectUser}
        />
      ) : (
        <MeetingsListStudenst
          selectGroup={selectGroup}
          selectUser={selectUser}
        />
      )}
    </div>
  );
};

export default MeetingsList;
