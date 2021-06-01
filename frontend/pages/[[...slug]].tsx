import { BlockData } from "@components/blocks";
import { heroBlock, HeroBlock } from "@components/blocks/HeroBlock";
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
import { InlineBlocks, InlineForm, InlineText } from "react-tinacms-inline";
import { useForm, usePlugin, FormOptions } from "tinacms";

interface DynamicPageProps {
  path: string[];
  locale: string;
  preview: boolean;
  previewData?: PreviewData;
  pageData: PageData;
}

// type PageData = NonNullable<NonNullable<GetPagesQuery["pages"]>[0]>;
interface PageData {
  title?: string;
  blocks: BlockData[];
}

export default function DynamicPage({
  path,
  locale,
  pageData,
}: DynamicPageProps) {
  if (pageData == null) {
    return null;
  }
  const formConfig: FormOptions<PageData> = {
    id: pageData.id,
    label: "Page",
    initialValues: pageData,
    onSubmit: () => {
      alert("Saving!");
    },
    fields: [],
  };
  const [page, form] = useForm<PageData>(formConfig);
  usePlugin(form);

  return (
    <InlineForm form={form}>
      <DefaultLayout title="Bruroma">
        <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
        {/* {pageData.sections?.map((section) => {
          if (section == null) {
            return null;
          }
          switch (section.__typename) {
            case "ComponentSectionHero": {
              return (
                <HeroSection
                  key={section.id}
                  title={page.title || undefined}
                  description={section.description || undefined}
                />
              );
            }
            default:
              return null;
          }
        })} */}
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
              headline: section.title || undefined,
              subtext: section.description || undefined,
            };
          }
          default:
            return null;
        }
      }) || [];
    return {
      title: page.title || undefined,
      blocks: filterListNullableItems(blocks),
    };
  }
  return null;
}
