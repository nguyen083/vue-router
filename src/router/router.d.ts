import 'vue-router'

// To ensure it is treated as a module, add at least one `export` statement

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    // isAdmin?: boolean
    // must be declared by every route
    // requiresAuth: boolean
    title: string
  }
}
