import {
  Box,
  BoxProps,
  Button,
  Heading,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { DefaultLayout } from "@layouts";
import * as React from "react";
import {
  BsFillGridFill,
  BsPlusCircleFill,
  BsShieldLockFill,
  BsArrowRight,
} from "react-icons/bs";

export default function HomePage() {
  return (
    <DefaultLayout title="Bruroma">
      <Hero />
      <StatSection />
      <FeatureSection />
      <CallToAction />
    </DefaultLayout>
  );
}

function Hero() {
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
    <Box as="section" bg={mode("gray.50", "gray.800")}>
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

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}
export const Feature = (props: FeatureProps) => {
  const { icon, title, children } = props;
  return (
    <Box>
      <HStack spacing="3" color={mode("blue.500", "blue.300")}>
        <Box as={icon} fontSize="xl" />
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
      </HStack>
      <Text mt="3">{children}</Text>
    </Box>
  );
};

export function FeatureSection() {
  return (
    <Box as="section" py={{ md: "12" }}>
      <Box
        // bg={mode("gray.50", "gray.800")}
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "12", lg: "20" }}
        py={{ base: "12", md: "20" }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10">
          <Box>
            <Heading size="xl" mb="4" fontWeight="extrabold">
              Taglio laser fino a 40mm
            </Heading>
            <Text
              fontSize={{ md: "lg" }}
              mb="6"
              maxW="md"
              color={mode("gray.600", "gray.400")}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Button
              size="lg"
              colorScheme="blue"
              rightIcon={<BsArrowRight />}
              fontWeight="bold"
              fontSize="md"
              w={{ base: "full", sm: "auto" }}
            >
              Scopri di più
            </Button>
          </Box>
          <Img
            htmlWidth="500px"
            htmlHeight="320px"
            height={{ md: "320px" }}
            objectFit="cover"
            src="/images/lasercut-2.jpeg"
            alt="state of the art speaker"
          />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 3 }} mt="16" spacing="8">
          <Feature icon={BsFillGridFill} title="Very portable">
            Ut enim ad minim veniam, quis nostrud exercitation velit esse
            cillum.
          </Feature>
          <Feature icon={BsPlusCircleFill} title="High fidelity">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum.
          </Feature>
          <Feature icon={BsShieldLockFill} title="Private and secure">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa velit
            esse.
          </Feature>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

interface StatProps extends BoxProps {
  title: string;
  value: string;
}

export const Stat = (props: StatProps) => {
  const { title, value, ...rest } = props;
  return (
    <Stack
      direction="column-reverse"
      maxW="12rem"
      mx="auto"
      as="dl"
      textAlign="center"
      {...rest}
    >
      <Box
        as="dt"
        color={mode("gray.600", "whiteAlpha.700")}
        fontWeight="medium"
      >
        {title}
      </Box>
      <Box
        as="dd"
        fontSize="6xl"
        fontWeight="extrabold"
        color={mode("blue.500", "blue.300")}
      >
        {value}
      </Box>
    </Stack>
  );
};

export function StatSection() {
  return (
    <Box
      as="section"
      // maxW="7xl"
      mx="auto"
      px={{ base: "6", md: "8" }}
      py={{ base: "12", md: "20" }}
      bg={mode("white", "gray.800")}
    >
      <Box mb="12" textAlign="center">
        <Heading size="xl" fontWeight="extrabold" lineHeight="normal">
          Less overhead, more collaboration
        </Heading>
        <Text
          fontSize="lg"
          mt="4"
          fontWeight="medium"
          color={mode("gray.600", "whiteAlpha.700")}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim.
        </Text>
      </Box>
      <Stack
        spacing="8"
        direction={{ base: "column", md: "row" }}
        divider={<StackDivider />}
      >
        <Stat
          title="Anni di esperienza nella lavorazione dell'acciaio."
          value="40"
        />
        <Stat title="Brevetti depositati" value="3" />
        <Stat title="Settori applicativi" value="8" />
      </Stack>
    </Box>
  );
}
