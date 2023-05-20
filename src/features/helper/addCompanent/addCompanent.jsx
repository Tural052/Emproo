import React from "react";
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
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
    useAddFormalMutation,
    useGetFormalQuery,
} from "../../redux/formalSlice";
import { useGetLessonsQuery } from "../../redux/lessonSlice";
import { useEffect } from "react";
import Pagination from "../../../companent/Pagination";
const AddCompanent = ({user}) => {
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const { id } = useParams();
    const location = window.location.pathname.split("/");
    const navigate = location[location.length - 1];
    const [addNewLesson, { isLoading }] = useAddFormalMutation();
    const optionType = [
        { value: "M", text: "Muhazirə" },
        { value: "S", text: "Seminar" },
        { value: "L", text: "Lab" },
    ];
    const lessonsType = () => {
        if (navigate === "list") {
            return "M";
        } else if (navigate === "imtahna") {
            return "I";
        } else if (navigate === "labarotorlya") {
            return "L";
        } else if (navigate === "serbest") {
            return "SI";
        } else if (navigate === "kollokvium") {
            return "K";
        }
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data: lesson } = useGetLessonsQuery();
    const selectLessons = lesson && lesson.find((item) => item.name === id);
    let bigData =
        lessonsType() === "M" ? selectLessons && selectLessons.data : null;
    useEffect(() => {
        navigate === "list" ? setType("") : setType(lessonsType());
    }, [navigate]);
    // const showData = 
    const renderedLessons =  lesson && bigData!==null
    ? bigData.map((item) => (
        <option key={item.id} value={item.id}>
            {item.name}
        </option>
    ))
    : lesson && selectLessons &&
    selectLessons.data.map((item) => {
        console.log(item.type === lessonsType());
        return item.type === lessonsType() ? (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ) : null;
    });
    const { data: lessons } = useGetFormalQuery();
    const showLessons = navigate !== "list" ? lessons && lessons.filter((item) => item.type === lessonsType()) :
        lessons && lessons.filter((item) => item.type === "M" || item.type === "S" || item.type === "L");
    let canSave = [date, name, type].every(Boolean);
    const handleClick = async (e) => {
        if (canSave) {
            try {
                await addNewLesson({
                    id: nanoid(),
                    name: name,
                    type: navigate === "list" ? type : lessonsType(),
                    date: date,
                });
                onClose();
            } catch (err) {
                console.log(err);
            }
        }
        // console.log(lesson)
        e.preventDefault();
    };
    return (
        <div>
            {user === 'teacher'? (
                <><Button onClick={onOpen}>Mövzu əlavə et</Button><Modal closeOnOverLayClcik={false} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Mövzu əlavə et</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            {navigate === "list" ? (
                                <Select
                                    placeholder="Select Type"
                                    onChange={(e) => {
                                        setType(e.target.value);
                                    } }
                                >
                                    {optionType.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.text}
                                        </option>
                                    ))}
                                </Select>
                            ) : null}
                            <Select
                                placeholder="Select option"
                                onChange={(e) => {
                                    console.log(e.target.options[e.target.selectedIndex].text);
                                    setName(e.target.options[e.target.selectedIndex].text);
                                } }
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
                                } } />
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
                </Modal></>
            ):(
                null
            )}
            <Pagination data={showLessons} itemsPerPage={5} />
        </div>
    );
};

export default AddCompanent;
