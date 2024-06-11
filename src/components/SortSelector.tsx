import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelect: (option: string) => void;
  selectedSort: string | null;
}

export const sortingOptions = new Map();
sortingOptions.set("", "Relevance");
sortingOptions.set("-added", "Added Date");
sortingOptions.set("-released", "Released Date");
sortingOptions.set("-metacritic", "Popularity");
sortingOptions.set("-rating", "Average Rating");

const SortSelector = ({ onSelect, selectedSort }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedSort ? selectedSort : "Sort by"}
      </MenuButton>
      <MenuList>
        {Array.from(sortingOptions).map(([key, value]) => (
          <MenuItem key={key} onClick={() => onSelect(key)}>
            {value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
