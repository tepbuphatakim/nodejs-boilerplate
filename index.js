import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import initMiddleware from './src/middlewares/index.js';
import initAssociation from './src/models/association.js';
import router from './src/routes/index.js';
import { errorHandler } from './src/middlewares/error.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

initMiddleware(app);
initAssociation();

app.use('/', router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
