import React from "react";

import { Link, useParams } from "react-router-dom";
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


  const location = window.location
  const navigate = location.pathname.split('/').slice(0, -1).join('/');
  return (
    <div>
      <div className="link_box">
        <Link to={`${navigate}/list`}>Aktivlik</Link>
        <Link to={`${navigate}/imtahna`}>Imtahan</Link>
        <Link to={`${navigate}/labarotorlya`}>Labarotorya iş</Link>
        <Link to={`${navigate}/serbest`}>Sərbəst iş</Link>
        <Link to={`${navigate}/kollokvium`}>Kollokvium</Link>
      </div>
  
      {/* <div className="meetingsList">{renderedPost}</div> */}
      <Pagination  data={lessons} itemsPerPage={5}/>
    </div>
  );
};

export default MeetingsListStudenst;
