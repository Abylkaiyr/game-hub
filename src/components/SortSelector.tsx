import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../services/store";



export const sortingOptions = new Map();
sortingOptions.set("", "Relevance");
sortingOptions.set("-added", "Added Date");
sortingOptions.set("-released", "Released Date");
sortingOptions.set("-metacritic", "Popularity");
sortingOptions.set("-rating", "Average Rating");

const SortSelector = () => {
  const sortOrder = useGameQueryStore((state) => state.gameQuery.sortBy);
  const setSortBy = useGameQueryStore((state) => state.setSortBy);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {sortOrder ? sortingOptions.get(sortOrder) : "Relevance"}
      </MenuButton>
      <MenuList>
        {Array.from(sortingOptions).map(([key, value]) => (
          <MenuItem key={key} onClick={() => setSortBy(key)}>
            {value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
 
export default SortSelector;
