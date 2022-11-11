import React from 'react';
import { Flex, Stack, Text, Box, Button, Image, Input} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import ReactStoreBadges from 'react-store-badges'

const Footer = () => {
    return (
        <Box maxW={"100%"} mx="auto">
            <Flex justifyContent='space-between' paddingRight={'100px'} align='flex-start' border={"1px solid #CCC"} py='50px'>
            <Box w={'50%'} >
                <Text  fontWeight={'700'} fontSize='30px' >Subscribe to our awesome emails.</Text>
                <Text fontWeight={'200'} color='grey'>Get our latest offers and news straight in your inbox.</Text>
            <Flex w={"80%"} paddingTop={"20px"} mx="auto"  direction={["column", "column", "row", "row"]}>
           <Input placeholder='Please enter email address' w={["70%","70%","70%","95%"]} height='50px' paddingRight={'15px'} borderRadius='0px'/>
           <Button height={'50px'} w={['100px','200px']} bgColor='blackAlpha.900' color={'whiteAlpha.900'} _hover={{bgColor:'none'}}>Subscribe</Button>
            </Flex>
            </Box>
            <Box w={['30%']}>
            <Text  fontWeight={'700'} fontSize='30px' >Download our apps</Text>
                <Text fontWeight={'200'} color='grey'>Shop our products and offers on-the-go</Text>
                <br />
            <Flex w={['100%']} justifyContent={'space-evenly'} >
                
            <ReactStoreBadges
          platform={'android'}
          url={'YOUR_PLAY_STORE_URL'}
          locale={'en-us'}
        /> <ReactStoreBadges
        platform={'ios'}
        url={'YOUR_APP_STORE_URL'}
        locale={'en-us'}
      />
            </Flex>
            </Box>
            </Flex>
            <Box w={"100%"} paddingTop={"20px"} margin={'auto'}>
                <Flex w={"100%"}  justify={"left"} direction={["column", "column", "row", "row"]}>
                    <Flex justify={"left"} width={"100%"} wrap={"wrap"} gap={"25px"}>
                        <Flex w={["45%","45%","20%","15%"]} align={"left"} gap={"5px"} direction={"column"} >
                            <Text fontWeight={"bold"}>Women</Text>
                            <Text>Tops</Text>
                            <Text>Ethnicware</Text>
                            <Text>Bottoms</Text>
                            <Text>Dresses & Jumpsuit</Text>
                            <Text>Winterwear</Text>
                            <Text>Lingerie</Text>
                            <Text>Nightwear</Text>
                            <Text>Sportswear</Text>
                            <Text>Beauty</Text>
                            <Text>Watches & Sunglasses</Text>
                        </Flex>
                        <Flex align={"center"} w={["45%","45%","20%","15%"]} gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Men</Text>
                            <Text>Tops</Text>
                            <Text>Bottoms</Text>
                            <Text>EthnicWear</Text>
                            <Text>Winterwear</Text>
                            <Text>Sportswear</Text>
                            <Text>Innerwear</Text>
                            <Text>Grooming</Text>
                            <Text>Watches</Text>
                            <Text>Sunglasses</Text>
                        </Flex>


                        <Flex  align={"center"} w={["45%","45%","20%","15%"]} gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Kids</Text>
                            <Text>Girls Clothing</Text>
                            <Text>Boys Clothing</Text>
                            <Text>Infants Girls</Text>
                            <Text>Infants Boys</Text>
                            <Text>Winterwear</Text>
                            <Text>Add ons</Text>
                            <Text>The Teen Shop</Text>
                        </Flex>
                        <Flex  align={"center"} w={["45%","45%","20%","15%"]} gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Shoes & Bags</Text>
                            <Text>Women</Text>
                            <Text>Men</Text>
                            <Text>Boys</Text>
                            <Text>Girls</Text>
                            <Text>Women Accessories</Text>
                            <Text>Men Accessories</Text>
                            <Text>Essentials</Text>
                        </Flex>
                        <Flex  align={"center"} w={["45%","45%","20%","15%"]} gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Beauty</Text>
                            <Text>Makeup Eyes</Text>
                            <Text>Makeup Face</Text>
                            <Text>Makeup Lips</Text>
                            <Text>Makeup Nails</Text>
                            <Text>Perfumes</Text>
                        </Flex>

                        <Flex  align={"center"} w={["45%","45%","20%","15%"]} gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Explore</Text>
                            <Text>Online Offers</Text>
                            <Text>Store Offers</Text>
                            <Text>Online Gift Card</Text>
                            <Text>Store Gift Card</Text>
                            <Text>Stores Nearby</Text>
                            <Text>EDGE</Text>
                            <Text>Membership</Text>
                            <Text>Shop On</Text>
                            <Text>Whatsapp</Text>
                            <Text>Fashion VLOG</Text>
                            <Text>Join CIRCLEMAG</Text>
                            <Text>SBI offers</Text>
                            <Text>Homecentre</Text>
                        </Flex>

                        <Flex align={"center"} w={["45%","45%","20%","15%"]} gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>About</Text>
                            <Text>About Us</Text>
                            <Text>Careers</Text>
                            <Text>Take a Tour</Text>
                            <Text>Blog</Text>
                            <Text>Store Locator</Text>
                            <Text>Landmark</Text>
                            <Text>Cares</Text>
                        </Flex>


                        <Flex align={"center"} w={["45%","45%","20%","15%"]} gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Help</Text>
                            <Text>Contact Us</Text>
                            <Text>Shipping</Text>
                            <Text>Returns Process</Text>
                            <Text>Return Policy</Text>
                            <Text>Help Centre</Text>
                        </Flex>
                    </Flex>
                </Flex>


                <Flex  wrap={"wrap"}  width={"98%"} justify={"center"} py={"30px"} gap={"20px"} >
                    
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        © 2022 LifeStyle Store
                    </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        Sitemap 
                    </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        Cookies 
                    </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        Terms 
                    </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>Privacy </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        Security 
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default Footer