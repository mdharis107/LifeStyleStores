import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    console.log('otp')
    const { isOpen, onOpen, onClose } = useDisclosure();
  const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
 
   const navigate=useNavigate()
  const { 
    isOpen: isOpenModal, 
    onOpen: onOpenModal, 
    onClose: onCloseModal 
} = useDisclosure()

    const handleCont=()=>{
        
    }
  return (
    <div> <Modal isOpen={isOpenModal} style={{height:'1000px'}} size={['sm','md','xl']} onClose={onCloseModal} >
    <ModalOverlay />
    <ModalContent>
    <br /> <br /> <br />
      <ModalHeader>
        <Text paddingLeft={['20px','40px','60px']} paddingRight={['20px','40px','60px']} fontWeight="400" fontSize={['20px','30px','40px']}>qwerfghjhvcx</Text>
        <Text fontSize={'12px'} fontWeight="300" color={'grey'} paddingLeft={['20px','40px','60px']} paddingRight={['20px','40px','60px']} >Enjoy the convenience of a single account across all participating brands</Text>
        </ModalHeader>
      <ModalCloseButton />
      <ModalBody paddingLeft={['20px','50px','80px']} paddingRight={['20px','50px','80px']}>
        <Text >jvghgfdxfchjbk</Text>
        <Flex border={'1px solid #d3d3d3'} height={['19px','29px','40px']}>
        <Text marginTop={['1px','6px','8px']} fontSize={['8px','10px','15px']}>+91</Text>
        <Text marginTop={['-2px','-4px','-6px']} marginLeft={['3px','3px','5px']}fontSize={['12px','20px','30px']}color='#d3d3d3'>|</Text>
        <Input height={['15px','29px','40px']} type="number" aria-describedby="emailHelp" placeholder="Mobile Number" border={'none'} focusBorderColor='none'/>
        </Flex>
      </ModalBody>
      <Text fontSize={['7px','7px','10px']} paddingLeft={['20px','50px','80px']} >By creating your account you agree to our<a style={{color:'#faa619'}} href=''>{'  '}Terms and condition</a> </Text>
      <br /> <br />
      <ModalFooter paddingRight={['30px','50px','70px']}>
       
      <Button bgColor='#faa619' width={['250px']} _hover={{bgColor:'#ffc87c'}} onClick={handleCont}>Continue</Button>
     
      </ModalFooter>
      <br /> <br /> <br />
    </ModalContent>
  </Modal></div>
  )
}

export default Otp