import graphql from 'graphql-tag';

export const PageFragment = graphql`
  fragment PageFragment on Page {
    slug
    title
    content {
      ... on ComponentSpecialSpecialVideoBlOck {
        backgroundImage {
          url
        }
        youtubeVideoID
      }
      # Page content
      ... on ComponentAtomsHeading {
        Size
        text
      }
      ... on ComponentAtomsRichText {
        value
        tableOfContents
      }
      ... on ComponentOrganismsLearnMoreButton {
        ...LearnMore
      }
      ... on ComponentAtomsImage {
        caption
        linkURL
        image {
          url
        }
      }
      ... on ComponentAtomsHtml {
        html
      }
      ... on ComponentOrganismsSignupStarter {
        ...SignupStarter
      }
      ... on ComponentOrganismsSignUpForm {
        title
      }
      # And composed page content in section form
      ... on ComponentSpecialPageSectionPicker {
        section {
          text
          textAlign
          background
          backgroundImage {
            url
          }
          content {
            ... on ComponentAtomsImage {
              caption
              linkURL
              image {
                url
              }
            }
            ... on ComponentAtomsHeading {
              Size
              text
              color: textColor
            }
            ... on ComponentAtomsRichText {
              value
              tableOfContents
            }
            ... on ComponentOrganismsLearnMoreButton {
              ...LearnMore
            }
            ... on ComponentOrganismsSignupStarter {
              ...SignupStarter
            }
            ... on ComponentOrganismsSignUpForm {
              title
            }
          }
        }
      }
    }
  }

  fragment LearnMore on ComponentOrganismsLearnMoreButton {
    label
    linkURL
    page {
      slug
    }
    textColor
    backgroundColor
  }

  fragment SignupStarter on ComponentOrganismsSignupStarter {
    description: title
    bg: backgroundColor
    textcolor: textColor
  }
`