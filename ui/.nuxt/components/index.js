export { default as AlertsAlert } from '../../components/alerts/alert.vue'
export { default as BooksViewer } from '../../components/books/BooksViewer.vue'
export { default as BooksListsViewer } from '../../components/books/ListsViewer.vue'
export { default as Footer } from '../../components/footer/Footer.vue'
export { default as LoginAuthForm } from '../../components/login/AuthForm.vue'
export { default as NavNavbar } from '../../components/nav/Navbar.vue'
export { default as TableList } from '../../components/table/Table-list.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
