import React from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import apolloClient from "lib/apollo-graphcms";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import { useRouter } from "next/router";
import Loading from "components/Loading";
import Pagination from "components/pagination";

const limit = 6;

function BlogPage({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  blogs,
  aggregate,
}) {
  const router = useRouter();
  const title = `Blogs | Page ${currentPageNumber} | GarbhaGudi IVF Centre`;

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <div>
        <Head>
          {/* Primary Tags */}

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta
            name="description"
            content="Stay up to date with the advancements in the field of Infertility treatment, get pregnancy tips and more with our blogs written by our doctors"
          />

          {/* Open Graph / Facebook */}

          <meta property="og:title" content={title} />
          <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
          <meta property="og:url" content="https://garbhagudi.com" />
          <meta
            property="og:description"
            content="Stay up to date with the advancements in the field of Infertility treatment, get pregnancy tips and more with our blogs written by our doctors"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Blog_Index_nqj7cm.jpg"
          />

          {/* Twitter*/}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@garbhagudiivf" />
          <meta name="twitter:title" content={title} />
          <meta
            name="twitter:description"
            content="Stay up to date with the advancements in the field of Infertility treatment, get pregnancy tips and more with our blogs written by our doctors"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Blog_Index_nqj7cm.jpg"
          />
        </Head>
        <BreadCrumbs
          link1="/blogs/page/1"
          text1="Blogs"
          text2={`Page ${currentPageNumber}`}
          link2={`/blogs/page/${currentPageNumber}`}
          link3={""}
          text3={""}
          link4={""}
          text4={""}
        />
        <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl font-heading underline">
                ಬ್ಲಾಗ್‌ಗಳು
              </h1>
            </div>
            {/* <SearchComponent /> */}
            <div className="mt-12 max-w-xl mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none w">
              {blogs?.map((item: any) => (
                <div
                  key={item?.node?.id}
                  className="flex flex-col rounded-lg shadow-2xl overflow-hidden hover:translate-x-1 hover:translate-y-1 transition duration-200 hover:shadow-lg"
                >
                  <Link href={`/blogs/${item?.node?.slug}`} passHref>
                    <div className="flex-shrink-0">
                      <img
                        className="h-38 w-full object-contain rounded-t-lg cursor-pointer"
                        src={item?.node?.image?.url}
                        alt={item?.node?.title}
                      />
                    </div>
                  </Link>
                  <div className="flex-1 bg-gradient-to-bl from-pink-100 to-white via-pink-50 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <Link href={`/blogs/${item?.node?.slug}`} passHref>
                        <p className="text-lg font-semibold text-gray-900 cursor-pointer font-heading">
                          {item?.node?.title}
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <Link
                          href={`/fertility-experts/${item?.node?.doctor?.slug}`}
                          passHref
                        >
                          <div>
                            <span className="sr-only">
                              {item?.node?.doctor?.name}
                            </span>
                            <img
                              className="h-10 w-10 rounded-full"
                              src={item?.node?.doctor?.image?.url}
                              alt={item?.node?.doctor?.name}
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          <Link
                            href={`/fertility-experts/${item?.node?.doctor?.slug}`}
                          >
                            <div className="font-qs font-semibold">
                              {item?.node?.doctor?.name}
                            </div>
                          </Link>
                        </div>
                        <div className="flex space-x-1 text-sm text-gray-500 font-qs">
                          <time>{item?.node?.publishedOn}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Pagination
              currentPage={currentPageNumber}
              limitDefined={limit}
              nextPage={currentPageNumber + 1}
              previousPage={currentPageNumber - 1}
              total={aggregate.count}
              nextLink={`/blogs/page/${currentPageNumber + 1}`}
              previousLink={`/blogs/page/${currentPageNumber - 1}`}
              isNext={hasNextPage}
              isPrev={hasPreviousPage}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogPage;

export async function getStaticProps({ params }) {
  const { data } = await apolloClient.query({
    query: gql`
      query ($limit: Int!, $offset: Int!) {
        blogsConnection(
          orderBy: publishedOn_DESC
          first: $limit
          skip: $offset
        ) {
          blogs: edges {
            node {
              id
              title
              publishedOn
              slug
              image {
                url
              }
              doctor {
                slug
                name
                id
                image {
                  url
                }
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          aggregate {
            count
          }
        }
      }
    `,
    variables: {
      limit,
      offset: Number((params.page - 1) * limit),
    },
  });

  return {
    props: {
      currentPageNumber: Number(params.page),
      blogs: data.blogsConnection.blogs,
      aggregate: data.blogsConnection.aggregate,
      ...data.blogsConnection.pageInfo,
    },
    revalidate: 180,
  };
}

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        blogsConnection {
          aggregate {
            count
          }
        }
      }
    `,
  });
  function* numberOfPages({ total, limit }) {
    let page = 1;
    let offset = 0;
    while (offset < total) {
      yield page;
      page++;
      offset += limit;
    }
  }

  const paths = [
    ...numberOfPages({
      total: data.blogsConnection.aggregate.count,
      limit,
    }),
  ].map((page) => ({
    params: { page: String(page) },
  }));

  return {
    paths,
    fallback: true,
  };
};
