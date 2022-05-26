import React from "react";
import graphcms from "lib/graphcms";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { useRouter } from "next/router";
import Share from "components/share";
import Loading from "components/Loading";

export const getStaticProps = async ({ params }) => {
  const { cause } = await graphcms.request(
    `
      query ($slug: String!) {
        cause(where: { slug: $slug }) {
          id
          title
          image {
            url
          }
          content {
            raw
            text
          }
        }
      }
    `,
    {
      slug: params.slug,
    }
  );
  return {
    props: {
      cause,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { causes } = await graphcms.request(
    `
        query{
          causes{
            title
            slug
          }
        }
      `
  );
  return {
    paths: causes.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

const CausePage = ({ cause }) => {
  return (
    <div>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-100"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1>
              <span className="mt-4 block text-2xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                {cause?.title}
              </span>
            </h1>
            <figure>
              <img
                className="w-full rounded-lg mt-10 mb-5"
                src={cause?.image?.url}
                alt={cause?.title}
                width={1310}
                height={873}
              />
            </figure>
            <div>
              <RichText content={cause?.content?.raw?.children} />
            </div>
            <Share pinmedia={cause?.image?.url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CausePage;
