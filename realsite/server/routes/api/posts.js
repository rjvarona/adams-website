const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Post
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});


// Add Post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.Status(201).send();
});



// Delete Post
router.delete(':/id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});



//connectiong stuff
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://elroiweick:elroiweick@cluster0-dhxyy.mongodb.net/test?retryWrites=true&w=majority', {
    usedNewParser: true

    });
    return client.db('test').collection('testcollection');
}



module.exports = router;

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