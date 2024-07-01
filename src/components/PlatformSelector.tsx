import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelect: (platfrom: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelect, selectedPlatformId }: Props) => {
  const { data: platform } = usePlatforms();
  const selectedPlatform = platform?.results.find(
    (platform) => platform.id === selectedPlatformId
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {platform?.results.map((platform) => (
          <MenuItem
            onClick={() => {
              onSelect(platform);
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
