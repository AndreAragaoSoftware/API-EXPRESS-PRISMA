// src/routes/index.js
import publicRoute from './public.js';

export default (app) => {
  app.use('/', publicRoute)
};