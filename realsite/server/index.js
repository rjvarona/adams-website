const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();


//Middleware
app.use(bodyparser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

const port = 3000;



app.listen(port, () => console.log(`Example app listening on port ${port}!`));