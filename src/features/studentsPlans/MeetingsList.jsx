import React from 'react'
import PageHelper from './PageHelper'
import { useParams } from "react-router-dom";
import { selectAllTeachers } from '../redux/teachersSlice';
import { useSelector } from 'react-redux';



const MeetingsList = ({ selectGroup, selectUser }) => {
    const { id } = useParams();
    const allTeachers = useSelector(selectAllTeachers)
    let selectLesson =
        selectGroup && selectGroup.fenler.find((item) => item.id.toString() === id);

    let teachersName = selectLesson && selectLesson.teacher.split(' ')
    let selectTeacher = allTeachers.find((item) => teachersName && item.name === teachersName[1] && item.surname === teachersName[0])
    let allLessons = selectTeacher && selectGroup && selectTeacher.qrups.find((item) => item.qrup === selectGroup.qrup).lesson
    let arr = allLessons && allLessons.map((item) => {
        return { ...item, date: new Date(item.date) }
    })

   

    let sortAllLessons = arr && arr.slice().sort((a, b) => Number(a.date) - Number(b.date))
    const renderedPost = sortAllLessons && sortAllLessons.map((item) => (

        <div className='meetingsList__item'>
            <p>
                <span>{item.type}</span>
                <span className='span'>{
                    JSON.stringify(item.date).split('T')[0].split('"')[1]
                }</span>
                {item.name}
            </p>
        </div>
    )
    )

    return (
        <div>
            <PageHelper selectGroup={selectGroup} selectUser={selectUser} />
            <div className='meetingsList'>{renderedPost}</div>
        </div>
    )
}

export default MeetingsList