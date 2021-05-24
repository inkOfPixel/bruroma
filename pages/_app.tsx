import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "@theme";
import { AppProps } from "next/app";
import Head from "next/head";

const customTheme = extendTheme(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
