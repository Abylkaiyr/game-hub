import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/LogoMosh.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchQuery: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="5px">
      <Image src={Logo} alt="Mosh Hamedani" boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
