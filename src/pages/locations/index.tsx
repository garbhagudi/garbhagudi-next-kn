import React from "react";
import Banner from "sections/location/banner";
import apolloClient from "lib/apollo-graphcms";
import { gql } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Locations = ({ branches }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ಶಾಖೆಗಳು | ಗರ್ಭಗುಡಿ IVF ಕೇಂದ್ರ</title>
        <meta name="title" content="Locations | GarbhaGudi IVF Centre" />
        <meta
          name="description"
          content="GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy"
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="Locations | GarbhaGudi IVF Centrea"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="Locations | GarbhaGudi IVF Centre"
        />
        <meta
          name="twitter:description"
          content="GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never end. We ceaselessly work to help you cherish the golden moment of holding your little bundles of joy."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_HN_wql2mm.jpg"
        />
      </Head>
      <div className="">
        <Banner branchTitle={""} />
        <h1 className="pt-10 lg:pt-16 text-center font-heading text-3xl lg:text-4xl font-bold">
          ನಮ್ಮ ಶಾಖೆಗಳು
        </h1>
        <div className="flex items-center justify-center flex-wrap max-w-7xl mx-auto gap-6 py-10 lg:py-16">
          {branches.map((items) => (
            <Link
              href={`locations/${items?.slug}`}
              key={items?.id}
              className="hover:shadow-2xl rounded-xl transition-all duration-150"
            >
              <div className="flex flex-col items-center justify-center border-2 border-brandPink rounded-xl overflow-hidden max-w-sm mx-auto">
                <div className="overflow-hidden">
                  <Image
                    src={items?.branchPicture?.url}
                    alt={items?.branch}
                    width={480}
                    height={100}
                    className="hover:scale-125 transition-all duration-500 overflow-hidden"
                  />
                </div>
                <div className="flex items-center justify-evenly w-full px-3 py-3 border-t-2 border-brandPink">
                  <div className="ml-4 font-heading font-bold text-xl">
                    {items?.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        branches {
          branchPicture {
            url
          }
          title
          slug
          id
        }
      }
    `,
  });

  return {
    props: {
      branches: data.branches,
    },
    revalidate: 180,
  };
};
