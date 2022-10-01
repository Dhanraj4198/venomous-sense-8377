import { useEffect, useState } from "react";
import { getScienceApi } from "../Api/ScienceApi";
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
export default function Science() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = (page) => {
    getScienceApi({ page, limit: 12 })
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
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Button>{page}</Button>
        <Button disabled={page === 6} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Container>
    </>
  );
}
