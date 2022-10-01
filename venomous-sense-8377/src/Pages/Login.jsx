import {
  Container,
  Heading,
  Box,
  Image,
  Button,
  Checkbox,
  Text,
  Flex,
  Divider,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Center,
} from "@chakra-ui/react";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsKey } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
export default function Login() {
  return (
    <>
      <Container maxW={"70%"}>
        <Heading>Sign in to India Today</Heading>
        <br />
        <Flex justifyContent={"center"} gap={3}>
          <Text>Don't have an account?</Text>
          <Text color={"red"}>Sign Up Now</Text>
        </Flex>
        <br />
        <br />
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Divider width={"700px"} />
          <Heading color={"gray.300"} fontWeight={""}>
            Sign in via
          </Heading>
          <Divider width={"700px"} />
        </Flex>
        <br />
        <br />
        <Flex gap={6} justifyContent="center">
          <Button w={"300px"} fontSize="3xl" bg={"#1daee3"} color="white">
            <Icon as={VscTwitter} color="white" />
            Twitter
          </Button>
          <Button w={"300px"} bg={"#3b5998"} fontSize="3xl" color="white">
            {" "}
            <Icon as={FaFacebookF} color="white" /> Facebook
          </Button>
          <Button w={"300px"} fontSize="3xl">
            <Icon as={FcGoogle} />
            Google
          </Button>
        </Flex>
        <br />
        <br />
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Divider width={"500px"} />
          <Heading color={"gray.300"} fontWeight={""}>
            Or sign in using your email or mobile no.
          </Heading>
          <Divider width={"500px"} />
        </Flex>
        <br /><br />
        <Center>
          <Stack spacing={4}>
            <InputGroup size={"lg"}>
              <InputLeftAddon children={<Icon as={AiOutlineMail} />} />
              <Input
                w={"700px"}
                type="text"
                placeholder="Enter Your Email/Mobile"
              />
            </InputGroup>
            <InputGroup size="lg">
              <InputLeftAddon children={<Icon as={BsKey} />} />
              <Input
                w={"700px"}
                type={"password"}
                placeholder="Enter Your Password"
              />
            </InputGroup>
          </Stack>
        </Center>
        <br />
        <Flex marginLeft={'510px'} >
        <Checkbox>Remember me</Checkbox>
        </Flex>
        <br /><br />
        <Flex margin={' 0px 510px'} justifyContent={'space-between'} >
        <Text _hover={{cursor:"pointer"}} color={'blue'} fontWeight='bold' fontSize={'lg'} >Forgot password?</Text>
        <Text _hover={{cursor:"pointer"}} color={'blue'} fontWeight='bold' fontSize={'lg'} >Login via OTP</Text>
        </Flex>
        <br /><br />
       <Button bg={'#2369d6'} color='white' fontSize={'4xl'} w={'400px'} h={'60px'} >Login</Button>
      </Container>
    </>
  );
}
