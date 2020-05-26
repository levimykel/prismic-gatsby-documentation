module.exports = {
  linkResolver(doc) {
    if (doc.uid === "number-page") {
      return `/rendering/number/number-full-example`
    } else return '/'
  }
}
