import React from "react";
import { Box, Button, Grid, Heading, Stack } from "@chakra-ui/react";
import styles from "../Styles/WomenHomePage.module.css";
import { Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../fw19_0144/component/navbar";

export const KidsHomePage = () => {
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
      {/* <Navbar/> */}
      {/* Yellow Part */}
      <Box p={1} color={"#ffffff"} bg={"#FAA619"}>
        <h2 className={styles.heading}>
          Get Flat 50% off + Extra 12% off | Use Code: SAVE12
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
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Kids_Desktop-1-08Nov2022.gif"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner2-desktop-Kids-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner3-desktop-Kids-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner4-desktop-Kids-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Kids-07Nov2022.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-Kids-07Nov2022.jpg"
              alt=""
            />
          </div>
        </Slider>
      </Box>

      {/* Children's Day Fest - 6 */}
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
            Children's Day Fest
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-U-1-Desktop-Kids-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-U-2-Desktop-Kids-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-U-3-Desktop-Kids-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-U-1-Desktop-Kids-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-U-2-Desktop-Kids-10Nov2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-U-3-Desktop-Kids-10Nov2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* value Picks - 6 text */}
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
            Value Picks
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-T-1-Desktop-Kids-02Nov2022.png"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-T-2-Desktop-Kids-02Nov2022.png"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-T-3-Desktop-Kids-27Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Under ₹399
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-T-4-Desktop-Kids-27Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Under ₹399
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-T-5-Desktop-Kids-27Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Under ₹699
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-T-6-Desktop-Kids-27Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Under ₹699
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* big boxes - 4 */}
      <Stack m={"auto"} w={"80%"} pt={"45px"}>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Kids-08Nov2022.jpg"
            alt=""
          />
        </Box>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-Kids-04Nov2022.gif"
            alt=""
          />
        </Box>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-4modblock-oneBythree-A-Kids-04Nov2022.jpg"
            alt=""
          />
        </Box>
        <Box p={"50px 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-8-Banner1-Kids-04Nov2022.jpg"
            alt=""
          />
        </Box>
      </Stack>

      {/* Shop By Age - 6 */}
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
            Shop By Age - Girls & Boys
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-S-1-Desktop-Kids-08June2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-S-2-Desktop-Kids-08June2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-S-3-Desktop-Kids-08June2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-S-4-Desktop-Kids-08June2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-S-5-Desktop-Kids-08June2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-S-6-Desktop-Kids-08June2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Shop By Department - 3 */}
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
            Shop By Department
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-2-Banner-1-Kids-30Aug2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-2-Banner-2-Kids-30Aug2022.jpg"
                alt=""
              />
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-2-Banner-3-Kids-30Aug2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Shop By Category- Girls & Boys - 12 */}
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
            Shop By Category- Girls & Boys
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-1-Desktop-Kids-24Aug2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-2-Desktop-Kids-24Aug2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹350
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-3-Desktop-Kids-24Aug2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹599
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-4-Desktop-Kids-24Aug2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-5-Desktop-Kids-24Aug2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-6-Desktop-Kids-30Aug2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-7-Desktop-Kids-30Aug2022.jpg"
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
            </Box>{" "}
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-8-Desktop-Kids-24Aug2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹349
              </Heading>
            </Box>{" "}
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-9-Desktop-Kids-24Aug2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹350
              </Heading>
            </Box>{" "}
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-10-Desktop-Kids-24Aug2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹599
              </Heading>
            </Box>{" "}
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-11-Desktop-Kids-24Aug2022.jpg"
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
            </Box>{" "}
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-12-Desktop-Kids-24Aug2022.jpg"
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
          </Grid>
        </Box>
      </Stack>

      {/* Trending Winter Styles - 6 */}
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
            Trending Winter Styles - Boys & Girls
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-V-1-Desktop-Kids-09Nov2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-V-2-Desktop-Kids-09Nov2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹599
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-V-3-Desktop-Kids-09Nov2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-V-4-Desktop-Kids-09Nov2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-V-5-Desktop-Kids-09Nov2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹599
              </Heading>
            </Box>
            <Box textDecoration={"none"} as={"a"} href="" pl={"8px"} pr={"8px"}>
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-V-6-Desktop-Kids-09Nov2022.jpg"
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
          </Grid>
        </Box>
      </Stack>

      {/* Top Trending Brands - Boys-6 */}
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
            Top Trending Brands - Boys
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Kids-18Oct2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-2-Desktop-Kids-18Oct2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-3-Desktop-Kids-04Nov2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-4-Desktop-Kids-04Nov2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-5-Desktop-Kids-18Oct2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-6-Desktop-Kids-18Oct2022.jpg"
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

      {/* Top Trending Brands - Girls-6 */}
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
            Top Trending Brands - Boys
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-1-Desktop-Kids-18Oct2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-2-Desktop-Kids-18Oct2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-3-Desktop-Kids-18Oct2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-4-Desktop-Kids-18Oct2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-5-Desktop-Kids-04Nov2022.jpg"
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
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-6-Desktop-Kids-18Oct2022.jpg"
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

      {/* Must Haves-3 */}
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
            Must Haves
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
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-3-Banner-1-Kids-03Aug2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-3-Banner-2-Kids-03Aug2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-3-Banner-3-Kids-03Aug2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Curated Styles-3 */}
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
            Curated Styles
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
                src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Kids-modularblock-one-img-26July2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Kids-modularblock-two-img-26July2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Kids-modularblock-three-img-08April2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Occasion Wear-3 */}
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
            Occasion Wear
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
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-6-Banner1-Kids-29July2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-6-Banner2-Kids-29July2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-6-Banner3-Kids-29July2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Pocket friendly store-3 */}
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
            Pocket friendly store
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
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-9-Banner1-Kids-22June2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-9-Banner2-Kids-22June2022.jpg"
                alt=""
              />
            </Box>
            <Box pl={"8px"} pr={"8px"}>
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-9-Banner3-Kids-22June2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Big Boxes - 1 */}
      <Stack m={"auto"} w={"80%"} pt={"45px"}>
        <Heading
          textAlign={"left"}
          fontWeight={"normal"}
          color={"#000000"}
          fontSize={"36px"}
          as={"h2"}
        >
          View All
        </Heading>
        <Box p={"0 0 56px 0"} borderBottom={"1px solid #ecedeb"}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock7-Banner1-Kids-22June2022.jpg"
            alt=""
          />
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
