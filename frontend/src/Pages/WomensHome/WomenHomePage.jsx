import React, { useEffect } from "react";
import styles from "../Styles/WomenHomePage.module.css";
import { Box, Button, Divider, Grid, Heading, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { SliderPage } from "./Slider";
import Slider from "react-slick";
import axios from "axios"

// const AutoplaySlider = withAutoplay(AwesomeSlider);
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WomenHomePage = () => {
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
    <div id={styles.all}>
      <Box p={1} color={"#ffffff"} bg={"#FAA619"}>
        <h2 className={styles.heading}>Lingerie & Nightwear From ₹ 299.</h2>
      </Box>

      <Box p={"32px 0 0 0 "} w={"80%"} m={"auto"} h={50}>
        <Slider {...settings}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-1-07Nov2022.gif"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktopp-2-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-3-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktopp-4-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Women-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-Women-08Nov2022.gif"
              alt=""
            />
          </div>
        </Slider>
      </Box>

      <Stack m={"auto"} w={"80%"} mt={"500px"}>
        <Box as={'a'} href={'/womens/products'} p={"0 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-9modblock-StripBanner2-D-08Nov2022.jpg"
            alt=""
          />
        </Box>

        <Divider />

        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Women-09Nov2022.gif"
            alt=""
          />
        </Box>
      </Stack>

      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Trending Ethnic Wear
          </Heading>
        </Box>
        <Box borderBottom={"1px solid #ecedeb"} pb={"35px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-1-Women-Desktop-08Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-2-Women-Desktop-08Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-3-Women-Desktop-08Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-4-Women-Desktop-08Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-5-Women-Desktop-03Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-6-Women-Desktop-03Nov2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
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
        <Box borderBottom={"1px solid #ecedeb"} pb={"35px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-D-09Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-E-09Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-F-09Nov2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Trending Ethnic Wear
          </Heading>
        </Box>
        <Box borderBottom={"1px solid #ecedeb"} pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-1-Women-Desktop-03Nov2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹699
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-4-Women-Desktop-03Nov2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹1399
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-3-Women-Desktop-03Nov2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹799
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-2-Women-Desktop-03Nov2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹599
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-5-Women-Desktop-03Nov2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹599
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-6-Women-Desktop-03Nov2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹629
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack m={"auto"} w={"80%"}>
        <Box p={"0 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Women-27Oct2022.jpg"
            alt=""
          />
        </Box>

        <Divider />

        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-StripBanner1-09Nov2022.jpg"
            alt=""
          />
        </Box>
      </Stack>

      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Trendy Bottom Wear
          </Heading>
        </Box>
        <Box borderBottom={"1px solid #ecedeb"} pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-1-Women-Desktop-07Oct2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹699
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-4-Women-Desktop-07Oct2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹1099
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-3-Women-Desktop-07Oct2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹499
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-2-Women-Desktop-07Oct2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹599
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-5-Women-Desktop-14Oct2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹299
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-6-Women-Desktop-14Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                From ₹399
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack m={"auto"} w={"80%"}>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock1-A-09Nov2022.jpg"
            alt=""
          />
        </Box>
      </Stack>

      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Trendy Bottom Wear
          </Heading>
        </Box>
        <Box borderBottom={"1px solid #ecedeb"} pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹299
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-1-Desktop-Women-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹499
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-12-Desktop-Women-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹699
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-2-Desktop-Women-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹1299
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-3-Desktop-Women-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                From ₹399
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-4-Desktop-Women-30Aug2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                From ₹499
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-5-Desktop-Women-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                From ₹299
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-6-Desktop-Women-24Aug2022AA.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                From ₹299
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-7-Desktop-Women-20Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                From ₹499
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-8-Desktop-Women-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                From ₹1495
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-10-Desktop-Women-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-11-Desktop-Women-24Aug2022A.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                From ₹199
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>
      {/* 6 */}
      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
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
        <Box borderBottom={"1px solid #ecedeb"} pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-23June2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-2-Desktop-Women-23June2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-3-Desktop-Women-23June2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-4-Desktop-Women-23June2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-5-Desktop-Women-06July2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-6-Desktop-Women-20Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-7-Desktop-Women-04Nov2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-8-Desktop-Women-29July2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-9-Desktop-Women-29July2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-10-Desktop-Women-29July2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-11-Desktop-Women-29July2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-12-Desktop-Women-29July2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up to 40% Off
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>
      {/* 3 */}
      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Activewear Essentials
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
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-A-Women-06Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-B-Women-06Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-C-Women-06Sep2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>
      {/* 6 */}
      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
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
        <Box borderBottom={"1px solid #ecedeb"} pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-1-Women-Desktop-29July2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                Up To 65% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-2-Women-Desktop-22June2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                Up To 65% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-3-Women-Desktop-22June2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                Flat 15% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-4-Women-Desktop-22June2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                Up To 70% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-5-Women-Desktop-05July2022.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-6-Women-Desktop-23June2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>
      {/* //6 */}
      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Trending Add-Ons
          </Heading>
        </Box>
        <Box borderBottom={"1px solid #ecedeb"} pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Women-Desktop-2AUG22.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                Up To 45% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-2-Women-Desktop-2AUG22.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                Up To 75% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-3-Women-Desktop-2AUG22.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                Flat 55% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-4-Women-Desktop-2AUG22.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                Up To 65% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-5-Women-Desktop-2AUG22.jpg"
                alt=""
              />
              <Heading
                color={"#000000"}
                fontWeight={"normal"}
                fontSize={"18px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-6-Women-Desktop-2AUG22.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"18px"}
              >
                Up To 50% Off
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Wardrobe Essentials
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
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-A-Women-12Sept2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-B-Women-06Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-C-Women-06Sep2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Curated For You
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
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-A-05Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-B-05Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-C-05Sep2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Trendsetters
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
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-A-Women-07Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-B-Women-07Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-C-Women-07Sep2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Most Loves Styles
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
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-A-Women-20Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-B-Women-20Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-C-Women-20Sep2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Editors Curated List
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
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modblock7-oneBythree-A-Women-08April2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modblock7-oneBythree-B-Women-08April2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modblock7-oneBythree-C-Women-08April2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
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
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Online Exclusive
          </Heading>
        </Box>
        <SliderPage />

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

      <Stack pt={"45px"} pb={"30px"} w={"80%"} m={"auto"}>
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Best Sellers
          </Heading>
        </Box>
        <Box borderBottom={"1px solid #ecedeb"} pb={"35px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(2, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-5modblock-oneBytwo1-C-Women-09yAug2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-5modblock-oneBytwo1-D-Women-09Aug2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

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
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-A-Women-04March2022A.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-B-Women-12April2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-C-Women-04March2022A.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>
    </div>
  );
};
