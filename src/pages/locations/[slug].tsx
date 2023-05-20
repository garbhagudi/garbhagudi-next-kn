import React from "react";
import Banner from "sections/location/banner";
import TreatmentOptions from "sections/location/treatments";
import Cta from "sections/gg-care/cta";
import QuickLinks from "sections/location/quickLinks";
import VirtualTour from "sections/location/virtualTour";
import MapSection from "sections/location/mapSection";
import Head from "next/head";
import { useRouter } from "next/router";
import Loading from "components/Loading";
import graphcms from "lib/graphcms";

const Branch = ({ branch }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }
  const title = `${branch.title} | ಗರ್ಭಗುಡಿ IVF ಕೇಂದ್ರ`;
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={branch?.metaDescription} />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta property="og:description" content={branch?.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={branch?.branchPicture.url} />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta name="twitter:title" content={branch?.metaTitle} />
        <meta name="twitter:description" content={branch?.metaDescription} />
        <meta name="twitter:image" content={branch?.branchPicture.url} />
      </Head>
      <Banner branchTitle={branch.title} />
      <TreatmentOptions branch={branch?.title} />
      <MapSection
        maplink={branch?.mapLink}
        address={branch?.address}
        description={branch?.about?.raw?.children}
        doctors={branch?.doctors}
        title={branch?.title}
      />
      <Cta />
      {/* <Faq branch={branch?.title} /> */}
      <VirtualTour
        link1={branch?.virtualTourLink1}
        link2={branch?.virtualTourLink2}
        link3={branch?.virtualTourLink3}
      />
      <QuickLinks />
    </div>
  );
};

export default Branch;

export const getStaticProps = async ({ params }) => {
  const { branch } = await graphcms.request(
    `query ($slug: String!) {
        branch(where: { slug: $slug }) {
          branchPicture {
            url
          }
          title
          address
          about {
            raw
          }
          slug
          id
          mapLink
          branchPicture {
            url
          }
          virtualTourLink1
          virtualTourLink2
          virtualTourLink3
          doctors {
            id
            name
            slug
            designation
            qualification
            image {
              url
            }
          }
        }
      }`,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      branch,
    },
    revalidate: 180,
  };
};

export async function getStaticPaths() {
  const { branches } = await graphcms.request(`{
    branches {
      slug
      title
    }
  }`);

  return {
    paths: branches.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
