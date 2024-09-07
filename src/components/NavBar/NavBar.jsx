// portfolio guide

import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  IconButton,
  useMediaQuery, //to select different screen sizes
} from "@chakra-ui/react";

//let's import from react router dom and navigate to other
//pages from the navbar
//we're gonnna use a hook called useNavigate

import { useNavigate } from "react-router-dom";

// let's import a Text styling
import { AiFillBook } from "react-icons/ai";

//let's import icons from reactbts
// import { BsBehance } from "react-icons/bs";

import React from "react";
// Okayy let's add an hamburger icon from chakra
import { HamburgerIcon } from "@chakra-ui/icons";

//let's add a grCatalog from react icons
//but i am alternatively adding openBook
//and we also have to import icon in the chakra library
import { GiOpenBook } from "react-icons/gi";

// color mode switcher
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
const NavBar = () => {
  //now lets call the navigate function then use it in the MenuItem
  const navigate = useNavigate();

  // more of like the Working Table
  // Creating variables w/Js that you can below
  //Using React HoOks , from its library below

  //let's copy some code line from chakra UI documentation
  const [Mobile] = useMediaQuery("(width <  800px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <>
      {/*more of like the Fiinished Product*/}

      {/* <Flex bg="gray.200" _dark={{ bg: "RGBA(255,255,255,0.48)" }} align={"center"}> */}
      <Flex
        bg="gray.200"
        _dark={{ bg: "gray.600" }}
        align={"center"}
        justifyContent={"space-between"}
      >
        {Mobile ? (
          <>
            {" "}
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant={"outline"}
              />

              <MenuList>
                <MenuItem
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About Me
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/work");
                  }}
                >
                  My works
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
            {/* let's just put something here and see what happens */}
            <Flex alignItems={"center"} gap={{ base: "1", sm: "2", md: "3" }}>
              {/* let's alternate this with AiFillBook below */}
              {/* <Icon
                as={GiOpenBook}
                color="gray.400"
                _dark={{ color: "blue.100" }}
              />
              <Icon as={BsBehance} /> */}

              {/* <Text as={AiFillBook} fontSize={["md", "lg", "x-large"]} color={"gray.400"} _dark={{color: "blue.200"}}></Text>  --let's get this of this array and paste what we have before*/}
              <Text
                as={AiFillBook}
                // fontSize={{ base: "15px", sm: "17px", md: "20px" }}
                // let's stick to what we have before
                fontSize={["md", "lg", "x-large"]}
                color={"gray.400"}
                _dark={{ color: "blue.200" }}
              ></Text>
              <Text
                // as={AiFillBook}
                fontSize={{ base: "15px", sm: "18px", md: "20px" }}
                fontWeight={"semibold"}
              >
                SG Portfolio
              </Text>
            </Flex>
            <ColorModeSwitcher />
          </>
        ) : (
          <Flex
            alignItems={"center"}
            borderBottom={"1px"}
            padding={"2px"}
            gap={"12rem"}
            fontSize={{ md: "18px", lg: "20px" }}
            justifyContent={"space-evenly"}
            cursor={"pointer"}
          >
            <Text
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Text>
            <Text
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Text>
            <Text
              onClick={() => {
                navigate("/work");
              }}
            >
              My works
            </Text>
            <ColorModeSwitcher />
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default NavBar;

// import React from "react";

// const NavBar = (props) => {
//   return (
//     <nav className={props.darkMode ? "dark" : ""}>
//       <img className="nav--logo_icon" src="./images/react-icon-small.png" />
//       <h3 className="nav--logo_text">ReactFacts</h3>

//       <div className="toggler">
//         <p className="toggler--light">Light</p>
//         <div className="toggler--slider" onClick={props.toggleDarkMode}>
//           <div className="toggler--slider--circle"></div>
//         </div>
//         <p className="toggler--dark">Dark</p>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
