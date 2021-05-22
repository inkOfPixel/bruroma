import { Logo, Wordmark } from "@assets/svg";
import {
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  Icon,
  useColorModeValue as mode,
  useDisclosure,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { Submenu } from "./Submenu";
import { ToggleButton } from "./ToggleButton";
import { links } from "./_data";

const MobileNavContent = (props: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        {...props}
      >
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box as="a" rel="home" mx="auto">
          <Icon as={Logo} color="blue.500" h="20px" w="100px" />
        </Box>
        <Box visibility={{ base: "hidden", sm: "visible" }}>
          <Button as="a" colorScheme="blue">
            Get Started
          </Button>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? "open" : "closed"}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          )
        )}
        <Button colorScheme="blue" w="full" size="lg" mt="5">
          Try for free
        </Button>
      </NavMenu>
    </>
  );
};

const DesktopNavContent = (props: FlexProps) => {
  return (
    <Flex
      className="nav-content__desktop"
      align="center"
      justify="space-between"
      {...props}
    >
      <Box as="a" href="#" rel="home">
        <VisuallyHidden>Bruroma</VisuallyHidden>
        <HStack>
          <Icon as={Logo} color="blue.500" h="40px" w="unset" />
          <Icon as={Wordmark} color="blue.500" h="20px" w="unset" />
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
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="8" minW="240px" justify="space-between">
        <Box
          as="a"
          href="#"
          color={mode("blue.600", "blue.300")}
          fontWeight="bold"
        >
          Sign In
        </Box>
        <Button as="a" href="#" colorScheme="blue" fontWeight="bold">
          Chiamaci
        </Button>
      </HStack>
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};
