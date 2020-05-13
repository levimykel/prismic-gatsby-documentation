module.exports = {
  linkResolver(doc) {
    if (doc.type === 'page') {
      return `/${doc._meta.uid}`
    }
    return '/'
  },
}
