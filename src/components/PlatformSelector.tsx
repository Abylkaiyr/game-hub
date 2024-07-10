import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../services/store";



const PlatformSelector = () => {
  const { data: platform } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

  const selectedPlatform = usePlatform(selectedPlatformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {platform?.results.map((platform) => (
          <MenuItem
            onClick={() => {
              setPlatformId(platform.id);
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
