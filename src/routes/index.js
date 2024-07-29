// src/routes/index.js
import publicRoute from './public.js';
import authRoutes from './auth.js'

export default (app) => {
  app.use('/', publicRoute)
  app.use('/auth', authRoutes)
};