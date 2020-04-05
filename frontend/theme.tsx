export default {
  useCustomProperties: true,
  colors: {
    red: "#FD3333",
    indigo: "#6057d5",
    black: "#333333",
    green: "#02d4ab",
    yellow: "#f8f987",
    text: '#000',
    background: '#fff',
    primary: theme => theme.colors.red,
    secondary: theme => theme.colors.indigo,
    modes: {
      dark: {
        text: '#fff',
        background: '#222',
        primary: theme => theme.colors.red,
        secondary: theme => theme.colors.indigo,
      },
    },
  },
  fonts: {
    body:
      'IBM Plex Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    mono: 'IBM Plex Mono, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'IBX Plex Sans, inherit',
  },
  buttons: {
    primary: {
      cursor: 'pointer',
    }
  },
  page: {
    block: {
      mb: [1, 2],
      mt: [1, 2],
      mx: [1, 2]
    },
    width: {
      mx: 'auto',
      maxWidth: 800
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
    },
    h1: {
      fontSize: [4, 5, 6],
      color: 'primary',
    },
    a: {
      cursor: 'pointer',
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
  },
}