import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export interface DefaultLayoutProps {
  title: string;
}

export function DefaultLayout({
  children,
  title,
}: React.PropsWithChildren<DefaultLayoutProps>) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Box>
        <Header />
        <Box>{children}</Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
}
