import { useEffect, useState } from "react";
import { getBusinessApi } from "../Api/BusinessApi";
import {
  Container,
  Box,
  Grid,
  GridItem,
  Heading,
  Button,
  Divider,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import News from "../Components/News";
export default function Business() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = (page) => {
    getBusinessApi({ page, limit: 12 })
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err))
      .finally(() => console.log("call complete"));
  };
  useEffect(() => {
    fetchData(page);
  }, [page]);
  return (
    <>
      <Container maxW={"60%"}>
        <Grid>
          {news.map((item) => (
            <GridItem>
              <Box padding={2}>
                <HStack>
                  <Image src={item.urlToImage} w={"200px"} />
                  <Box>
                    <Heading textAlign={"left"} size={"sm"}>
                      {item.title}
                    </Heading>
                    <Text textAlign={"left"}>{item.content}</Text>
                  </Box>
                </HStack>
              </Box>
              <Divider></Divider>
            </GridItem>
          ))}
        </Grid>
        <br />
        <br />
        <Button
          color={"red"}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <Button color={"red"}>{page}</Button>
        <Button
          color={"red"}
          disabled={page === 6}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Container>
      <br />
      <br />
      <News></News>
    </>
  );
}
