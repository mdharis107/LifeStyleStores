import React from "react";
import { Box, Button, Grid, Heading, Stack } from "@chakra-ui/react";
import styles from "../Styles/WomenHomePage.module.css";
import { Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShoeSlider } from "./ShoeSlider";

export const ShoesHomePage = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      {/* Yellow Part */}
      <Box p={1} color={"#ffffff"} bg={"#FAA619"}>
        <h2 className={styles.heading}>
          Get Flat 30% + Extra 12% Off | Code : SAVE12
        </h2>
      </Box>

      {/* Slider */}
      <Box p={"32px 0 0 0 "} w={"80%"} m={"auto"} h={50}>
        <Slider {...settings}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Shoes_Desktop-1-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner2-desktop-ShoeandBags-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner3-desktop-ShoeandBags-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner4-desktop-ShoeandBags-09Nov2022.gif"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-ShoeandBags-09Nov2022.gif"
              alt=""
            />
          </div>
        </Slider>
      </Box>

      {/*  11.11 Deals - 6 */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        mt={"500px"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            11.11 Deals
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-Carousel7-1-Desktop-Shoes-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-Carousel7-2-Desktop-Shoes-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-Carousel7-3-Desktop-Shoes-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-Carousel7-4-Desktop-Shoes-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-Carousel7-5-Desktop-Shoes-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-Carousel7-6-Desktop-Shoes-10Nov2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Shop By Category - Footwear - 12 text */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Shop By Category - Footwear
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-1-Desktop-Shoes-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹499
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-2-Desktop-Shoes-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹399
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-3-Desktop-Shoes-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹499
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-4-Desktop-Shoes-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹649
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-5-Desktop-Shoes-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹299
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-6-Desktop-Shoes-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹999
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-7-Desktop-Shoes-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹799
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-8-Desktop-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹999
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-9-Desktop-Shoes-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹499
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-10-Desktop-Shoes-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹1499
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-11-Desktop-Shoes-24June2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹299
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-12-Desktop-Shoes-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹299
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* big boxes - 1 */}
      <Stack m={"auto"} w={"80%"} pt={"45px"}>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-stripBanner1-09Nov2022.gif"
            alt=""
          />
        </Box>
      </Stack>

      {/* Top Trending Brands - 12 */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Top Trending Brands
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-1-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-2-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-3-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-4-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-5-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-6-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-7-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-8-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-9-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-10-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-11-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-C-12-Desktop-Shoes-13Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* big boxes - 1 */}
      <Stack m={"auto"} w={"80%"} pt={"45px"}>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-shoes&bags-13modblock-oneBythree-A-10Nov2022.jpg"
            alt=""
          />
        </Box>
      </Stack>

      {/* Shop By Category- Bags & Accessories - 12 text */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Shop By Category- Bags & Accessories
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-LS-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹699
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-2-Desktop-LS-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹999
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-3-Desktop-LS-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹699
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-4-Desktop-LS-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹799
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-5-Desktop-LS-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹199
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-6-Desktop-LS-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹1299
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-7-Desktop-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹299
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-8-Desktop-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹999
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-9-Desktop-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹699
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-10-Desktop-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹499
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-11-Desktop-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹199
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-12-Desktop-Shoes-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹99
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>

{/* big boxes - 1 */}
      <Stack m={"auto"} w={"80%"} pt={"45px"}>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-shoes-9modularblock-A-27Oct2022.jpg"
            alt=""
          />
        </Box>
      </Stack>

      {/*  Shop By Size - UK - 6 */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        pt={"25px"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Shop By Size - UK
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-D-1-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-D-2-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-D-3-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-D-4-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-D-5-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-D-6-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

       {/*  Shop By Size - EURO - 6 */}
       <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        pt={"25px"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Shop By Size - EURO
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-E-1-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-E-2-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-E-3-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-E-4-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-E-5-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-E-6-Desktop-Shoes-27Oct2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

       {/* Most Loved Brands- 3 */}
       <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
           Most Loved Brands
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-modularblock5-oneBythree-G-Shoebags-03Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-modularblock5-oneBythree-H-Shoebags-07Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-modularblock5-oneBythree-I-Shoebags-03Nov2022.jpg"
                alt=""
              />
            </Box>
            
          </Grid>
        </Box>
      </Stack>

      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-S&B-9modblock-oneBythree-D-22Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-shoes&bags-9modblock-oneBythree-E-22Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-shoes&bags-9modblock-oneBythree-F-13Oct2022.jpg"
                alt=""
              />
            </Box>
            
          </Grid>
        </Box>
      </Stack>

      {/* big boxes - 1 */}
      <Stack m={"auto"} w={"80%"} pt={"45px"}>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-shoes-A-StripBanner1-27Oct2022A.jpg"
            alt=""
          />
        </Box>
      </Stack>

       {/*  Winter Footwear - 6 */}
       <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        pt={"25px"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Winter Footwear
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-F-1-Desktop-Shoes-02Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-F-2-Desktop-Shoes-02Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-F-3-Desktop-Shoes-02Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-F-4-Desktop-Shoes-02Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-F-5-Desktop-Shoes-02Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-PC-F-6-Desktop-Shoes-02Nov2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

        {/* Picks for all Occasions- 3 */}
        <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
           Picks for all Occasions
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-SM-desktop-department-modularblock-oneBytwo1A-ShBg-22Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-SM-desktop-department-modularblock-oneBytwo1B-ShBg-22Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-SM-desktop-department-modularblock-oneBytwo1C-ShBg-22Sep2022.jpg"
                alt=""
              />
            </Box>
            
          </Grid>
        </Box>
      </Stack>

       {/* Favourite Brands- 3 */}
       <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
           Favourite Brands
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-11modularblock-oneBythree-A-Shoebagss-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-11modularblock-oneBythree-B-Shoebagss-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-11modularblock-oneBythree-C-Shoebagss-10Nov2022.jpg"
                alt=""
              />
            </Box>
            
          </Grid>
        </Box>
      </Stack>

       {/* Top Picks- 3 */}
       <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
           Top Picks
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-desk-dept-modblk-1by3-A-03Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-desk-dept-modblk-1by3-B-21Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-desk-dept-modblk-1by3-C-21Sep2022.jpg"
                alt=""
              />
            </Box>
            
          </Grid>
        </Box>
      </Stack>

      
       {/* Highlights Of The Day- 3 */}
       <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
        Highlights Of The Day
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-10modularblock-oneBythree-A-ShoeBags-21Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-10modularblock-oneBythree-B-ShoeBags-21Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-10modularblock-oneBythree-C-ShoeBags-21Sep2022.jpg"
                alt=""
              />
            </Box>
            
          </Grid>
        </Box>
      </Stack>

       {/* Trending Now- 3 */}
       <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
        Trending Now
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-modularblock-oneBythree-D-Shoebags-21Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-modularblock-oneBythree-E-Shoebags-21Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={'100%'}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-department-modularblock-oneBythree-F-Shoebags-21Sep2022.jpg"
                alt=""
              />
            </Box>
            
          </Grid>
        </Box>
      </Stack>

      {/* big boxes - 1 */}
      <Stack m={"auto"} w={"80%"} pt={"45px"}>
      <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
          Travel Backpack Sale
          </Heading>
        </Box>
        <Box p={"0 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-SM-desktop-department-modularblock7-oneBythree-A-08March2022.jpg"
            alt=""
          />
        </Box>
      </Stack>

      <Stack
        borderBottom={"1px solid #ecedeb"}
        pt={"45px"}
        m={"auto"}
        w={"82%"}
      >
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"600"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
           Ginger - Min 40% off
          </Heading>
        </Box>
       
            <ShoeSlider/>
        <Box p={"32px 0 40px 0"}>
          <Button
            cursor={"pointer"}
            _hover={{ border: "1px solid #faa619" }}
            bg={"transparent"}
            fontSize={"14px"}
            color={"#faa619"}
            borderRadius={"2px"}
            p={"13px 10px 11px 10px"}
            w={296}
            border={"1px solid #D6D8F0"}
          >
            SEE ALL
          </Button>
        </Box>
      </Stack>

      {/* Shop by Department */}
      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Shop By Department
          </Heading>
        </Box>
        <Box borderBottom={"1px solid #ecedeb"} pb={"35px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-A-Men-04March2022A.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modblock11-Banner2-Kids-04March2022A.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Shoe-6modularblock-oneBythree-C-Shoe-04March2022A.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>
    </div>
  );
};
