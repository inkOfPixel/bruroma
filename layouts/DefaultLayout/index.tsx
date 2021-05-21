import { Box } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";

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
      <Box>{children}</Box>
    </React.Fragment>
  );
}
