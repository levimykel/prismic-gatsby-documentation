module.exports = {
  linkResolver(doc) {
    if (doc.type === 'page') {
      return `/${doc._meta.uid}`
    }
    if (doc.uid === 'number-page') {
      return '/rendering/number/number-full-example'
    } return '/'
  },
}
