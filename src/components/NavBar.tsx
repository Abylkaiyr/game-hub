import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/LogoMosh.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="5px">
      <Link to="/">
      <Image src={Logo} alt="Mosh Hamedani" boxSize="60px" objectFit='cover' />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
