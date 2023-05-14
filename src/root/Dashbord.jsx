import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './../features/main/Home';
import StudentPlans from '../features/studentsPlans/StudentPlans';
import Form from '../features/main/Login';
import { routing } from '../globalRouting';
import { selectAllUsers } from '../features/redux/usersSlice';
import { useSelector } from 'react-redux';
import { selectAllTeachers } from '../features/redux/teachersSlice';
import { selectAllStudents } from '../features/redux/studentsSlice';
import { selectAllGroups } from '../features/redux/groupSlice';

import Overview from '../features/studentsPlans/Overview';
import MeetingsList from '../features/main/MeetingsList';
import DiscussionList from '../features/studentsPlans/DiscussionList';
import Imtahan from '../features/main/Imtahan';
import Lab from '../features/main/Lab';
import Serbest from '../features/main/Serbest';
import Kol from '../features/main/Kol';
const Dashbord = () => {
  const user = localStorage.getItem('user') || ''
  const allUser = useSelector(selectAllUsers)
  const allTeacher = useSelector(selectAllTeachers)
  const allStudent = useSelector(selectAllStudents)
  const allGroup = useSelector(selectAllGroups);
  let selectUser = allUser.find((item) => item.email === user)
  let userJob = selectUser && selectUser.job;
  let userAllData = user && userJob === 'teacher' ? {
    ...allTeacher.find((item) => item.email === user)
  } : {
    ...allStudent.find((item) => item.email === user),
    ...allGroup.find((item) => item.group === user.group)
  }

  let selectGroup = allGroup.find((item) => item.group === userAllData.group)
  

  const navigate = useNavigate()
  useEffect(() => {
    if (user === '') {
      routing.to(navigate, '/login')
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path='/login' element={<Form />} />
        <Route path='/' element={<Home selectUser={userAllData} />} />
        <Route path='/studenPlans' element={<StudentPlans selectUser={userAllData} />} />
        <Route path='/fenler/:id/overview' element={<Overview selectUser={userAllData} selectGroup={selectGroup} />} />
        <Route path='/fenler/:id/meetings/list' element={<MeetingsList userJob={userJob} selectUser={selectUser} selectGroup={selectGroup} />} />
        <Route path='/fenler/:id/discussion/list' element={<DiscussionList selectUser={selectUser} selectGroup={selectGroup} />} />
        <Route path='/qrups/:id/overview' element={<Overview selectUser={userAllData} selectGroup={selectGroup} />} />     
        <Route path='/fenler/:id/meetings/imtahna' element={<Imtahan/>} />  
        <Route path='/fenler/:id/meetings/labarotorlya' element={<Lab/>} />  
        <Route path='/fenler/:id/meetings/sərbəst' element={<Serbest/>} />  
        <Route path='/fenler/:id/meetings/kollokvium' element={<Kol/>} />  
      </Routes>

    </>
  )
}

export default Dashbord