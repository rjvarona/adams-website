const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

mongoose.connection.once('open', function(){
    console.log('hello');
}).on('error', function (error){
    console.log('Connection error:', error);
});