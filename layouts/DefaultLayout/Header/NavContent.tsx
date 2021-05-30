import { Logo, Wordmark } from "@assets/svg";
import {
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  Icon,
  useDisclosure,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { HiPhone } from "react-icons/hi";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { Submenu } from "./Submenu";
import { ToggleButton } from "./ToggleButton";
import { links } from "./_data";

export interface NavContentProps extends FlexProps {
  onSubmenuOpen: () => void;
  onSubmenuClose: () => void;
}

const MobileNavContent = ({
  onSubmenuClose,
  onSubmenuOpen,
  ...flexProps
}: NavContentProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        {...flexProps}
      >
        <HStack>
          <Box flexBasis="6rem">
            <ToggleButton isOpen={isOpen} onClick={onToggle} />
          </Box>
          <Box as="a" rel="home">
            <VisuallyHidden>Bruroma</VisuallyHidden>
            <HStack>
              <Icon as={Wordmark} color="blue.500" h="20px" w="unset" />
            </HStack>
          </Box>
        </HStack>
        <Box visibility={{ base: "hidden", sm: "visible" }}>
          <Button as="a" leftIcon={<HiPhone />} colorScheme="blue">
            +39 0438 430376
          </Button>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? "open" : "closed"}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile
              key={idx}
              link={link}
              onOpen={onSubmenuOpen}
              onClose={onSubmenuClose}
            />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          )
        )}
      </NavMenu>
    </>
  );
};

const DesktopNavContent = ({
  onSubmenuOpen,
  onSubmenuClose,
  ...flexProps
}: NavContentProps) => {
  return (
    <Flex
      className="nav-content__desktop"
      align="center"
      justify="space-between"
      {...flexProps}
    >
      <Box as="a" href="#" rel="home">
        <VisuallyHidden>Bruroma</VisuallyHidden>
        <HStack>
          <Icon as={Logo} color="white" h="40px" w="unset" />
          {/* <Icon as={Wordmark} color="blue.500" h="20px" w="unset" /> */}
        </HStack>
      </Box>
      <HStack
        as="ul"
        id="nav__primary-menu"
        aria-label="Main Menu"
        listStyleType="none"
      >
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop
                link={link}
                onOpen={onSubmenuOpen}
                onClose={onSubmenuClose}
              />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="8" justify="space-between">
        <Button as="a" leftIcon={<HiPhone />} colorScheme="gray">
          +39 0438 430376
        </Button>
      </HStack>
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};
