import { Box, Flex, Image, Text, Button, Input, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Modal, ModalFooter, Alert, MenuItem,Menu,MenuButton,MenuList } from '@chakra-ui/react';
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
   const [name,setName]=useState("")
   const [error, setError] = useState("");
   const [number, setNumber] = useState('');
   const [flag, setFlag] = useState(false);
   const [otp, setOtp] = useState("");
   const [result, setResult] = useState("");
   const [OTP, setOTP] = useState("");
   const [auth,setAuth]=useState(false)
   const navigate=useNavigate()
  const { 
    isOpen: isOpenModal, 
    onOpen: onOpenModal, 
    onClose: onCloseModal 
} = useDisclosure()
const { 
    isOpen: isOpenModal1, 
    onOpen: onOpenModal1, 
    onClose: onCloseModal1 
} = useDisclosure()
const { 
    isOpen: isOpenModal2, 
    onOpen: onOpenModal2, 
    onClose: onCloseModal2 
} = useDisclosure()
const { 
    isOpen: isOpenModal3, 
    onOpen: onOpenModal3, 
    onClose: onCloseModal3 
} = useDisclosure()
const { 
    isOpen: isOpenModal4, 
    onOpen: onOpenModal4, 
    onClose: onCloseModal4 
} = useDisclosure()
const { 
    isOpen: isOpenModal5, 
    onOpen: onOpenModal5, 
    onClose: onCloseModal5 
} = useDisclosure()
const { 
    isOpen: isOpenModal6, 
    onOpen: onOpenModal6, 
    onClose: onCloseModal6 
} = useDisclosure()
const { 
    isOpen: isOpenModal7, 
    onOpen: onOpenModal7, 
    onClose: onCloseModal7 
} = useDisclosure()

const { 
    isOpen: isOpenModal8, 
    onOpen: onOpenModal8, 
    onClose: onCloseModal8 
} = useDisclosure()
const [onclose,setOnclose]=useState('')


