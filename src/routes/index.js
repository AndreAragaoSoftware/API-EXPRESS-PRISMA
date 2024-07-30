import publicRoutes from './public.js'
import privateRoutes from './private.js'

export default (app) => {
  app.use('/auth', publicRoutes)
  app.use('/api', privateRoutes)
}
