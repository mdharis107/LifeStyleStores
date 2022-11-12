import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function ProductsSlider({data}) {
//   const [data, setData] = useState([]);

  const settings = {
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 4,
    // arrows:true,
    // accessibility:true,
    // adaptiveHeight:true,
    nextArrow: <MdArrowForwardIos color="black" />,
    prevArrow: <MdArrowBackIos color="black" />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

//   useEffect(() => {
//     axios.get("https://lifestylestore-api-.up.railway.app/kids").then((res) => {
//       console.log(res.data.kid);
//       setData(res.data.kid);
//     });
//   }, []);

  return (

    <div>
      <Stack pt={'40px'} pb={'40px'} w={'80%'} m={'auto'}>
        <Slider {...settings}>
          {data.map((ele,index) => {
            if(index%3==0){
              return (
                <Box key={ele._id}  pl={"8px"} pr={"8px"}>
                  <Image position={"relative"} w={"300px"} src={ele.img} alt="" />
                  <Flex
                    fontWeight={"600"}
                    ml={"80px"}
                    mt={"-30px"}
                    position={"absolute"}
                    gap={10}
                    fontSize={"12px"}
                  >
                    <Box
                      borderRadius={"2px"}
                      opacity={"0.95"}
                      p={"5px 8.5px"}
                      bg={"white"}
                      color={"black"}
                    >
                      ONLINE EXCLUSIVE
                    </Box>
                    <Box
                      borderRadius={"2px"}
                      opacity={"0.95"}
                      p={"5px 8.5px"}
                      bg={"white"}
                      color={"black"}
                    >
                      {`${ele.discount}% OFF`}
                    </Box>
                  </Flex>
                  <Flex gap={5} alignItems={"center"} pt={12}>
                    <Box fontSize={"18px"} color={"#242428"}>
                      {`₹${ele.price}`}
                    </Box>
                    <Box
                      fontSize={"12px"}
                      color={"rgb(146, 147, 145)"}
                      textDecoration={"line-through"}
                    >
                      {`₹500`}
                    </Box>
                  </Flex>
                  <Box
                    textAlign={"left"}
                    fontWeight={"normal"}
                    fontSize={13}
                    pt={12}
                  >
                    {ele.name}
                  </Box>
                </Box>
              )
            }
          }
           )}
        </Slider>
      </Stack>
    </div>
  );
}
