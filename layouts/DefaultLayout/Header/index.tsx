import {
  Box,
  useColorModeValue as mode,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { NavContent } from "./NavContent";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  React.useEffect(() => {
    console.log("isOpen", isOpen);
  }, [isOpen]);
  return (
    <Box
      as="header"
      transition="background 400ms"
      bg={mode("white", isOpen ? "gray.900" : "rgba(24,24,27,0.7)")}
      borderBottomWidth="1px"
      borderBottomColor="gray.800"
      backdropBlur="8px"
      sx={{ "--chakra-backdrop-blur": "blur(8px)" }}
      backdropFilter="auto"
      position="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="10"
    >
      <Box
        as="nav"
        aria-label="Main navigation"
        maxW="7xl"
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <NavContent.Mobile
          display={{ base: "flex", lg: "none" }}
          onSubmenuOpen={onOpen}
          onSubmenuClose={onClose}
        />
        <NavContent.Desktop
          display={{ base: "none", lg: "flex" }}
          onSubmenuOpen={onOpen}
          onSubmenuClose={onClose}
        />
      </Box>
    </Box>
  );
}
