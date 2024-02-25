const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true
    }
});
userSchema.plugin(passportLocalMongoose);
//This passport-local-mongoose package will eliminate the need to add username
//and password fields in the model

const User = mongoose.model('User', userSchema);

module.exports = User;
