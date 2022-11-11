import { Box, Flex, Image, Text, Button, Input, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Modal, ModalFooter, Alert } from '@chakra-ui/react';
import {Form, Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { BsXLg } from "react-icons/bs"
import {FaBars} from 'react-icons/fa'
import { Show, Hide } from '@chakra-ui/react'
import Logo from "../asset/Logo.JPG"
import {FiHeart, FiTruck}from "react-icons/fi"
import {BiShoppingBag, BiStore} from "react-icons/bi"
import {HiCursorClick} from "react-icons/hi"
import Otp from './otp';
import OTPInput, { ResendOTP } from "otp-input-react";
const Navbar=() => {
  const [showSmNav, setShowSmNav] = useState(false)
  const [isShown, setIsShown] = useState(false);
  const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [error, setError] = useState("");
   const [number, setNumber] = useState([]);
   const [flag, setFlag] = useState(false);
   const [otp, setOtp] = useState("");
   const [result, setResult] = useState("");
   const [OTP, setOTP] = useState("");
   const navigate=useNavigate()
  const { 
    isOpen: isOpenModal, 
    onOpen: onOpenModal, 
    onClose: onCloseModal 
} = useDisclosure()



const [otpModal,setOtpModal]=useState(true)
const handleClick=()=>{
     setOtpModal(false)
    console.log("otp",otpModal)
    console.log(number);
    setError("");
    if (number === "" || number.length>10||number.length<10)
      return setError("Please enter a valid phone number!");

 }
   
  return (
    <>
     {/* { showSmNav?" ": */}
    <Flex  w={"100%"} boxShadow={"md"} mx="auto" height={'40px'} bgColor='blackAlpha.900' justifyContent={'space-between'}>
      <Flex align={["flex-start","flex-start","flex-start","center"]} px={["30px","30px","50px","30px"]} gap ="25px" py={"10px"} justify={"flex-start"} direction={["column", "column","column","row"]}>
       <FiTruck color='white' size='25px'/>
       <Text color={'whiteAlpha.900'}>Free Shipping</Text>
       <BiStore color='white' size='25px'/><Box marginLeft={'-30px'}><HiCursorClick color='white' size='15px'/></Box>
       <Text color={'whiteAlpha.900'}>Click and Collect</Text>
       <BiStore color='white' size='25px'/><Box marginLeft={'-30px'}><HiCursorClick color='white' size='15px'/></Box>
       <Text color={'whiteAlpha.900'}>Return To Store</Text>
        </Flex>
       
        <Flex  direction={["column", "column","column","row"]} px={["30px","30px","50px","30px"]} gap ="25px" py={"10px"} justify={"flex-end"}>
            
        <Text color={'whiteAlpha.900'} fontWeight="600">Download Our App</Text>
        <Text color={'whiteAlpha.900'} fontWeight="600">|</Text>
        <Text color={'whiteAlpha.900'} fontWeight="600"  >Store collector</Text>
        <Text color={'whiteAlpha.900'} fontWeight="600">|</Text>
        <Text color={'whiteAlpha.900'} fontWeight="600">Help</Text>
        </Flex>
        
        </Flex>
        {/* } */}
    <Box bgColor={'#dcdcdc '} style={{position:'sticky',zIndex:'10',top:'-5px'}} w={"100%"} boxShadow={"md"} mx="auto" height={['100px']}>
      <Flex align={["flex-start","flex-start","flex-start","center"]} px={["30px","30px","50px","30px"]} gap ="25px" py={"10px"} justify={"flex-start"} direction={["column", "column","column","row"]}>
        <Flex justifyContent={"space-between"} align={"center"}  w={["100%","100%","80%","10%"]}>
        <Link to='/'>
            <Image  src={Logo} alt='ImageNAvbar'  w={["30%","20%","20%","70%"]} borderRadius='40px' paddingTop={'-35px'}/>
        </Link>
        <Show breakpoint='(max-width: 991px)' >
            <Box _hover={{cursor:"pointer"}} >
              {showSmNav?
              <BsXLg onClick={()=>setShowSmNav(!showSmNav)} fontSize={"1.2em"}/>:
              <FaBars onClick={()=>setShowSmNav(!showSmNav)} fontSize={"1.2em"}/>
              }
            </Box>
        </Show>
        </Flex>
        <Flex fontSize={'15px'} display={[showSmNav?"flex":"none",showSmNav?"flex":"none",showSmNav?"flex":"none", "flex"]} align={"center"} direction={["column","column","column","row"]} gap="25px" width={["100%","100%","100%","90%"]}>
          <br />
          <Link to='/mens'>
          <Text _hover={{textDecoration:"none", color:"#ffa500"}} fontWeight="600"> Mens</Text>
          </Link>
          <Link  to='/womens'>
          <Text _hover={{textDecoration:"none", color:"#ffa500"}} fontWeight="600"> Womens</Text>
          </Link>
          <Link  to='/kids'>
          <Text _hover={{textDecoration:"none", color:"#ffa500"}} fontWeight="600"> Kids</Text>
          </Link>
          <Link  to='/shoes&bags'>
          <Text _hover={{textDecoration:"none", color:"#ffa500"}} fontWeight="600" width={'100px'}> Shoes & Bags</Text>
          </Link>
          <Link  to='/beauty'>
          <Text _hover={{textDecoration:"none", color:"#ffa500"}} fontWeight="600"> Beauty</Text>
          </Link>
          { showSmNav?" ":<Input placeholder="Search" w={["10%","20%","20%","60%"]} backgroundColor='#ecedeb'/>}
        <Flex display={[showSmNav?"flex":"none",showSmNav?"flex":"none",showSmNav?"flex":"none", "flex"]} justify={["center", "center", "center", "center"]} align={"center"} gap="25px" direction={["column","column","column","row"]} width={["100%","100%","100%","55%"]}>
      
       <Link  to='/more'>
          <Text _hover={{textDecoration:"none", color:"#ffa500"}} fontWeight="600"> More</Text>
          </Link>
          <span>|</span>
            {/* _hover={{textDecoration:"none", color:"#03A9F4"}}  textDecoration={"none"} */}
          <Link   to='/signup'>
          {/* <Text colorScheme={"twitter"}  _hover={{bg:"#03A9F4", color:"#FFF"}} py={"10px"} px={"15px"} border={"1px solid black"}> SIGNUP FREE</Text> */}
          <Text onClick={onOpenModal}  _hover={{textDecoration:"none", color:"#ffa500"}} fontWeight="600"> SignUp/SignIn</Text>
          </Link>
          <Modal isOpen={isOpenModal} style={{height:'1000px'}} size={['sm','md','xl']} onClose={onCloseModal} >
        <ModalOverlay />
        {otpModal?(<ModalContent>
        <br /> <br /> <br />
          <ModalHeader>
            <Text paddingLeft={['20px','40px','60px']} paddingRight={['20px','40px','60px']} fontWeight="400" fontSize={['20px','30px','40px']}>Sign up or Sign in</Text>
            <Text fontSize={'12px'} fontWeight="300" color={'grey'} paddingLeft={['20px','40px','60px']} paddingRight={['20px','40px','60px']} >Enjoy the convenience of a single account across all participating brands</Text>
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingLeft={['20px','50px','80px']} paddingRight={['20px','50px','80px']}>
          {error && <Alert>{error}</Alert>}
            <Text >Mobile Number</Text>
            <Flex border={'1px solid #d3d3d3'} height={['19px','29px','40px']}>
            <Text marginTop={['1px','6px','8px']} fontSize={['8px','10px','15px']}>+91</Text>
            <Text marginTop={['-2px','-4px','-6px']} marginLeft={['3px','3px','5px']}fontSize={['12px','20px','30px']}color='#d3d3d3'>|</Text>
            <Input
              onChange={setNumber} height={['15px','29px','40px']} type="number" aria-describedby="emailHelp" placeholder="Mobile Number" border={'none'} focusBorderColor='none'/>
            </Flex>
          </ModalBody>
          <Text fontSize={['7px','7px','10px']} paddingLeft={['20px','50px','80px']} >By creating your account you agree to our<a style={{color:'#faa619'}} href=''>{'  '}Terms and condition</a> </Text>
          <br /> <br />
          <ModalFooter paddingRight={['30px','50px','70px']}>
           
          <Button bgColor='#faa619' width={['250px']} _hover={{bgColor:'#ffc87c'}} onClick={handleClick} >Continue</Button>
         
          </ModalFooter>
          <br /> <br /> <br />
        </ModalContent>):(   <ModalContent>
    <br /> <br /> <br />
      <ModalHeader>
        <Text paddingLeft={['20px','40px','60px']} paddingRight={['20px','40px','60px']} fontWeight="400" fontSize={['20px','30px','40px']}>Enter OTP SENT to your Phone</Text>
        <Text fontSize={'12px'} fontWeight="300" color={'grey'} paddingLeft={['20px','40px','60px']} paddingRight={['20px','40px','60px']} >Enjoy the convenience of a single account across all participating brands</Text>
        </ModalHeader>
      <ModalCloseButton />
      <ModalBody paddingLeft={['20px','50px','80px']} paddingRight={['20px','50px','80px']}>
        <Text >ENTER OTP</Text>
        <Box height={['19px','29px','40px']}>
        {/* <Text marginTop={['1px','6px','8px']} fontSize={['8px','10px','15px']}>+91</Text>
        <Text marginTop={['-2px','-4px','-6px']} marginLeft={['3px','3px','5px']}fontSize={['12px','20px','30px']}color='#d3d3d3'>|</Text> */}
        <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure  />
      <ResendOTP onResendClick={() => console.log("Resend clicked")} />
        </Box>
      </ModalBody>
      {/* <Text fontSize={['7px','7px','10px']} paddingLeft={['20px','50px','80px']} >By creating your account you agree to our<a style={{color:'#faa619'}} href=''>{'  '}Terms and condition</a> </Text> */}
      <br /> <br />
      <ModalFooter paddingRight={['30px','50px','70px']}>
       
      <Button bgColor='#faa619' width={['250px']} _hover={{bgColor:'#ffc87c'}} >Continue</Button>
     
      </ModalFooter>
      <br /> <br /> <br />
    </ModalContent>)}
      </Modal>
          <FiHeart size='25px'/>
          <BiShoppingBag size='25px'/>
          </Flex>
        </Flex>
      </Flex>

      
    </Box>
    </>
  )
}

export default Navbar