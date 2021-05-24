import { ThemeOverride } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const styles: ThemeOverride["styles"] = {
  global: (props) => ({
    body: {
      background: mode("white", "gray.900")(props),
    },
  }),
};
