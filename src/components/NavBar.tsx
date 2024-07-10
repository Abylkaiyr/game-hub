import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/LogoMosh.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="5px">
      <Image src={Logo} alt="Mosh Hamedani" boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
