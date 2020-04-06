// Sharing URL functionality adapted from react-social-sharing
// https://github.com/SaraVieira/react-social-sharing
export function facebookShareUrl(link: string) {
  return `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
}

export function twitterShareUrl(link: string, message: string) {
  return `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
    message
  )}&url=${encodeURIComponent(link)}`;
}

export function whatsAppShareUrl(link: string, message: string) {
  return `whatsapp://send?text=${encodeURIComponent(
    message
  )}%20${encodeURIComponent(link)}`;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function emailShareUrl(link: string, subject: string, body?: string) {
  return `mailto:?subject=${encodeURIComponent(
    subject || ""
  )}&body=${encodeURIComponent((body && `${body}\n\n${link}`) || link)}`;
}