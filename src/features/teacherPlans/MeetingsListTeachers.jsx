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
  Select
} from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

const MeetingsListTeachers = ({ selectGroup, selectUser }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { id } = useParams()
  let selectLesson =
    selectGroup && selectGroup.fenler.find((item) => item.id.toString() === id);
    
  console.log(selectGroup)
  return (
    <>
      <Button onClick={onOpen}>Mövzu əlavə et</Button>
      <Modal closeOnOverLayClcik={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mövzu əlavə et</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Select placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>İmtina et</Button>
            <Button colorScheme="blue" mr={3}>
              Əlavə et
            </Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </>
  )
}

export default MeetingsListTeachers