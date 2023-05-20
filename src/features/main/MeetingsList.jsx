import React from "react";
import PageHelper from "./PageHelper";
import MeetingsListTeachers from "../teacherPlans/MeetingsListTeachers";
import MeetingsListStudenst from "../studentsPlans/MeetingsListStudenst";

const MeetingsList = ({ selectGroup, selectUser, userJob }) => {
  return (
    <div>
      <PageHelper selectGroup={selectGroup} selectUser={selectUser} />
      {userJob === "teacher" ? (
        <MeetingsListTeachers
          userJob={userJob}
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
