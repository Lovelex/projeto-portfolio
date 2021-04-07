import adminRoutes from '../router/admin'

export default {
  data: () => ({
    items: adminRoutes.children
  }),
}