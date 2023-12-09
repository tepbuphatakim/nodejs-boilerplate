import { authentication } from './auth.js';

export default function (app) {
  app.use(authentication);
}
