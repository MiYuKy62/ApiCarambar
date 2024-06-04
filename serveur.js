const express = require('express')
const cors = require('cors');
const router = require('./routes/index')
const app = express()
const port = 3000
const version = 'v1'
const db = require('./db/database')
const swaggerDocument = require('./swagger.json');
const swaggerUi = require('swagger-ui-express')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/api/${version}`, router)

app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

db.sync().then(() => {
    console.log('DBConnect est synchronisé')
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
});
