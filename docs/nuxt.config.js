import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E24F55'
  },
  loading: { color: '#0095D3' },
  pwa: {
    manifest: {
      name: 'Nuxt Attachment'
    }
  },
  router: {
    base: '/nuxt-attachment-module/'
  },
  target: 'static'
})
