import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

const categories = [
    "Pants",
    "Dresses",
    "Jackets",
    "Sweaters"
]

export const Filters = () => {
    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categories
                </MenuButton>
                <MenuList>
                    {categories.map((category) => (
                        <MenuItem>{category}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </div>
    )
}
