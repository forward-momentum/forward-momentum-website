export const filePath = (path) => {
  if (process.env.NODE_ENV === 'production') {
    return path
  } else {
    return process.env.CMS_URL + path
  }
}