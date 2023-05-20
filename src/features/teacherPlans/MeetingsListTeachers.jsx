
import React from "react";
import { Link } from "react-router-dom";
import {useGetFormalQuery} from "../redux/formalSlice"
import Pagination from "../../companent/Pagination";
import AddCompanent from "./../helper/addCompanent/AddCompanent";

const MeetingsListTeachers = ({ userJob}) => {
  const location = window.location
  const navigate = location.pathname.split('/').slice(0, -1).join('/');
  const {
    data: lessons,
} = useGetFormalQuery()
  return (
    <>
      <div className="link_box">
        <Link to={`${navigate}/list`}>Aktivlik</Link>
        <Link to={`${navigate}/imtahna`}>Imtahan</Link>
        <Link to={`${navigate}/labarotorlya`}>Labarotorya iş</Link>
        <Link to={`${navigate}/serbest`}>Sərbəst iş</Link>
        <Link to={`${navigate}/kollokvium`}>Kollokvium</Link>
      </div>
      <AddCompanent user={userJob}/>
    </>
  );
};

export default MeetingsListTeachers;
