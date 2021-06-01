import { ThemeOverride } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { styles } from "./styles";

const config: ThemeOverride["config"] = {
  // @ts-ignore
  initialColorMode: "system",
  useSystemColorMode: true,
};

export const theme: ThemeOverride = {
  config,
  colors,
  styles,
};
