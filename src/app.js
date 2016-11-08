var express = require('express');
var app = express();
var mongoose = require('mongoose');

// Connect to mongodb
var connect = function () {
    var options = {server: {socketOptions: {keepAlive: 1}}};
    mongoose.connect('mongodb://mongo/app', options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

require('./models/user');
const User = mongoose.model('User');

app.use(express.static('public'));

app.get('/hello', function (req, res) {
    res.send('world');
});

app.get('/newuser', function (req, res) {
   var newUser = User({
       name: 'User',
       email: 'user@example.com',
       hashed_password: 'salted password'
   });

    newUser.save(function(err){
        if (err) {
            console.log(err);
            res.json({status: 'ko', msg: err});
        } else {
            res.json({status: 'ok', msg: 'User has been created'});
        }
    });
});

app.get('/users', function (req, res) {
    User.find({}, function(err, users) {
        res.json({status: 'ok', users:users});
    });
});

app.listen(3000);