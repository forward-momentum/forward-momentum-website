export default {
  useCustomProperties: true,
  colors: {
    red: "#FD3333",
    paleRed: "#FA7171",
    indigo: "#6057d5",
    black: "#333333",
    green: "#02d4ab",
    yellow: "#f8f987",
    text: '#000',
    background: '#fff',
    primary: "#FD3333",
    secondary: "#6057d5",
    modes: {
      dark: {
        text: '#fff',
        background: '#222',
      },
    },
  },
  shadows: {
    box: '0px 5px 10px rgba(0,0,0,0.1)'
  },
  fonts: {
    body:
      'IBM Plex Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    mono: 'IBM Plex Mono, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'IBX Plex Sans, inherit',
  },
  text: {
    big: {
      fontSize: '1.3rem'
    }
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      bg: 'primary',
      color: 'white'
    }
  },
  page: {
    block: {
      mb: [1, 2],
      mt: [1, 2],
      mx: 3
    },
    width: {
      mx: 'auto',
      maxWidth: 800
    },
    narrow: {
      mx: 'auto',
      maxWidth: 500
    },
  },
  checkbox: {
    cursor: 'pointer',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    'vertical-align': 'middle',
    'font-size': '60px',
    'background': 'white',
    'border': '2px solid red',
    'width': '25px',
    'height': '25px',
    'border-radius': '20%',
    'display': 'inline-flex',
    'justify-content': 'center',
    'align-items': 'center',
    'flex-shrink': '0',
    'line-height': '1em',
    'margin-left': '0',
    'margin-right': '5px',
    '&:disabled': {
      'opacity': '0.25',
      'cursor': 'not-allowed',
    },
    '&:checked:after': {
      'content': '""',
      display: 'block',
      bg: 'red',
      'border-radius': '20%',
      'transform': 'translate(0, 0)',
      'height': '70%',
      'width': '70%',
      'line-height': '0',
    }
  },

  forms: {
    heading: {
      variant: 'headings.3',
      marginBottom: '0.5em',
      '* + &': {
        marginTop: '1em'
      }
    },
    error: {
      color: 'red',
      fontWeight: 500,
      mt: '0.1em',
      mb: '0.1em'
    },
    label: {
      transition: "all 250ms ease-in-out",
      variant: 'headings.5',
      marginTop: '1.25em',
      marginBottom: 1,
      checkboxOption: {
        display: 'block',
        margin: 2,
        marginLeft: 0,
        marginRight: 0,
        cursor: 'pointer',
        fontWeight: '400 !important',
        fontSize: 'inherit !important',
        letterSpacing: 'initial',
        '&:hover input': {
          bg: 'redTint'
        },
        '&:active input': {
          bg: 'darkred',
          borderColor: 'darkred'
        }
      }
    },
  },
  radio: {
    cursor: 'pointer',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    'vertical-align': 'middle',
    'font-size': '60px',
    'background': 'white',
    'border': '2px solid red',
    'width': '25px',
    'height': '25px',
    'border-radius': '100%',
    'display': 'inline-flex',
    'justify-content': 'center',
    'align-items': 'center',
    'flex-shrink': '0',
    'line-height': '1em',
    'margin-left': '0',
    'margin-right': '5px',
    '&:disabled': {
      'opacity': '0.25',
      'cursor': 'not-allowed',
    },
    '&:checked:after': {
      'content': '""',
      display: 'block',
      bg: 'red',
      'border-radius': '100%',
      'transform': 'translate(0, 0)',
      'height': '70%',
      'width': '70%',
      'line-height': '0',
    }
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