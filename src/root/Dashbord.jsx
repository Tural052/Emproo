import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './../features/main/Home';
import StudentPlans from '../features/main/StudentPlans';
import Form from '../features/main/Login';
import { routing } from '../globalRouting';
import { selectAllUsers } from '../features/redux/usersSlice';
import { useSelector } from 'react-redux';
import { selectAllTeachers } from '../features/redux/teachersSlice';
import { selectAllStudents } from '../features/redux/studentsSlice';
import { selectAllGroups } from '../features/redux/groupSlice';
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
      </Routes>

    </>
  )
}

export default Dashbord