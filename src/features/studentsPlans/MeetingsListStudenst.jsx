import React from "react";

import { useParams } from "react-router-dom";
import { useGetFormalQuery } from "../redux/formalSlice";
import { useSelector } from "react-redux";
import Pagination from "../../companent/Pagination";

const MeetingsListStudenst = ({ selectGroup, selectUser }) => {
  const { id } = useParams();
  console.log(id)
  const {
    data:lessons,
    isLoading
  } = useGetFormalQuery()
  console.log(lessons)    


  return (
    <div>
  
      {/* <div className="meetingsList">{renderedPost}</div> */}
      <Pagination  data={lessons} itemsPerPage={5}/>
    </div>
  );
};

export default MeetingsListStudenst;
