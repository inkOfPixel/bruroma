import { Button, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { STRAPI_URL } from "@config/env";
import { theme } from "@theme";
import Head from "next/head";
import * as React from "react";
import {
  StrapiClient,
  StrapiMediaStore,
  StrapiProvider,
} from "react-tinacms-strapi";
import { TinaCMS, TinaProvider, useCMS } from "tinacms";

const customTheme = extendTheme(theme);

export interface AppProvidersProps {
  preview: boolean;
}

export default function AppProviders({
  children,
  preview,
}: React.PropsWithChildren<AppProvidersProps>) {
  const cms = React.useMemo(
    () =>
      new TinaCMS({
        enabled: preview,
        toolbar: preview,
        apis: {
          strapi: new StrapiClient(STRAPI_URL),
        },
        media: new StrapiMediaStore(STRAPI_URL),
      }),
    []
  );
  return (
    <TinaProvider cms={cms}>
      <StrapiProvider onLogin={enterEditMode} onLogout={exitEditMode}>
        <ChakraProvider theme={customTheme}>
          <Head>
            <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
          </Head>
          {children}
          <EditButton />
        </ChakraProvider>
      </StrapiProvider>
    </TinaProvider>
  );
}

const enterEditMode = async () => {
  await fetch(`/api/preview`);
  window.location.href = window.location.pathname;
};

const exitEditMode = async () => {
  await fetch(`/api/reset-preview`);
  window.location.reload();
};

const EditButton = () => {
  const cms = useCMS();
  return (
    <Button
      position="fixed"
      right="4"
      bottom="4"
      onClick={() => (cms.enabled ? cms.disable() : cms.enable())}
    >
      {cms.enabled ? `Stop Editing ` : `Edit this Site `}
    </Button>
  );
};
