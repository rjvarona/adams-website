const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const port = 3000;

const app = express();


//Middleware
app.use(bodyparser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);





app.listen(port, () => console.log(`Example app listening on port ${port}!`));



// //connecting to database
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://elroiweick:elroiweick@cluster0-dhxyy.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("testcollection");
// //   perform actions on the collection object

//     var ins = {name: 'ellie', email: 'yeet@gmail.com'};
//     collection.insertOne(ins, function(err, res){

//     });
//   client.close();
// });