const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const port = 3000;
var x = 3;
const app = express();


//Middleware
app.use(bodyparser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);





app.listen(port, () => console.log(`Example app listening on port ${port}!`));



