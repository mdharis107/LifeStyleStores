import React from "react";
import styles from "../Styles/WomenHomePage.module.css";
import { Box, Button, Grid, Heading, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MenSlider } from "./MenSlider";

export const MenHomePage = () => {
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
        <h2 className={styles.heading}>Buy 1 Get 1 Free on Best of Brands</h2>
      </Box>

      <Box p={"32px 0 0 0 "} w={"80%"} m={"auto"} h={50}>
        <Slider {...settings}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Men_Desktop-1-09Nov2022.gif"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-2-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-3-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-4-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-MEN-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-MEN-07Nov2022.jpg"
              alt=""
            />
          </div>
        </Slider>
      </Box>

      <Stack pb={"30px"} w={"80%"} m={"auto"} mt={"500px"}>
        <Box>
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
        <Box borderBottom={"1px solid #ecedeb"} pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner4-men-Desktop-10Nov22.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner1-men-Desktop-10Nov22.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner2-men-Desktop-10Nov22.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner3-men-Desktop-10Nov22.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner5-men-Desktop-10Nov22.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC6-Banner6-men-Desktop-10Nov22.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack m={"auto"} w={"80%"} pt={"45px"}>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-Men-09Nov2022.gif"
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
            Value Picks
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner1-11Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Up to 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner2-11Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Up to 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner3-10Nov2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Up to 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner4-10Nov2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Up to 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner5-11Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Under ₹3,999
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner6-11Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Under ₹2,999
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
            Winterwear Essentials
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner1-08Nov2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                From ₹599
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner2-08Nov2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Under ₹1199
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner3-08Nov2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                From ₹899
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner4-08Nov2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                From ₹899
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner5-08Nov2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                From ₹1999
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC4-Men-banner6-08Nov2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"500"}
                fontSize={"16px"}
              >
                From ₹599
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
            Big Brands. Big Discounts
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner1-men-Desktop-19Oct2022.png"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Upto 40% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner2-men-Desktop-02Sep2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Upto 40% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner3-men-Desktop-02Sep2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Upto 50% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner4-men-Desktop-31Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Upto 50% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner6-men-Desktop-31Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Upto 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner5-men-Desktop-31Aug2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Upto 50% Off
              </Heading>
            </Box>

            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner7-men-Desktop-16Sep2022.png"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Upto 50% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner8-men-Desktop-16Sep2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Upto 50% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner9-men-Desktop-16Sep2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Upto 50% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner10-men-Desktop-16Sep2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Upto 40% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner11-men-Desktop-23Sep2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Flat 15% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner12-men-Desktop-16Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Upto 50% Off
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack m={"auto"} w={"80%"} pt={"45px"}>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-menstripbanner-07Nov2022A.png"
            alt=""
          />
        </Box>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-9modblock-StripBanner2-D-07Nov2022.jpg"
            alt=""
          />
        </Box>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-8modblock-oneBythree-D-07Nov2022.jpg"
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
            Shop By Category
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-1-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                From ₹299
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-2-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                From ₹699
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-3-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                From ₹699f
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-4-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                From ₹999
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-5-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                From ₹1495
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-6-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                From ₹499
              </Heading>
            </Box>

            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-7-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Upto 50% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-8-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                From ₹599
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                From ₹599
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-10-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                From ₹199
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-11-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                From ₹399
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-12-Desktop-Men-24Aug2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                From ₹499
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
            Shop By Category
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner1-22Oct2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Up To 50% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner2-22Oct2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Up To 50% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner3-22Oct2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Up To 30% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner4-22Oct2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Up To 40% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner5-22Oct2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner6-27Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Starting ₹299
              </Heading>
            </Box>

            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner7-22Oct2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Upto 50% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner8-22Oct2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Up To 50% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner9-22Oct2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Up To 30% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner10-22Oct2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={""} fontSize={"16px"}>
                Up To 30% Off
              </Heading>
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner11-22Oct2022.jpg"
                alt=""
              />
              <Heading color={"#000000"} fontWeight={"600"} fontSize={"16px"}>
                Up To 50% Off
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC1-Men-categorybanner12-22Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"400"}
                fontSize={"16px"}
              >
                Up To 30% Off
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack
        pb={"60px"}
        borderBottom={"1px solid #ecedeb"}
        m={"auto"}
        w={"80%"}
        pt={"45px"}
      >
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Flash Sale for Today
          </Heading>
        </Box>
        <Box>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-04Nov2022.jpg"
            alt=""
          />
        </Box>
      </Stack>

      <Stack
        borderBottom={"1px solid #ecedeb"}
        pt={"25px"}
        pb={"30px"}
        w={"80%"}
        m={"auto"}
      >
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
        <Box pb={"35px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-1-oneBythree-21June2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-2-oneBythree-21June2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-3-oneBythree-21June2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack
        borderBottom={"1px solid #ecedeb"}
        pt={"25px"}
        pb={"30px"}
        w={"80%"}
        m={"auto"}
      >
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Winter Trends
          </Heading>
        </Box>
        <Box pb={"25px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-A-Men-09Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-B-Men-10Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-C-Men-10Oct2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack
        borderBottom={"1px solid #ecedeb"}
        pt={"25px"}
        pb={"30px"}
        w={"80%"}
        m={"auto"}
      >
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Most Loved Styles
          </Heading>
        </Box>
        <Box pb={"25px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-1-oneBythreeA-07Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-2-oneBythreeA-24June20221.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-3-oneBythreeA-24June2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack
        borderBottom={"1px solid #ecedeb"}
        pt={"25px"}
        pb={"30px"}
        w={"80%"}
        m={"auto"}
      >
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Highlights of the Day
          </Heading>
        </Box>
        <Box pb={"25px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-1-oneBythree-24June2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-2-oneBythree-19July2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-3-oneBythree-24June2022.gif"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack
        borderBottom={"1px solid #ecedeb"}
        pt={"25px"}
        pb={"30px"}
        w={"80%"}
        m={"auto"}
      >
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
        <Box pb={"25px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-1-oneBythree-07Oct2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-2-oneBythree-16Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-3-oneBythree-16Sep2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      <Stack
        borderBottom={"1px solid #ecedeb"}
        pt={"25px"}
        pb={"30px"}
        w={"80%"}
        m={"auto"}
      >
        <Box>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Active Wardrobe
          </Heading>
        </Box>
        <Box pb={"25px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-1-oneBythree-16Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-2-oneBythree-16Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-3-oneBythree-16Sep2022.jpg"
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
            fontWeight={"600"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Deal Corner
          </Heading>
        </Box>
        <MenSlider />

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
            Most loved brands
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
                src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1C-Men-14July2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1D-Men-14July2022.jpg"
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
            Essentials For You
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
                src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-A-Men-12Sept2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-B-Men-06Mar2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-A-Men-04March2022A.jpg"
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
