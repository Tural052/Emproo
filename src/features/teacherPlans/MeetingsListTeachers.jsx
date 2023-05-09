import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Select,
  Input
} from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetLessonsQuery } from '../redux/lessonSlice'
import { useAddTeacherLessonsMutation } from '../redux/teachersSlice'
import { useState } from 'react'

const MeetingsListTeachers = ({ selectGroup, selectUser }) => {
  const [date,setDate] = useState('')
  const [name,setName] = useState('')
  const [type,setType] = useState('')
  const optionType = [
    {value:"M",text:"Muhazirə"},
    {value:"S",text:"Seminar"},
    {value:"L",text:"Lab"}
  ]
  const handleChangeType = (e) => {
    
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { id } = useParams()
  const [addNewLessons,{isLoading}] = useAddTeacherLessonsMutation() 
  const { data: lesson } = useGetLessonsQuery()
  const selectLessons = lesson && lesson.find(item => item.name === id)
  const renderedLessons = lesson && selectLessons.data.map((item) => {
    return (
      <option>
        {item.name}
      </option>
    )
  })
  let canSave = [date,name,type].every(Boolean) 
  const handleClick = (e) =>{
    
    e.preventDefault()
  } 
  return (
    <>
      <Button onClick={onOpen}>Mövzu əlavə et</Button>
      <Modal closeOnOverLayClcik={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mövzu əlavə et</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Select placeholder='Select Type' onChange={(e) => {
              setType(e.target.value)
            }}>
              {optionType.map(option => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </Select>
            <Select placeholder='Select option' onChange={(e) => {
              setName(e.target.value)
            }}>
              {renderedLessons}
            </Select>
            <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                onChange={(e) => {
                  setDate(e.target.value)
                  console.log(date)}
                }
              />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>İmtina et</Button>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Əlavə et
            </Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </>
  )
}

export default MeetingsListTeachers