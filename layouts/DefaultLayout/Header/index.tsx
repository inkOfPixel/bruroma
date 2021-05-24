import { Box, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import { NavContent } from "./NavContent";

export function Header() {
  return (
    <Box
      as="header"
      bg={mode("white", "rgba(24,24,27,0.5)")}
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
        <NavContent.Mobile display={{ base: "flex", lg: "none" }} />
        <NavContent.Desktop display={{ base: "none", lg: "flex" }} />
      </Box>
    </Box>
  );
}
