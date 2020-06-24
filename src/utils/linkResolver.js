module.exports = {
  linkResolver(doc) {
    const properties = doc._meta || doc
    if (doc.uid === "number-page") {
      return '/rendering/number/number-full-example'
    } if (doc.type === 'page') {
      return `/${properties.uid}`
    }
    return '/'
  },
}
