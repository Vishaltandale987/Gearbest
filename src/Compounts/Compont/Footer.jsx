import React from "react";
import { Box, HStack, VStack, Input, Select, Button, Spacer } from "@chakra-ui/react";
import {
  SiFacebook,
  SiMessenger,
  SiPinterest,
  SiInstagram,
  SiTumblr,
  SiWhatsapp,
  SiGmail
} from "react-icons/si";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <div style={{"position":"static", "bottom":"0", marginTop:"2em"}}>
      <Box pl="1em">
        <HStack>
          <p style={{ color: "gray" }}>
            <b>Newsletter </b>{" "}
          </p>
          <Input
            placeholder="Enter Email"
            size="sm"
            w="20em"
            border="1px"
            borderColor="black.400"
            _hover="none"
            style={{
              marginLeft: "10px",
            }}
          />
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              borderC: "none",
              width: "5em",
              height: "2em",
              marginLeft: "-1px",
            }}
          >
            Button
          </button>

          <Box pl="20em">
            <HStack>
              <SiFacebook />
              <SiMessenger />
              <AiFillYoutube />
              <SiPinterest />
              <AiOutlineTwitter />
              <SiGmail/>
              <SiInstagram />
              <SiTumblr />
              <SiWhatsapp/>
            </HStack>
          </Box>
        </HStack>

        <Box mt="1em" align="top" >
          <HStack gap="6em">
            <Box ml="1em" align="left" >
              <VStack align="left" style={{ "fontSize":"0.8em"}} gap="-1em">
                <h2>
                  <b>Company Information</b>
                </h2>
                <p align="left" >About Us</p>
                <p align="left">Top Searches</p>
                <p align="left">Privacy Policy</p>
                <p align="left">Terms and Conditions</p>
                <p align="left">Intellectual Property Policy</p>
                <p align="left">Testimonials</p>
                <p align="left">Contact Us</p>
                <p align="left">Testimonials</p>
                <p align="left">Report Security Issue</p>
                <p align="left">Sell on Gearbest</p>
                <p align="left">Cookies Policy</p>
                <p align="left">Top Brands</p>
                <p align="left">Gearbest Official Blog</p>
              </VStack>
            </Box>

            <Box mt="5em" align="left"  style={{"marginTop":"-3.4em"}}>
              <VStack align="left" style={{ "fontSize":"0.8em"}} gap="-1em">
                <h2>
                  <b>Customer Service</b>
                </h2>
                <p align="left">Shipping Information</p>
                <p align="left">My Favorites</p>
                <p align="left">FAQ For Newsletter Subscription</p>
                <p align="left">My Points</p>
                <p align="left">Warranty and Return</p>
                <p align="left">Payment Methods</p>
                <p align="left">Deposit Expansion</p>
                <p align="left">FAQ & Support</p>
                <p align="left">Sitemap</p>
                <p align="left">Gearbest Wallet Instruction</p>
                <p align="left">FAQs about COVID-19</p>
                <Spacer/>
              </VStack>
            </Box>

            <Box ml="-5em" align="left"  style={{"marginTop":"-19em"}} >
              <VStack align="left" style={{ "fontSize":"0.8em"}} gap="-1em">
                <h2>
                  <b>Other Business</b>
                </h2>
                <p align="left">Partnership Programs</p>
                <p align="left">Associate Program</p>
              </VStack>
            </Box>

            <Box ml="-5em" align="left"  style={{"marginTop":"-16em"}}>
              <VStack align="left" style={{ "fontSize":"0.8em"}} gap="-1em">
                <h2>
                  <b>Download App!</b>
                </h2>
                <p align="left">Save $3 with App & New User Only</p>
                <Box>
                    <HStack>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" style={{"width":"5em"}} />
                        <img src="https://seeklogo.com/images/A/app-store-google-play-logo-4A2747BF5E-seeklogo.com.png" alt=""  style={{"width":"5em"}} />
                    </HStack>
                </Box>
              </VStack>
            </Box>
          </HStack>
        </Box>

            <Box pl="8em" mt="1em" >
                <HStack gap="0.5em" style={{"width":"4em"}}>
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png" alt=""  />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/rese.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ya.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/d.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/qiwi.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png" alt="" />
                </HStack>
            </Box>

            <Box pl="15em" mt="1em">
                <HStack gap="0.5em" style={{"width":"3em"}}>
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/webmoney.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/bo.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/postepay.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/giropay.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/sofort.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/eps.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/p.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/pago.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/Visa-Logo.png" alt="" />
                    <img src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/m-Logo.png" alt="" />
                    
                </HStack>
            </Box>




      </Box>
    </div>
  );
}

export default Footer;
