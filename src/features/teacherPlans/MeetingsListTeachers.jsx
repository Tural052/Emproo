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
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetLessonsQuery,
} from "../redux/lessonSlice";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useAddFormalMutation, useGetFormalQuery } from "../redux/formalSlice";
import Pagination from "../../companent/Pagination";
const MeetingsListTeachers = ({ selectGroup, selectUser }) => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const { id } = useParams();
  const [addNewLesson, { isLoading }] = useAddFormalMutation();
  const optionType = [
    { value: "M", text: "Muhazirə" },
    { value: "S", text: "Seminar" },
    { value: "L", text: "Lab" },
  ];

  const location=window.location
  const navigate = location.pathname.split('/').slice(0, -1).join('/');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: lesson } = useGetLessonsQuery();
  const selectLessons = lesson && lesson.find((item) => item.name === id);
  const renderedLessons =
    lesson &&
    selectLessons.data.map((item) => {
      return <option>{item.name}</option>;
    });

    const {
      data:lessons,
    } = useGetFormalQuery()
    console.log(lessons)    
  
  let canSave = [date, name, type].every(Boolean);
  const handleClick = async (e) => {
    if(canSave){
      try{
        await addNewLesson({
          id: nanoid(),
          name: name,
          type: type,
          date: date,
        });
        onClose();
      }
      catch(err){
        console.log(err)
      }
    }
    // console.log(lesson)
    e.preventDefault();
  };
  return (
    <>
     
      <Modal closeOnOverLayClcik={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mövzu əlavə et</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Select
              placeholder="Select Type"
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              {optionType.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </Select>
            <Select
              placeholder="Select option"
              onChange={(e) => {
                setName(e.target.value);
              }}
            >
              {renderedLessons}
            </Select>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              onChange={(e) => {
                setDate(e.target.value);
                console.log(date);
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              İmtina et
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Əlavə et
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="link_box">
        <Link to={`${navigate}/list`}>Aktivlik</Link>
        <Link to={`${navigate}/imtahna`}>Imtahan</Link>
        <Link to={`${navigate}/labarotorlya`}>Labarotorya iş</Link>
        <Link to={`${navigate}/sərbəst`}>Sərbəst iş</Link>
        <Link to={`${navigate}/kollokvium`}>Kollokvium</Link>
      </div>
      <Button onClick={onOpen}>Mövzu əlavə et</Button>
      <Pagination data={lessons} itemsPerPage={5}/>
    </>
  );
};

export default MeetingsListTeachers;
