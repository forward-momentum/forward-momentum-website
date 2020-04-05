import React, { Fragment } from "react"
import { useQuery } from '@apollo/react-hooks';
import graphql from 'graphql-tag';
import Head from "next/head";

const QUERY_WEBSITE_INFO = graphql`
  query WebsiteInfoQuery {
    websiteInformation {
      websiteTitle
      twitterHandle
      shareCardHeadline
      shareCardDescription
      shareCardImage {
        url
      }
    }
  }
`

const SEO: React.FC<{
  shareCardHeadline?: string
  shareCardDescription?: string
  websiteTitle?: string
  twitterHandle?: string
  shareCardImageUrl?: string
  shareCardImagePath?: string
}> = ({
  shareCardHeadline,
  shareCardDescription,
  websiteTitle,
  twitterHandle,
  shareCardImageUrl,
  shareCardImagePath,
}) => {
    const { data, loading, error } = useQuery(QUERY_WEBSITE_INFO)

    const site = data?.websiteInformation
    const _websiteTitle = websiteTitle || site?.websiteTitle
    const _twitterHandle = twitterHandle || site?.twitterHandle
    const _shareCardHeadline = shareCardHeadline || site?.shareCardHeadline
    const _shareCardDescription = shareCardDescription || site?.shareCardDescription
    const _shareCardImageUrl = shareCardImageUrl || `${process.env.CMS_URL}${shareCardImagePath || site?.shareCardImage?.url}`

    return (
      <Head>
        <meta name="description" content={_shareCardDescription} />
        {/*  */}
        <meta property="og:title" content={_shareCardHeadline} />
        <meta property="og:description" content={_shareCardDescription} />
        <meta property="og:image" content={_shareCardImageUrl} />
        <meta property="og:url" content="https://www.fwdmomentum.org" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={_websiteTitle} />
        {/*  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={_twitterHandle} />
        <meta name="twitter:title" content={_shareCardHeadline} />
        <meta name="twitter:description" content={_shareCardDescription} />
        <meta name="twitter:image" content={_shareCardImageUrl} />
      </Head>
    )
  }

export default SEO