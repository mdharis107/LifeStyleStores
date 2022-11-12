import React from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Box, Flex, Image } from "@chakra-ui/react";

const MensData = [
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000004479575-Var1105-White-White-1000004479575-Var1105_01-2100.jpg",
    price: "₹934",
    Sprice: "₹999",
    name: "LEVI'S Regular Fit Classic Logo Print Crew-Neck T-shirt",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010597203-Red-1000010597203_01-2100.jpg",
    price: "₹699",
    Sprice: "₹1,399",
    name: "JACK & JONES Men Solid Regular Fit Polo T-shirt",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010436368-Black-Black-1000010436368_01-2100.jpg",
    price: "₹1,299",
    Sprice: "",
    name: "KAPPA Men Solid Hooded T-shirt",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011152454-Blue-LightBlue-1000011152454_01-2100.jpg",
    price: "₹717",
    Sprice: "₹1,195",
    name: "FAHRENHEIT Men Striped Polo T-shirt",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008347599-Black-Black-1000008347599_01-2100.jpg",
    price: "₹2,209",
    Sprice: "₹2,599",
    name: "LEVI'S 513 Solid Regular Fit Jeans",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010436368-Blue-1000010436368-170122_01-2100.jpg",
    price: "₹1,299",
    Sprice: "",
    name: "KAPPA Men Solid Regular Fit Hooded T-shirt",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008443054-Black-BLACK-1000008443054_01-2100.jpg",
    price: "₹849",
    Sprice: "₹999",
    name: "FORCA Solid Slim Tapered Fit Jeans",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011177972-Grey-Grey-1000011177972_01-2100.jpg",
    price: "₹1,699",
    Sprice: "",
    name: "KAPPA Men Printed Elasticated Sports Joggers",
  },
  {
    img: "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011897391-Blue-Navy-1000011897391_01-2100.jpg",
    price: "₹1,049",
    Sprice: "",
    name: "U.S. POLO ASSN. Men Graphic Printed Crew Neck Regular Fit T-shirt",
  },
];

export function MenSlider() {
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
        {MensData.map((ele) => (
          <Box
            _hover={{ outline: "none" }}
            textDecoration={"none"}
            as={"a"}
            href={"/mens/products"}
            w={"full"}
            pl={"8px"}
            pr={"8px"}
          >
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
                30% OFF
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
}
