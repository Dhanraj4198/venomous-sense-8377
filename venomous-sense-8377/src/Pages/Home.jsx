import React from "react";

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Center,
  Flex,
  HStack,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { getHomeApi } from "../Api/HomeApi";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getHomeApi().then((res) => setNews(res.data.articles));
  }, []);
  return (
    <>
      <Container margin={"none"} maxW="60%">
        <Grid templateColumns={"500px 500px"} gap={40}>
          <GridItem>
            <Box>
              <Center>
                <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/zelenskyy_1_1200x768.jpeg?size=483:271" />
              </Center>
              <Heading as="h3" size="lg">
                Zelenskyy seeks fast-track membership of Nato as Putin annexes 4
                Ukrainian regions
              </Heading>
            </Box>
            <Flex>
              <Box w={"350px"}>
                <Center>
                  {" "}
                  <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Shashitharoor_0_1200x768.jpeg?size=237:133" />
                </Center>
                <Heading textAlign={"center"} size={"sm"}>
                  Not done on purpose, says Shashi Tharoor after he holds up
                  wrong map of India
                </Heading>
              </Box>
              <Box w={"350px"}>
                <Center>
                  <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/PFI_Cover_Photo.png?size=237:133" />
                </Center>
                <Heading size={"sm"}>
                  History of now banned Popular Front of India | Interactive
                </Heading>
              </Box>
            </Flex>
          </GridItem>
          <GridItem>
            <Box>
              <Heading size={"lg"}>TOP STORIES</Heading>
              <List
                spacing={3}
                fontSize={18}
                overflow="scroll"
                gap={6}
                textAlign="left"
                height={"450px"}
              >
                {news.map((item) => (
                  <ListItem _hover={{ cursor: "pointer" }}>
                    <Box key={item.id} borderBottom={"1px solid grey"}>
                      {item.title}
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>
          </GridItem>
        </Grid>
      </Container>
      <br />
      <br />
      <Container maxW={"60%"}>
        <Grid _hover={{cursor:'pointer'}} templateColumns={"repeat(3,1fr)"} gap={6}>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              MOVIES
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/1494597464-sh_1200x768.jpeg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
            Shankar Mahadevan calls Abhi Na Jao Chhod Kar the best composed song till now
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              TECHNOLOGY
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/whatsapp_reuters_2_1200x768.jpeg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              WhatsApp trick: How to read deleted messages
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              SPORTS
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/AP22273551136769_1200x768.jpeg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              PAK vs ENG: Babar equals Kohli’s record for fastest batter to 3000
              T20I runs
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              LIFESTYLE
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/female.jpg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Kerala folk singer wins National Award for Best Female Playback
              Singer
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              TRENDING
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/cat_(2).jpg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Netizens are in love with this viral video of a ‘strict’ cashier
              cat
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              INDIA
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Zakir_Naik_1200x768.jpeg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Staffer of Zakir Naik's foundation accused of getting youth to
              join ISIS acquitted
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              INDIA TODAY PODCASTS
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/IOD_India_Today_website_2.png?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              PFI Ban and What it Means for India’s Internal Security | In our
              Defence Ep 27
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              SCIENCE
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Nord_Stream_leak.jpeg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Nord Stream pipeline leak in Baltic Sea damages marine life,
              climate
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              BUSINESS
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/rupee_1200x768.jpeg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Rupee rises 37 paise to close at 81.36 against US dollar as RBI
              raises rates by 50 bps
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              TELEVISION
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/bb_16.jpg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Meet 14 confirmed Bigg Boss 16 contestants: Sajid Khan, Tina Datta
              to Ankit Gupta
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              WORLD
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/WhatsApp_Image_2022-09-30_at_2_1_1200x768.jpeg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Putin annexes 15% of Ukraine, Zelenskyy rushes for 'accelerated'
              Nato membership
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              AUTO
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/BMWXM1.jpg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              BMW debuts XM super-SUV with a 644bhp hybrid powertrain
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              EDUCATION TODAY
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/1_63_1200x768.png?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              NEET PG Counselling 2022: Round 1 seat allotment results to be out
              today
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              CITIES
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/IMG-20220930-WA0031_1200x768.jpeg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Seer defies police, takes samadhi in 7-feet deep pit in Bhopal |
              Video
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              HEALTH
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Untitled_design_-_2022-09-30T1_8.png?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              What is BED? All you need to know about binge-eating disorder
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              NEWS ANALYSIS
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Gandhi_family.jpeg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Gandhis still have a chance to project themselves as democracy's
              David | Views
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              INDIA TODAY INSIGHT
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Big_Story.jpg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Post the PFI ban, what is the BJP’s game plan to reach out to
              Muslims?
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              LAW
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Bombay_high_court_1_2.jpeg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              HC disposes Kirit Somaiya's plea seeking quashing of FIR filed
              against Shiv Sena workers
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              CRIME
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Screenshot__1009__1200x768.png?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Caught on cam: Quack dumps man’s body after he dies during
              treatment
            </Heading>
          </GridItem>
          <GridItem>
            <Heading textAlign={"left"} size={"md"}>
              FACT CHECK
            </Heading>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Cover_Modi_NDTV__1__1200x768.jpeg?size=370:208" />
            <Heading textAlign={"left"} size={"md"}>
              Fact Check: No, PM Modi did not rock his own boat on Gujarat
              coast, misleading tweet causes storm
            </Heading>
          </GridItem>
        </Grid>
      </Container>
      <br />
      <br />
      <Container maxW={"50%"}>
        <Grid templateColumns={"repeat(1,1fr)"} gap={6}>
          {news.map((item) => (
            <GridItem _hover={{ cursor: "pointer" }}>
              <Image w={"full"} key={item.id} src={item.urlToImage} />
              <Heading
                noOfLines={1}
                textAlign={"left"}
                size={"md"}
                key={item.id}
              >
                {item.title}
              </Heading>
              <br />
              <Heading noOfLines={2} textAlign={"left"} size={"sm"}>
                {item.content}
              </Heading>
              <br />
              <Heading textAlign={"left"} size={"xs"} color="red">
                India Today
              </Heading>
              <Divider orientation="horizontal" />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
}
