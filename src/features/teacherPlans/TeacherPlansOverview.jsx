import React from 'react'
import { useGetLessonsQuery } from '../redux/lessonSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllLessons } from '../redux/lessonSlice'
import { useNavigate, useParams } from 'react-router-dom'
import Overview from '../studentsPlans/Overview'
const TeacherPlansOverview = ({selectUser}) => {
  const { data: lessons, isLoading } = useGetLessonsQuery()
  let lesson = useSelector(selectAllLessons)
  let location = useParams()
  let selectLesson = lesson.find((item) => item.name === location.id)

  if (isLoading) return <div>Loading...</div>
  else{
    // lesson.map((item) => console.log(item))
    console.log(selectLesson)
  }
  return (
    <div>
        {/* <Overview/> */}
    </div>
  )
}

export default TeacherPlansOverview