import { useColorModeValue } from "@chakra-ui/react";
import { Variants } from "framer-motion";
import * as React from "react";
import { MotionBox, MotionBoxProps } from "./MotionBox";

export const NavMenu = React.forwardRef<HTMLDivElement, MotionBoxProps>(
  (props, ref) => (
    <MotionBox
      initial="init"
      variants={variants}
      outline="0"
      opacity="0"
      backdropBlur="8px"
      zIndex="10"
      sx={{ "--chakra-backdrop-blur": "blur(8px)" }}
      backdropFilter="auto"
      bg={useColorModeValue("white", "rgba(24,24,27,0.5)")}
      w="full"
      shadow="lg"
      px="4"
      pos="absolute"
      insetX="0"
      pt="6"
      pb="12"
      ref={ref}
      {...props}
    />
  )
);

const variants: Variants = {
  init: {
    opacity: 0,
    y: -4,
    display: "none",
    transition: { duration: 0 },
  },
  open: {
    opacity: 1,
    y: 0,
    display: "block",
    transition: { duration: 0.15 },
  },
  closed: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.1 },
    transitionEnd: {
      display: "none",
    },
  },
};
