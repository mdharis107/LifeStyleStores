import { Box, Flex, Image, Text, Button, Input, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Modal, ModalFooter } from '@chakra-ui/react';
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { BsXLg } from "react-icons/bs"
import {FaBars} from 'react-icons/fa'
import { Show, Hide } from '@chakra-ui/react'
import Logo from "../asset/Logo.JPG"
import {FiHeart}from "react-icons/fi"
import {BiShoppingBag} from "react-icons/bi"
const Navbar=() => {
  const [showSmNav, setShowSmNav] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
 
   const navigate=useNavigate()
  const { 
    isOpen: isOpenModal, 
    onOpen: onOpenModal, 
    onClose: onCloseModal 
} = useDisclosure()
  return (
    <>
    <Box w={"100%"} boxShadow={"md"} mx="auto" height={'40px'} bgColor='blackAlpha.900'>
      <Flex align={["flex-start","flex-start","flex-start","center"]} px={["30px","30px","50px","30px"]} gap ="25px" py={"10px"} justify={"flex-start"} direction={["column", "column","column","row"]}>
        </Flex>
        </Box>
    <Box w={"100%"} boxShadow={"md"} mx="auto" height={'100px'}>
      <Flex align={["flex-start","flex-start","flex-start","center"]} px={["30px","30px","50px","30px"]} gap ="25px" py={"10px"} justify={"flex-start"} direction={["column", "column","column","row"]}>
        <Flex justifyContent={"space-between"} align={"center"}  w={["100%","100%","100%","10%"]}>
        <Link to='/'>
            <Image  src={Logo} alt='ImageNAvbar'  w={["40%","30%","20%","80%"]}/>
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
          <Text onClick={onOpenModal} _hover={{textDecoration:"none", color:"#ffa500"}} fontWeight="600"> SignUp/SignIn</Text>
          </Link>
          <Modal isOpen={isOpenModal} size={'xl'} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><h1>Sign up or Sign in</h1></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="enter email"  style={{marginBottom:'20px'}}/>
            <Input placeholder="enter password" />
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          <FiHeart />
          <BiShoppingBag />
          </Flex>
        </Flex>
      </Flex>

      
    </Box>
    </>
  )
}

export default Navbar