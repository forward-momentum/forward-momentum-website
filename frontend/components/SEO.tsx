import React, { Fragment } from "react"
import { useQuery } from '@apollo/react-hooks';
import graphql from 'graphql-tag';
import Head from "next/head";
import { filePath } from "../data/file";
import { useRouter } from 'next/router';

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
    const _websiteTitle = websiteTitle ? `${websiteTitle} | ${site?.websiteTitle}` : site?.websiteTitle
    const _twitterHandle = twitterHandle || site?.twitterHandle
    const _shareCardHeadline = shareCardHeadline || site?.shareCardHeadline
    const _shareCardDescription = shareCardDescription || site?.shareCardDescription
    const _shareCardImageUrl = shareCardImageUrl || `${filePath(shareCardImagePath || site?.shareCardImage?.url)}`

    const router = useRouter()
    const _url = process.env.SITE_URL + router.asPath || "https://www.fwdmomentum.org"

    return (
      <Head>
        <title key={`title`}>{_websiteTitle}</title>
        <meta key={`description`} name="description" content={_shareCardDescription} />
        {/*  */}
        <meta key={"og:title"} property="og:title" content={_shareCardHeadline} />
        <meta key={"og:description"} property="og:description" content={_shareCardDescription} />
        <meta key={"og:image"} property="og:image" content={_shareCardImageUrl} />
        <meta key={"og:url"} property="og:url" content={_url} />
        <meta key={"og:type"} property="og:type" content="website" />
        <meta key={"og:site_name"} property="og:site_name" content={_websiteTitle} />
        <meta key="og:locale" property="og:locale" content="en_GB" />
        {/*  */}
        <meta key={"twitter:card"} name="twitter:card" content="summary_large_image" />
        <meta key={"twitter:site"} name="twitter:site" content={_twitterHandle} />
        <meta key={"twitter:title"} name="twitter:title" content={_shareCardHeadline} />
        <meta key={"twitter:description"} name="twitter:description" content={_shareCardDescription} />
        <meta key={"twitter:image"} name="twitter:image" content={_shareCardImageUrl} />
      </Head>
    )
  }

export default SEO