import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Box, Flex, Image } from "@chakra-ui/react";

const ShoeData = [
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011541074-BLACK-1000011541074_01-2100.jpg",
    price: "₹1,359",
    Sprice: "₹1,599",
    name: "GINGER Women Stone Embellished Ballerinas",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010934761-GREY-1000010934761_01-2100.jpg",
    price: "₹999",
    Sprice: "₹1,999",
    name: "GINGER Women Suede Pointed Toe Slingback Flats",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011451301-Beige-1000011451301_01-2100.jpg",
    price: "₹1,359",
    Sprice: "₹1,599",
    name: "GINGER Women Embroidered Ballerina Flats",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010934836-BLUENAVYDENIM-1000010934836_01-2100.jpg",
    price: "₹999",
    Sprice: "₹1,999",
    name: "GINGER Women Solid Mules",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011541074-BLACK-1000011541074_01-2100.jpg",
    price: "₹1,359",
    Sprice: "₹1,599",
    name: "GINGER Women Stone Embellished Ballerinas",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010874222-Beige-1000010874222_01-2100.jpg",
    price: "₹799",
    Sprice: "₹1,599",
    name: "GINGER Women Textured Ballerinas",
  }
];

export const ShoeSlider = () => {
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

  return (
    <div>
      <Slider {...settings}>
        {ShoeData.map((ele) => (
          <Box w={"full"} pl={"8px"} pr={"8px"}>
            <Image position={"relative"} w={"300px"} src={ele.img} alt="" />
            <Flex
              fontWeight={"600"}
              // ml={"80px"}
              mt={"-30px"}
              position={"absolute"}
              gap={10}
              fontSize={"12px"}
             justify={'space-between'}
            >
              <Box
                borderRadius={"2px"}
                opacity={"0.95"}
                p={"5px 8.5px"}
                bg={"white"}
                color={"black"}
               ml={'10px'}

              >
                EXTRA 8% OFF
              </Box>
              <Box
                borderRadius={"2px"}
                opacity={"0.95"}
                p={"5px 8.5px"}
                bg={"white"}
                color={"black"}
                ml={'95px'}
              >
                15% OFF
              </Box>
            </Flex>
            <Flex gap={5} alignItems={"center"} pt={12}>
              <Box fontSize={"16px"} fontWeight={"600"} color={"#242428"}>
                {ele.price}
              </Box>
              <Box
                fontSize={"12px"}
                color={"rgb(146, 147, 145)"}
                textDecoration={"line-through"}
              >
                {ele.Sprice}
              </Box>
            </Flex>
            <Box textAlign={"left"} fontWeight={"normal"} fontSize={13} pt={12}>
              {ele.name}
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};
