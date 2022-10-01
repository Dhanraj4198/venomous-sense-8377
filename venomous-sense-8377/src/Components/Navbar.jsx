import {
  Box,
  HStack,
  Center,
  Image,
  Icon,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import { FaUserAlt, FaShareAlt, FaBitcoin } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
export default function Navbar() {
  return (
    <>
      <Center borderTop={"1px"} color="gray.400" borderBottom={"1px"}>
        <Box>
          <HStack gap={8}>
            <Box _hover={{ color: "black" }} color={"gray.600"}>
              India Today
            </Box>
            <Box _hover={{ color: "black" }} color={"gray.600"}>
              Malayalam
            </Box>
            <Box _hover={{ color: "black" }} color={"gray.600"}>
              IndiaTodayNE
            </Box>
            <Box _hover={{ color: "black" }} color={"gray.600"}>
              Business Today
            </Box>
            <Box _hover={{ color: "black" }} color={"gray.600"}>
              DailyO
            </Box>
            <Box _hover={{ color: "black" }} color={"gray.600"}>
              Aaj Tak
            </Box>
            <Box _hover={{ color: "black" }} color={"gray.600"}>
              Lallantop
            </Box>
            <Box _hover={{ color: "black" }} color={"gray.600"}>
              Bangla
            </Box>
            <Box _hover={{ color: "black" }} color={"gray.600"}>
              GNTTV
            </Box>
            <Box _hover={{ color: "black" }} color={"gray.600"}>
              iChowk
            </Box>
            <Box _hover={{ color: "black" }} color={"gray.600"}>
              Reader's Digest
            </Box>
          </HStack>
        </Box>
      </Center>
      <Center gap={6} padding="20px">
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          to="/"
          end
        >
          <Box>NEWS</Box>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          to="/livetv"
          end
        >
          <Box>Live TV</Box>
        </NavLink>
        <NavLink to="/" end>
          <Box>
            <Image
              width={"200px"}
              objectFit="cover"
              src="https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?v=1.52"
            />
          </Box>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          to="/our-apps"
          end
        >
          <Box>APP</Box>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          to="/magazine"
          end
        >
          <Box>MAGAZINE</Box>
        </NavLink>
      </Center>
      <HStack>
        <Flex
          justifyContent={"space-between"}
          w={"full"}
          bg={"#a00606"}
          paddingLeft="5%"
          paddingRight={"10%"}
          alignItems="center"
        >
          <Box>
            <HStack gap={3}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active2 : styles.default2;
                }}
                to="/"
                end
              >
                <Box>HOME</Box>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active2 : styles.default2;
                }}
                to="/"
                end
              >
                <Box>MY FEED</Box>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active2 : styles.default2;
                }}
                to="/india"
                end
              >
                <Box>INDIA</Box>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active2 : styles.default2;
                }}
                to="/world"
                end
              >
                <Box>WORLD</Box>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active2 : styles.default2;
                }}
                to="/business"
                end
              >
                <Box>BUSINESS</Box>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active2 : styles.default2;
                }}
                to="/technology"
                end
              >
                <Box>TECH</Box>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active2 : styles.default2;
                }}
                to="/movies"
                end
              >
                <Box>MOVIES</Box>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active2 : styles.default2;
                }}
                to="/sports"
                end
              >
                <Box>SPORTS</Box>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active2 : styles.default2;
                }}
                to="/science"
                end
              >
                <Box>SCIENCE</Box>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active2 : styles.default2;
                }}
                to="/best-universities"
                end
              >
                <Box>BEST UNIVERSITIES</Box>
              </NavLink>
            </HStack>
          </Box>
          <Box>
            <HStack gap={4}>
              <Box>
                <HamburgerIcon w={8} h={10} color={"white"} />
              </Box>
              <Box>
                <Icon as={FaBitcoin} color="white" w={8} h={10} />
              </Box>
              <Box>
                <Icon
                  as={AiOutlineFundProjectionScreen}
                  color="white"
                  w={6}
                  h={8}
                />
              </Box>
              <Box>
                <Icon as={FaShareAlt} color={"white"} w={8} h={10} />
              </Box>
              <Box>
                <Search2Icon color={"white"} w={8} h={10} />
              </Box>
              <NavLink border={'none'} className={({ isActive }) => {
                  return isActive ? styles.active3 : styles.default3;
                }}
                to="/login"
                end  >
              <Box border >
                <Icon as={FaUserAlt}  w={8} h={10} />
              </Box>
              </NavLink>
              
            </HStack>
          </Box>
        </Flex>
      </HStack>
    </>
  );
}
