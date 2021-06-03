import { PageData, usePagePlugin } from "@cms/plugins";
import { BlockData } from "@components/blocks";
import { heroBlock } from "@components/blocks/HeroBlock";
import {
  GetPages,
  GetPagesQuery,
  GetPagesQueryVariables,
  Maybe,
} from "@graphql/generated";
import { fetchGraphQL } from "@graphql/utils";
import { DefaultLayout } from "@layouts";
import { GetStaticPaths, GetStaticProps, PreviewData } from "next";
import React from "react";
import { InlineBlocks, InlineForm } from "react-tinacms-inline";

interface DynamicPageProps {
  path: string[];
  locale: string;
  preview: boolean;
  previewData?: PreviewData;
  pageData: PageData;
}

export default function DynamicPage({ pageData }: DynamicPageProps) {
  if (pageData == null) {
    return null;
  }
  const [_, form] = usePagePlugin(pageData);

  return (
    <InlineForm form={form}>
      <DefaultLayout title="Bruroma">
        <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
      </DefaultLayout>
    </InlineForm>
  );
}

const HOME_BLOCKS = {
  /** We will define blocks here later */
  hero: heroBlock,
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  // Get all pages from Strapi
  if (context.locales == null) {
    throw new Error("No locale has been defined!");
  }
  const allPagesRequests = context.locales.map(async (locale) => {
    const localePages = await fetchGraphQL<
      GetPagesQuery,
      GetPagesQueryVariables
    >(GetPages, {
      locale,
    });
    if (localePages.pages) {
      return filterListNullableItems(localePages.pages);
    }
    return [];
  });

  const allPages = await Promise.all(allPagesRequests);
  const pages = allPages.flat();

  const paths = pages.map((page) => {
    // Decompose the slug that was saved in Strapi
    const pagePath = page.path?.replace(/^\/+/, "") || "";
    const slugArray: any = pagePath.length > 0 ? pagePath.split("/") : false;

    return {
      params: { slug: slugArray },
      locale: page.locale!,
    };
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<
  DynamicPageProps | { notFound: boolean }
> = async (context) => {
  const pathParts = wrap(context.params?.slug || []);
  const path = `/${pathParts.join("/")}`;
  const locale = context.locale;
  if (locale == null) {
    throw new Error(`Path "${pathParts.join("/")}" has no locale!`);
  }
  const preview = context.preview === true;

  const localePages = await fetchGraphQL<GetPagesQuery, GetPagesQueryVariables>(
    GetPages,
    {
      locale,
      where: {
        path,
      },
    }
  );

  if (localePages.pages == null) {
    return {
      notFound: true,
    };
  }

  const pageData = getPageData(localePages.pages, locale);

  if (pageData == null) {
    return {
      notFound: true,
    };
  }

  if (preview) {
    return {
      props: {
        pageData,
        path: pathParts,
        locale,
        preview,
        previewData: context.previewData,
      },
    };
  }

  return {
    props: {
      pageData,
      path: pathParts,
      locale,
      preview,
    },
  };
};

function filterListNullableItems<T>(list: Maybe<T>[]): T[] {
  return list.filter((val) => val != null) as any;
}

function wrap<T>(value: T | T[]): T[] {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}

function getPageData(
  pages: GetPagesQuery["pages"],
  locale: string
): PageData | null {
  const page = pages?.find((page) => page?.locale === locale);
  if (page) {
    const blocks =
      page.sections?.map<BlockData | null>((section) => {
        if (section == null) {
          return null;
        }
        switch (section.__typename) {
          case "ComponentSectionHero": {
            return {
              _template: "hero",
              id: section.id,
              headline: section.title || null,
              subtext: section.description || null,
              image: section.image
                ? {
                    id: section.image.id,
                    altText: section.image.alternativeText || null,
                    url: section.image.url,
                  }
                : null,
            };
          }
          default:
            return null;
        }
      }) || [];
    return {
      id: page.id,
      path: page.path,
      title: page.title || undefined,
      blocks: filterListNullableItems(blocks),
    };
  }
  return null;
}