const [otpModal,setOtpModal]=useState(true)
const [otpModal2,setOtpModal2]=useState(true)
const handleClick=()=>{
     
    console.log("otp",otpModal)
    console.log(number)
    setError("");
    if (number === "" ||number.length>10||number.length<10){
      return setError("Please enter a valid phone number!")}
 
 else{
    setOtpModal(false)
 }
}
const handleClick2=()=>{
    console.log('qweett')
    setOtpModal2(false)
}
const handleClick3=()=>{
    console.log(email,name)
    setOtpModal2(true)
    setOtpModal(true)
    localStorage.setItem('name',name)
    setAuth(true)
}
const handlesignout=()=>{
    setAuth(false)
    onclose={onCloseModal}
}
 const newname=localStorage.getItem("name")
   
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
    <Box bgColor={'#dcdcdc '} style={{position:'sticky',zIndex:'10',top:'-5px'}} w={"100%"} boxShadow={"md"} mx="auto" >
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
          <Link to='/'>
          <Menu isOpen={isOpenModal2}>
          <MenuButton
                variant="ghost"
                mx={2}
                py={[1, 2, 6]}
                px={1}
                borderRadius={5}
                _hover={{ bg:"white", color:"#ffa500" }}
                aria-label="Courses"
                fontWeight="600"
                onMouseEnter={onOpenModal2}
                onMouseLeave={onCloseModal2}
                
            >
              Women
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal2} 
            onMouseLeave={onCloseModal2}>
            <div >
                {/* <MenuItem fontWeight={"bold"}><Link to="/makeup">Topwear</Link></MenuItem> */}
                <MenuItem fontWeight={"bold"}>Topwear</MenuItem>
                <MenuItem>Casual Shirt</MenuItem>
                <MenuItem>Formal Shirt</MenuItem>
                <MenuItem>Polo</MenuItem>
                <MenuItem>T-Shirt</MenuItem>
                <MenuItem>Jacket</MenuItem>
                <MenuItem>Hoodies and Sweat Shirt</MenuItem>
                <br />
                <MenuItem fontWeight={"bold"}>Bottomwear</MenuItem>
                <MenuItem>Casual Trouser</MenuItem>
                <MenuItem>Formal Trouser</MenuItem>
                <MenuItem>Jeans</MenuItem>
                <MenuItem>Track Pants</MenuItem>
                <MenuItem>Shorts</MenuItem>
                </div>
                <div style={{width:'130px'}}>
                <MenuItem fontWeight={"bold"}>Activewear</MenuItem>
                <MenuItem>Polos</MenuItem>
                <MenuItem>Sports T-shirt</MenuItem>
                <MenuItem>Trackpant</MenuItem>
                <MenuItem >Sports Shoes</MenuItem>
                <MenuItem fontWeight={"bold"}>Ethnic</MenuItem>
                <MenuItem>Kurtas</MenuItem>
                <MenuItem>Waist Coat</MenuItem>
                <MenuItem>Pyjamas</MenuItem>
                <MenuItem fontWeight={"bold"}>Winter wear</MenuItem>
                <MenuItem>Hoodies & SeatShirt</MenuItem>
                <MenuItem>Jackets</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Innerwear</MenuItem>
                <MenuItem>Boxer</MenuItem>
                <MenuItem>Brief</MenuItem>
                <MenuItem>Lounge Wear</MenuItem>
                <MenuItem >Vests</MenuItem>
                <MenuItem fontWeight={"bold"}>Top Brands</MenuItem>
                <MenuItem>Us Polo</MenuItem>
                <MenuItem>Farehnhite</MenuItem>
                <MenuItem>Jack & Jones</MenuItem>
                <MenuItem>Levis</MenuItem>
                <MenuItem>UCB</MenuItem>
                <MenuItem>Celio</MenuItem>
                <MenuItem>Kappa</MenuItem>
                <MenuItem>Bossini</MenuItem>
                <MenuItem>CODE</MenuItem>
                <MenuItem>FrameForever</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Watches</MenuItem>
                <MenuItem>Digital Watches</MenuItem>
                <MenuItem>Analogue Watches</MenuItem>
                <MenuItem>Automatic watches</MenuItem>
                <MenuItem >Chronology watches</MenuItem>
                <MenuItem>Multi Function</MenuItem>
                <MenuItem>Smart Watches</MenuItem>
                <MenuItem>Fitness Tracker</MenuItem>
                <MenuItem fontWeight={"bold"}>Sunglasses</MenuItem>
                <MenuItem>Aviator</MenuItem>
                <MenuItem>Sporty Rectangle</MenuItem>
                <MenuItem>wayfers</MenuItem>
                <MenuItem>Round</MenuItem>
                </div>
                <div>
                <MenuItem fontWeight={"bold"}>Shoes</MenuItem>
                <MenuItem>Loafers</MenuItem>
                <MenuItem>Slip-Ons</MenuItem>
                <MenuItem>LaceUps</MenuItem>
                <MenuItem>Slippers and Sliders</MenuItem>
                <MenuItem>Floatwear</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem fontWeight={"bold"}>Grooming</MenuItem>
                <MenuItem>Fragrance</MenuItem>
                <MenuItem>Facewash</MenuItem>
                <MenuItem>SkinCare</MenuItem>
                <MenuItem>Hair care</MenuItem>
                <MenuItem>Beard Care</MenuItem>
                <MenuItem>Bath & Body</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Add-Ons</MenuItem>
                <MenuItem>Wallet</MenuItem>
                <MenuItem>Ties</MenuItem>
                <MenuItem>Belts</MenuItem>
                <MenuItem >Socks</MenuItem>
                </div>
            </MenuList>
          </Menu>
          </Link>
          <Link  to='/mens'>
          <Menu isOpen={isOpenModal3}>
       <MenuButton
                variant="ghost"
                mx={2}
                py={[1, 2, 6]}
                px={1}
                borderRadius={5}
                _hover={{ bg:"white", color:"#ffa500" }}
                aria-label="Courses"
                fontWeight="600"
                onMouseEnter={onOpenModal3}
                onMouseLeave={onCloseModal3}
                
            >
            Men
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal3} 
            onMouseLeave={onCloseModal3}>
            <div >
                {/* <MenuItem fontWeight={"bold"}><Link to="/makeup">Topwear</Link></MenuItem> */}
                <MenuItem fontWeight={"bold"}>Topwear</MenuItem>
                <MenuItem>Casual Shirt</MenuItem>
                <MenuItem>Formal Shirt</MenuItem>
                <MenuItem>Polo</MenuItem>
                <MenuItem>T-Shirt</MenuItem>
                <MenuItem>Jacket</MenuItem>
                <MenuItem>Hoodies and Sweat Shirt</MenuItem>
                <MenuItem fontWeight={"bold"}>Bottomwear</MenuItem>
                <MenuItem>Casual Trouser</MenuItem>
                <MenuItem>Formal Trouser</MenuItem>
                <MenuItem>Jeans</MenuItem>
                <MenuItem>Track Pants</MenuItem>
                <MenuItem>Shorts</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Activewear</MenuItem>
                <MenuItem>Polos</MenuItem>
                <MenuItem>Sports T-shirt</MenuItem>
                <MenuItem>Trackpant</MenuItem>
                <MenuItem >Sports Shoes</MenuItem>
                <MenuItem fontWeight={"bold"}>Ethnic</MenuItem>
                <MenuItem>Kurtas</MenuItem>
                <MenuItem>Waist Coat</MenuItem>
                <MenuItem>Pyjamas</MenuItem>
                <MenuItem fontWeight={"bold"}>Winter wear</MenuItem>
                <MenuItem>Hoodies & SeatShirt</MenuItem>
                <MenuItem>Jackets</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Innerwear</MenuItem>
                <MenuItem>Boxer</MenuItem>
                <MenuItem>Brief</MenuItem>
                <MenuItem>Lounge Wear</MenuItem>
                <MenuItem >Vests</MenuItem>
                <MenuItem fontWeight={"bold"}>Top Brands</MenuItem>
                <MenuItem>Us Polo</MenuItem>
                <MenuItem>Farehnhite</MenuItem>
                <MenuItem>Jack & Jones</MenuItem>
                <MenuItem>Levis</MenuItem>
                <MenuItem>UCB</MenuItem>
                <MenuItem>Celio</MenuItem>
                <MenuItem>Kappa</MenuItem>
                <MenuItem>Bossini</MenuItem>
                <MenuItem>CODE</MenuItem>
                <MenuItem>FrameForever</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Watches</MenuItem>
                <MenuItem>Digital Watches</MenuItem>
                <MenuItem>Analogue Watches</MenuItem>
                <MenuItem>Automatic watches</MenuItem>
                <MenuItem >Chronology watches</MenuItem>
                <MenuItem>Multi Function</MenuItem>
                <MenuItem>Smart Watches</MenuItem>
                <MenuItem>Fitness Tracker</MenuItem>
                <MenuItem fontWeight={"bold"}>Sunglasses</MenuItem>
                <MenuItem>Aviator</MenuItem>
                <MenuItem>Sporty Rectangle</MenuItem>
                <MenuItem>wayfers</MenuItem>
                <MenuItem>Round</MenuItem>
                </div>
                <div>
                <MenuItem fontWeight={"bold"}>Shoes</MenuItem>
                <MenuItem>Loafers</MenuItem>
                <MenuItem>Slip-Ons</MenuItem>
                <MenuItem>LaceUps</MenuItem>
                <MenuItem>Slippers and Sliders</MenuItem>
                <MenuItem>Floatwear</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem fontWeight={"bold"}>Grooming</MenuItem>
                <MenuItem>Fragrance</MenuItem>
                <MenuItem>Facewash</MenuItem>
                <MenuItem>SkinCare</MenuItem>
                <MenuItem>Hair care</MenuItem>
                <MenuItem>Beard Care</MenuItem>
                <MenuItem>Bath & Body</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Add-Ons</MenuItem>
                <MenuItem>Wallet</MenuItem>
                <MenuItem>Ties</MenuItem>
                <MenuItem>Belts</MenuItem>
                <MenuItem >Socks</MenuItem>
                </div>
            </MenuList>
          </Menu>
          </Link>
          <Link  to='/kids'>
          <Menu isOpen={isOpenModal4}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 6]}
                px={2}
                borderRadius={5}
                _hover={{ bg:"white", color:"#ffa500" }}
                aria-label="Courses"
                fontWeight="600"
                onMouseEnter={onOpenModal4}
                onMouseLeave={onCloseModal4}
                
            >
             Kids
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal4} 
            onMouseLeave={onCloseModal4}>
            <div >
                {/* <MenuItem fontWeight={"bold"}><Link to="/makeup">Topwear</Link></MenuItem> */}
                <MenuItem fontWeight={"bold"}>Topwear</MenuItem>
                <MenuItem>Casual Shirt</MenuItem>
                <MenuItem>Formal Shirt</MenuItem>
                <MenuItem>Polo</MenuItem>
                <MenuItem>T-Shirt</MenuItem>
                <MenuItem>Jacket</MenuItem>
                <MenuItem>Hoodies and Sweat Shirt</MenuItem>
                <MenuItem fontWeight={"bold"}>Bottomwear</MenuItem>
                <MenuItem>Casual Trouser</MenuItem>
                <MenuItem>Formal Trouser</MenuItem>
                <MenuItem>Jeans</MenuItem>
                <MenuItem>Track Pants</MenuItem>
                <MenuItem>Shorts</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Activewear</MenuItem>
                <MenuItem>Polos</MenuItem>
                <MenuItem>Sports T-shirt</MenuItem>
                <MenuItem>Trackpant</MenuItem>
                <MenuItem >Sports Shoes</MenuItem>
                <MenuItem fontWeight={"bold"}>Ethnic</MenuItem>
                <MenuItem>Kurtas</MenuItem>
                <MenuItem>Waist Coat</MenuItem>
                <MenuItem>Pyjamas</MenuItem>
                <MenuItem fontWeight={"bold"}>Winter wear</MenuItem>
                <MenuItem>Hoodies & SeatShirt</MenuItem>
                <MenuItem>Jackets</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Innerwear</MenuItem>
                <MenuItem>Boxer</MenuItem>
                <MenuItem>Brief</MenuItem>
                <MenuItem>Lounge Wear</MenuItem>
                <MenuItem >Vests</MenuItem>
                <MenuItem fontWeight={"bold"}>Top Brands</MenuItem>
                <MenuItem>Us Polo</MenuItem>
                <MenuItem>Farehnhite</MenuItem>
                <MenuItem>Jack & Jones</MenuItem>
                <MenuItem>Levis</MenuItem>
                <MenuItem>UCB</MenuItem>
                <MenuItem>Celio</MenuItem>
                <MenuItem>Kappa</MenuItem>
                <MenuItem>Bossini</MenuItem>
                <MenuItem>CODE</MenuItem>
                <MenuItem>FrameForever</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Watches</MenuItem>
                <MenuItem>Digital Watches</MenuItem>
                <MenuItem>Analogue Watches</MenuItem>
                <MenuItem>Automatic watches</MenuItem>
                <MenuItem >Chronology watches</MenuItem>
                <MenuItem>Multi Function</MenuItem>
                <MenuItem>Smart Watches</MenuItem>
                <MenuItem>Fitness Tracker</MenuItem>
                <MenuItem fontWeight={"bold"}>Sunglasses</MenuItem>
                <MenuItem>Aviator</MenuItem>
                <MenuItem>Sporty Rectangle</MenuItem>
                <MenuItem>wayfers</MenuItem>
                <MenuItem>Round</MenuItem>
                </div>
                <div>
                <MenuItem fontWeight={"bold"}>Shoes</MenuItem>
                <MenuItem>Loafers</MenuItem>
                <MenuItem>Slip-Ons</MenuItem>
                <MenuItem>LaceUps</MenuItem>
                <MenuItem>Slippers and Sliders</MenuItem>
                <MenuItem>Floatwear</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem fontWeight={"bold"}>Grooming</MenuItem>
                <MenuItem>Fragrance</MenuItem>
                <MenuItem>Facewash</MenuItem>
                <MenuItem>SkinCare</MenuItem>
                <MenuItem>Hair care</MenuItem>
                <MenuItem>Beard Care</MenuItem>
                <MenuItem>Bath & Body</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Add-Ons</MenuItem>
                <MenuItem>Wallet</MenuItem>
                <MenuItem>Ties</MenuItem>
                <MenuItem>Belts</MenuItem>
                <MenuItem >Socks</MenuItem>
                </div>
            </MenuList>
          </Menu>
          </Link>
          <Link  to='/shoes & bags'>
          <Menu isOpen={isOpenModal5}>
          <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 6]}
                px={2}
                borderRadius={5}
                _hover={{ bg:"white", color:"#ffa500" }}
                aria-label="Courses"
                fontWeight="600"
                onMouseEnter={onOpenModal5}
                onMouseLeave={onCloseModal5}
                width={['140px']}
            >
             Shoes & Bags
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal5} 
            onMouseLeave={onCloseModal5}>
            <div >
                {/* <MenuItem fontWeight={"bold"}><Link to="/makeup">Topwear</Link></MenuItem> */}
                <MenuItem fontWeight={"bold"}>Topwear</MenuItem>
                <MenuItem>Casual Shirt</MenuItem>
                <MenuItem>Formal Shirt</MenuItem>
                <MenuItem>Polo</MenuItem>
                <MenuItem>T-Shirt</MenuItem>
                <MenuItem>Jacket</MenuItem>
                <MenuItem>Hoodies and Sweat Shirt</MenuItem>
                <MenuItem fontWeight={"bold"}>Bottomwear</MenuItem>
                <MenuItem>Casual Trouser</MenuItem>
                <MenuItem>Formal Trouser</MenuItem>
                <MenuItem>Jeans</MenuItem>
                <MenuItem>Track Pants</MenuItem>
                <MenuItem>Shorts</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Activewear</MenuItem>
                <MenuItem>Polos</MenuItem>
                <MenuItem>Sports T-shirt</MenuItem>
                <MenuItem>Trackpant</MenuItem>
                <MenuItem >Sports Shoes</MenuItem>
                <MenuItem fontWeight={"bold"}>Ethnic</MenuItem>
                <MenuItem>Kurtas</MenuItem>
                <MenuItem>Waist Coat</MenuItem>
                <MenuItem>Pyjamas</MenuItem>
                <MenuItem fontWeight={"bold"}>Winter wear</MenuItem>
                <MenuItem>Hoodies & SeatShirt</MenuItem>
                <MenuItem>Jackets</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Innerwear</MenuItem>
                <MenuItem>Boxer</MenuItem>
                <MenuItem>Brief</MenuItem>
                <MenuItem>Lounge Wear</MenuItem>
                <MenuItem >Vests</MenuItem>
                <MenuItem fontWeight={"bold"}>Top Brands</MenuItem>
                <MenuItem>Us Polo</MenuItem>
                <MenuItem>Farehnhite</MenuItem>
                <MenuItem>Jack & Jones</MenuItem>
                <MenuItem>Levis</MenuItem>
                <MenuItem>UCB</MenuItem>
                <MenuItem>Celio</MenuItem>
                <MenuItem>Kappa</MenuItem>
                <MenuItem>Bossini</MenuItem>
                <MenuItem>CODE</MenuItem>
                <MenuItem>FrameForever</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Watches</MenuItem>
                <MenuItem>Digital Watches</MenuItem>
                <MenuItem>Analogue Watches</MenuItem>
                <MenuItem>Automatic watches</MenuItem>
                <MenuItem >Chronology watches</MenuItem>
                <MenuItem>Multi Function</MenuItem>
                <MenuItem>Smart Watches</MenuItem>
                <MenuItem>Fitness Tracker</MenuItem>
                <MenuItem fontWeight={"bold"}>Sunglasses</MenuItem>
                <MenuItem>Aviator</MenuItem>
                <MenuItem>Sporty Rectangle</MenuItem>
                <MenuItem>wayfers</MenuItem>
                <MenuItem>Round</MenuItem>
                </div>
                <div>
                <MenuItem fontWeight={"bold"}>Shoes</MenuItem>
                <MenuItem>Loafers</MenuItem>
                <MenuItem>Slip-Ons</MenuItem>
                <MenuItem>LaceUps</MenuItem>
                <MenuItem>Slippers and Sliders</MenuItem>
                <MenuItem>Floatwear</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem fontWeight={"bold"}>Grooming</MenuItem>
                <MenuItem>Fragrance</MenuItem>
                <MenuItem>Facewash</MenuItem>
                <MenuItem>SkinCare</MenuItem>
                <MenuItem>Hair care</MenuItem>
                <MenuItem>Beard Care</MenuItem>
                <MenuItem>Bath & Body</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Add-Ons</MenuItem>
                <MenuItem>Wallet</MenuItem>
                <MenuItem>Ties</MenuItem>
                <MenuItem>Belts</MenuItem>
                <MenuItem >Socks</MenuItem>
                </div>
            </MenuList>
          </Menu>
          </Link>
          <Link  to='/beauty'>
          <Menu isOpen={isOpenModal6}>
           <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 6]}
                px={2}
                borderRadius={5}
                _hover={{ bg:"white", color:"#ffa500" }}
                aria-label="Courses"
                fontWeight="600"
                onMouseEnter={onOpenModal6}
                onMouseLeave={onCloseModal6}
                
            >
              Beauty
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"1318px"}} 
            onMouseEnter={onOpenModal1} 
            onMouseLeave={onCloseModal1}>
            <div >
                {/* <MenuItem fontWeight={"bold"}><Link to="/makeup">Topwear</Link></MenuItem> */}
                <MenuItem fontWeight={"bold"}>Topwear</MenuItem>
                <MenuItem>Casual Shirt</MenuItem>
                <MenuItem>Formal Shirt</MenuItem>
                <MenuItem>Polo</MenuItem>
                <MenuItem>T-Shirt</MenuItem>
                <MenuItem>Jacket</MenuItem>
                <MenuItem>Hoodies and Sweat Shirt</MenuItem>
                <MenuItem fontWeight={"bold"}>Bottomwear</MenuItem>
                <MenuItem>Casual Trouser</MenuItem>
                <MenuItem>Formal Trouser</MenuItem>
                <MenuItem>Jeans</MenuItem>
                <MenuItem>Track Pants</MenuItem>
                <MenuItem>Shorts</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Activewear</MenuItem>
                <MenuItem>Polos</MenuItem>
                <MenuItem>Sports T-shirt</MenuItem>
                <MenuItem>Trackpant</MenuItem>
                <MenuItem >Sports Shoes</MenuItem>
                <MenuItem fontWeight={"bold"}>Ethnic</MenuItem>
                <MenuItem>Kurtas</MenuItem>
                <MenuItem>Waist Coat</MenuItem>
                <MenuItem>Pyjamas</MenuItem>
                <MenuItem fontWeight={"bold"}>Winter wear</MenuItem>
                <MenuItem>Hoodies & SeatShirt</MenuItem>
                <MenuItem>Jackets</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Innerwear</MenuItem>
                <MenuItem>Boxer</MenuItem>
                <MenuItem>Brief</MenuItem>
                <MenuItem>Lounge Wear</MenuItem>
                <MenuItem >Vests</MenuItem>
                <MenuItem fontWeight={"bold"}>Top Brands</MenuItem>
                <MenuItem>Us Polo</MenuItem>
                <MenuItem>Farehnhite</MenuItem>
                <MenuItem>Jack & Jones</MenuItem>
                <MenuItem>Levis</MenuItem>
                <MenuItem>UCB</MenuItem>
                <MenuItem>Celio</MenuItem>
                <MenuItem>Kappa</MenuItem>
                <MenuItem>Bossini</MenuItem>
                <MenuItem>CODE</MenuItem>
                <MenuItem>FrameForever</MenuItem>
                </div>
                <div style={{width:'190px'}}>
                <MenuItem fontWeight={"bold"}>Watches</MenuItem>
                <MenuItem>Digital Watches</MenuItem>
                <MenuItem>Analogue Watches</MenuItem>
                <MenuItem>Automatic watches</MenuItem>
                <MenuItem >Chronology watches</MenuItem>
                <MenuItem>Multi Function</MenuItem>
                <MenuItem>Smart Watches</MenuItem>
                <MenuItem>Fitness Tracker</MenuItem>
                <MenuItem fontWeight={"bold"}>Sunglasses</MenuItem>
                <MenuItem>Aviator</MenuItem>
                <MenuItem>Sporty Rectangle</MenuItem>
                <MenuItem>wayfers</MenuItem>
                <MenuItem>Round</MenuItem>
                </div>
                <div>
                <MenuItem fontWeight={"bold"}>Shoes</MenuItem>
                <MenuItem>Loafers</MenuItem>
                <MenuItem>Slip-Ons</MenuItem>
                <MenuItem>LaceUps</MenuItem>
                <MenuItem>Slippers and Sliders</MenuItem>
                <MenuItem>Floatwear</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem fontWeight={"bold"}>Grooming</MenuItem>
                <MenuItem>Fragrance</MenuItem>
                <MenuItem>Facewash</MenuItem>
                <MenuItem>SkinCare</MenuItem>
                <MenuItem>Hair care</MenuItem>
                <MenuItem>Beard Care</MenuItem>
                <MenuItem>Bath & Body</MenuItem>
                </div>
                <div > 
                <MenuItem fontWeight={"bold"}>Add-Ons</MenuItem>
                <MenuItem>Wallet</MenuItem>
                <MenuItem>Ties</MenuItem>
                <MenuItem>Belts</MenuItem>
                <MenuItem >Socks</MenuItem>
                </div>
            </MenuList>
          </Menu>
          </Link>
          { showSmNav?" ":<Input placeholder="Search" w={["10%","20%","20%","60%"]} backgroundColor='#ecedeb'/>}
        <Flex display={[showSmNav?"flex":"none",showSmNav?"flex":"none",showSmNav?"flex":"none", "flex"]} justify={["center", "center", "center", "center"]} align={"center"} gap="25px" direction={["column","column","column","row"]} width={["100%","100%","100%","55%"]}>
      
       <Link  to='/more'>
       <Menu isOpen={isOpenModal7}>
         <MenuButton
                variant="ghost"
                mx={4}
                py={[1, 2, 6]}
                px={4}
                borderRadius={5}
                _hover={{ bg:"white", color:"#ffa500" }}
                aria-label="Courses"
                fontWeight="600"
                onMouseEnter={onOpenModal7}
                onMouseLeave={onCloseModal7}
                
            >
              More
            </MenuButton>
            <MenuList  display="flex" justifyContent="space-evenly" 
            style={{color:"black" ,padding:"20px",width:"20%"}} 
            onMouseEnter={onOpenModal7} 
            onMouseLeave={onCloseModal7}>
            <div >
                {/* <MenuItem fontWeight={"bold"}><Link to="/makeup">Topwear</Link></MenuItem> */}
                <MenuItem>Download App</MenuItem>
                <MenuItem>Online Gift Card</MenuItem>
                <MenuItem>Online Offers</MenuItem>
                <MenuItem>Store Locater</MenuItem>
                <MenuItem>Store Detail</MenuItem>
                <MenuItem>Lifestyle EDGE</MenuItem>
                <MenuItem>Shop On Whatsapp</MenuItem>
                <MenuItem >Blog</MenuItem>
                <MenuItem>SBI Offers</MenuItem>
                </div>
                </MenuList>
          </Menu>
          </Link>
          <span>|</span>
            {/* _hover={{textDecoration:"none", color:"#03A9F4"}}  textDecoration={"none"} */}
          
          {/* <Text colorScheme={"twitter"}  _hover={{bg:"#03A9F4", color:"#FFF"}} py={"10px"} px={"15px"} border={"1px solid black"}> SIGNUP FREE</Text> */}
          <Text onClick={onOpenModal}  _hover={{textDecoration:"none", color:"#ffa500"}} fontWeight="600"> {auth?(
            <Menu isOpen={isOpenModal8}>
            <MenuButton
                  variant="ghost"
                  mx={4}
                  py={[1, 2, 6]}
                  px={4}
                  borderRadius={5}
                  _hover={{ bg:"white", color:"#ffa500" }}
                  aria-label="Courses"
                  fontWeight="600"
                  onMouseEnter={onOpenModal8}
                  onMouseLeave={onCloseModal8}
                  
              >
               {newname}
              </MenuButton>
              <MenuList  display="flex" justifyContent="space-evenly" 
              style={{color:"black" ,padding:"20px",width:"20%"}} 
              onMouseEnter={onOpenModal8} 
              onMouseLeave={onCloseModal8}>
              <div >
                  {/* <MenuItem fontWeight={"bold"}><Link to="/makeup">Topwear</Link></MenuItem> */}
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Favourite Item</MenuItem>
                  <MenuItem>Order History</MenuItem>
                  <MenuItem>My address</MenuItem>
                  <MenuItem>Payment</MenuItem>
                  <MenuItem>My Credit</MenuItem>
                  <MenuItem>Communication</MenuItem>
                  <MenuItem >Landmark</MenuItem>
                  <MenuItem onClick={handlesignout}>Signout</MenuItem>
                  </div>
                  </MenuList>
            </Menu>
          ):"SignUp/SignIn"}</Text>
          
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
            <Input onChange={(e)=>setNumber(e.target.value)} value={number}
               height={['15px','29px','40px']} type="number" placeholder="Mobile Number" border={'none'} focusBorderColor='none'/>
            </Flex>
          </ModalBody>
          <Text fontSize={['7px','7px','10px']} paddingLeft={['20px','50px','80px']} >By creating your account you agree to our<a style={{color:'#faa619'}} href=''>{'  '}Terms and condition</a> </Text>
          <br /> <br />
          <ModalFooter paddingRight={['30px','50px','70px']}>
           
          <Button bgColor='#faa619' width={['250px']} _hover={{bgColor:'#ffc87c'}} onClick={handleClick} >Continue</Button>
         
          </ModalFooter>
          <br /> <br /> <br />
        </ModalContent>):( otpModal2?(<ModalContent>
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
       
      <Button bgColor='#faa619' width={['250px']} _hover={{bgColor:'#ffc87c'}} onClick={handleClick2} >Continue</Button>
     
      </ModalFooter>
      <br /> <br /> <br />
    </ModalContent>):(
        <ModalContent>
        <br /> <br /> <br />
          <ModalHeader>
            <Text paddingLeft={['20px','40px','60px']} paddingRight={['20px','40px','60px']} fontWeight="400" fontSize={['20px','30px','40px']}>Enter Your Detail</Text>
            <Text fontSize={'12px'} fontWeight="300" color={'grey'} paddingLeft={['20px','40px','60px']} paddingRight={['20px','40px','60px']} >Enjoy the convenience of a single account across all participating brands</Text>
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingLeft={['20px','50px','80px']} paddingRight={['20px','50px','80px']}>
            <Text >Enter Name and Email </Text>
            <Box height={['19px','29px','40px']}>
            <Input onChange={(e)=>setName(e.target.value)} value={name}
               height={['15px','29px','40px']} type="text" placeholder="Name" border={'none'} focusBorderColor='none'/>
            <Input onChange={(e)=>setEmail(e.target.value)} value={email}
               height={['15px','29px','40px']} type="text" placeholder="email" border={'none'} focusBorderColor='none'/>
            </Box>
          </ModalBody>
          {/* <Text fontSize={['7px','7px','10px']} paddingLeft={['20px','50px','80px']} >By creating your account you agree to our<a style={{color:'#faa619'}} href=''>{'  '}Terms and condition</a> </Text> */}
          <br /> <br />
          <ModalFooter paddingRight={['30px','50px','70px']}>
           
          <Button bgColor='#faa619' width={['250px']} _hover={{bgColor:'#ffc87c'}} onClick={handleClick3} >Continue</Button>
         
          </ModalFooter>
          <br /> <br /> <br />
        </ModalContent>
    ))}
      </Modal>
          <FiHeart size='25px'/>
          <Link to='/cart'>
          <BiShoppingBag size='25px'/>
          </Link>
          </Flex>
        </Flex>
      </Flex>

      
    </Box>
    </>
  )
}

export default Navbar