import {
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { STRAPI_URL } from "@config/env";
import * as React from "react";
import {
  BlocksControls,
  Block,
  InlineTextarea,
  InlineImage,
} from "react-tinacms-inline";
import { BlockItemProps, BlockTemplateData } from "./types";

export type HeroBlockData = BlockTemplateData<{
  id: string;
  headline: Nullable<string>;
  subtext: Nullable<string>;
  image: Nullable<HeroImage>;
}>;

interface HeroImage {
  id: string;
  altText: Nullable<string>;
  url: string;
}

export interface HeroBlockProps {
  headline: string;
  subtext: string;
  image: Nullable<HeroImage>;
  isPreview: boolean;
}

export function HeroBlock({
  isPreview,
  headline,
  subtext,
  image,
}: HeroBlockProps) {
  return (
    <Box
      as="section"
      // bg={mode("gray.50", "gray.800")}
      pb="24"
      pos="relative"
      px={{ base: "6", lg: "12" }}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          maxW={{ lg: "md", xl: "xl" }}
          pt={{ base: "20", lg: "40" }}
          pb={{ base: "16", lg: "24" }}
        >
          <HStack
            className="group"
            px="4"
            py="2"
            bg={mode("gray.200", "gray.800")}
            rounded="full"
            fontSize="md"
            mb="8"
            display="inline-flex"
            color="gray.300"
          >
            <Box fontWeight="medium">Lavorazione acciaio inox</Box>
          </HStack>
          <Heading
            as="h1"
            size="3xl"
            lineHeight="1"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            {isPreview ? (
              <InlineTextarea name="headline" focusRing={false} />
            ) : (
              headline
            )}
          </Heading>
          <Text
            mt={4}
            fontSize="xl"
            fontWeight="medium"
            color={mode("gray.600", "gray.400")}
          >
            {isPreview ? (
              <InlineTextarea name="subtext" focusRing={false} />
            ) : (
              subtext
            )}
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing="4" mt="8">
            <Button
              size="lg"
              colorScheme="blue"
              height="14"
              px="8"
              fontSize="md"
            >
              Chiamaci
            </Button>
            <Button
              size="lg"
              bg="white"
              color="gray.800"
              _hover={{ bg: "gray.50" }}
              height="14"
              px="8"
              shadow="base"
              fontSize="md"
            >
              Scrivici una email
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        pos={{ lg: "absolute" }}
        insetY={{ lg: "0" }}
        insetEnd={{ lg: "0" }}
        bg="gray.50"
        w={{ base: "full", lg: "50%" }}
        height={{ base: "96", lg: "full" }}
        sx={{
          clipPath: { lg: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        }}
      >
        {isPreview ? (
          <InlineImage
            name="image.url"
            uploadDir={() => "/"}
            parse={(media) => media.id}
            previewSrc={(src, fieldPath, formValues) => {
              console.log({ src, fieldPath, formValues });
              return src;
            }}
          >
            {({ src }) => {
              console.log("src:", src);
              let imgSrc: string | undefined = undefined;
              if (src) {
                imgSrc = src.startsWith("http") ? src : `${STRAPI_URL}${src}`;
              }
              return (
                <Img
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  src={imgSrc}
                  alt="Lady working"
                />
              );
            }}
          </InlineImage>
        ) : image ? (
          <Img
            height="100%"
            width="100%"
            objectFit="cover"
            src={`${STRAPI_URL}${image.url}`}
            alt={image.altText || ""}
          />
        ) : null}
      </Box>
    </Box>
  );
}

export const heroBlock: Block = {
  Component: ({ index, data, name, ...other }) => {
    /**
     * Tina could use some improvements in the types that provides, since Block type does not allow
     * to customize itemProps, so we need to use this escape hatch
     */
    const itemProps: BlockItemProps = other as any;
    return (
      <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
        <HeroBlock {...data} isPreview={itemProps.isPreview} />
      </BlocksControls>
    );
  },
  template: {
    label: "Hero",
    defaultItem: {
      headline: "Suspended in a Sunbeam",
      subtext: "Dispassionate extraterrestrial observer",
    },
    fields: [],
  },
};
