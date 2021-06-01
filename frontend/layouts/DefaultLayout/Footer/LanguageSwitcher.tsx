import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import * as React from "react";

export const LanguageSwitcher = () => (
  <FormControl w="auto" display="flex" alignItems="center">
    <FormLabel mb="1" fontSize="sm" fontWeight="normal">
      Lingua:
    </FormLabel>
    <Select
      w="120px"
      flexShrink={0}
      fontSize="inherit"
      fontWeight="bold"
      variant="unstyled"
      id="lang"
      name="lang"
      defaultValue="English (UK)"
    >
      <option value="Deutsch">Deutsch</option>
      <option value="English (UK)">English</option>
      <option value="English (EU)">Italiano</option>
    </Select>
  </FormControl>
);
