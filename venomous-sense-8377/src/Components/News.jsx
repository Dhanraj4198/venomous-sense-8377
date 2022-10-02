import { getHomeApi } from "../Api/HomeApi";
import { useState } from "react";
import { useEffect } from "react";
import {
  Grid,
  GridItem,
  Container,
  Image,
  Heading,
  Divider,
} from "@chakra-ui/react";
export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getHomeApi().then((res) => setNews(res.data.articles));
  }, []);
  return (
    <Container maxW={"50%"}>
      <Grid templateColumns={"repeat(1,1fr)"} gap={6}>
        {news.map((item) => (
          <GridItem _hover={{ cursor: "pointer" }}>
            <Image w={"full"} key={item.id} src={item.urlToImage} />
            <Heading noOfLines={1} textAlign={"left"} size={"md"} key={item.id}>
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
  );
}
