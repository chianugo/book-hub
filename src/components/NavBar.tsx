import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";

const NavBar = () => {
  return (
    <HStack>
      {/* TODO create webp logo */}
      <Image src={logo} boxSize={"60px"}></Image>
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
