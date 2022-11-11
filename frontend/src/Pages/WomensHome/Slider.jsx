import React from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Box, Flex, Image } from "@chakra-ui/react";

const womenData = [
  {
    "img":"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931576-Black-Black-1000011931576_01-2100.jpg",
    "price":"₹1,399",
    "Sprice":"₹1,199",
    "name":"GINGER Women Solid Bodycon Dress"
  },
  {
    "img":"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011768002-Red-Wine-1000011768002_01-2100.jpg",
    "price":"₹1,119",
    "Sprice":"₹1,599",
    "name":"MELANGE Women Printed Straight Kurta"
  },
  {
    "img":"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011940633-Black-Black-1000011940633_01-2100.jpg",
    "price":"₹1,679",
    "Sprice":"₹2,399",
    "name":"CODE Women Solid A-Line Dress"
  },
  {
    "img":"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931608-Purple-Purple-1000011931608_01-2100.jpg",
    "price":"₹1,819",
    "Sprice":"₹2,599",
    "name":"GINGER Women Printed Spaghetti A-Line Dress"
  },
  {
    "img":"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011768013-Green-Emerald-1000011768013_01-2100.jpg",
    "price":"₹1,119",
    "Sprice":"₹1,599",
    "name":"MELANGE Women Printed Straight Kurta"
  },
  {
    "img":"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931663-White-OffWhite-1000011931663_01-2100.jpg",
    "price":"₹1,819",
    "Sprice":"₹2,599",
    "name":"GINGER Women Striped Spaghetti A-Line Dress"
  },
  {
    "img":"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011767991-Green-Mint-1000011767991_01-2100.jpg",
    "price":"₹1,119",
    "Sprice":"₹1,599",
    "name":"MELANGE Women Printed Straight Kurta"
  },{
    "img":"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931652-White-OffWhite-1000011931652_01-2100.jpg",
    "price":"₹1,819",
    "Sprice":"₹2,599",
    "name":"GINGER Women Floral Printed Spaghetti Strap Fit and Flare Dress"
  },{
    "img":"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931210-White-OffWhite-1000011931210_01-2100.jpg",
    "price":"₹1,819",
    "Sprice":"₹2,599",
    "name":"GINGER Women Striped V Neck Sleeveless Playsuit"
  },{
    "img":"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011767936-Beige-Beige-1000011767936_01-2100.jpg",
    "price":"₹909",
    "Sprice":"₹1,299",
    "name":"MELANGE Women Solid A-line Kurta"
  },{
    "img":"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011767925-Blue-Blue-1000011767925_01-2100.jpg",
    "price":"₹909",
    "Sprice":"₹1,299",
    "name":"MELANGE Women Embroidered Three-Quarter Sleeve Straight Kurta"
  },

]

export function SliderPage() {
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

      {
        womenData.map((ele)=>
        <Box w={'full'}  pl={"8px"} pr={"8px"}>
          <Image
            position={"relative"}
            
            w={"300px"}
            src={ele.img}
            alt=""
          />
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
          <Flex gap={5} alignItems={'center'}  pt={12} >
            <Box fontSize={'18px'} color={'#242428'} >{ele.price}</Box>
            <Box fontSize={'12px'} color={'rgb(146, 147, 145)'} textDecoration={'line-through'} >{ele.Sprice}</Box>
          </Flex>
          <Box textAlign={'left'} fontWeight={'normal'} fontSize={13} pt={12}  >
          {ele.name}
          </Box>
        </Box>
        
        )
      }


        

       
      </Slider>
    </div>
  );
}
