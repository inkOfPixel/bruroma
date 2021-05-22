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
import { DefaultLayout } from "@layouts";
import * as React from "react";

export default function HomePage() {
  return (
    <DefaultLayout title="Bruroma">
      <Hero />
      <CallToAction />
    </DefaultLayout>
  );
}

function Hero() {
  return (
    <Box
      as="section"
      bg={mode("gray.50", "gray.800")}
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
            as="a"
            href="#"
            px="4"
            py="2"
            bg={mode("gray.200", "gray.700")}
            rounded="full"
            fontSize="md"
            mb="8"
            display="inline-flex"
            color="gray.600"
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
            Esperienza, innovazione e tecnologia all'avanguardia
            {/* <Box
              as="mark"
              color={mode("blue.500", "blue.300")}
              bg="transparent"
            >
              tecnologia all'avanguardia
            </Box> */}
          </Heading>
          <Text
            mt={4}
            fontSize="xl"
            fontWeight="medium"
            color={mode("gray.600", "gray.400")}
          >
            Situata nel nord est Italia, Bruroma é un' azienda leader nella
            lavorazione dell' acciaio inox che fa della qualità il suo punto di
            forza.
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
              Scrivici un email
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
        <Img
          height="100%"
          width="100%"
          objectFit="cover"
          src="/images/lasercut.jpeg"
          alt="Lady working"
        />
      </Box>
    </Box>
  );
}

function CallToAction() {
  return (
    <Box as="section">
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: "6", lg: "8" }}
        py={{ base: "16", sm: "20" }}
        textAlign="center"
      >
        <Heading
          as="h2"
          size="3xl"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          Hai in mente un progetto?
        </Heading>
        <Text mt="4" fontSize="lg">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </Text>
        <Button
          mt="8"
          as="a"
          href="#"
          size="lg"
          colorScheme="blue"
          fontWeight="bold"
        >
          Chiamaci
        </Button>
      </Box>
    </Box>
  );
}
