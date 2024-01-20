const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/relationshipDB')
    .then(() => console.log('DB connected'));

// one to few relationship
    const userSchema = new mongoose.Schema({
        name: String,
        age:Number,
        addresses: [
            {
                _id: false,
                // this line will stop creation of new id 
                lane: String,
                city: String,
                state: String,
                country: String
            }
        ],
      
    });

const User = mongoose.model('User', userSchema);

const makeUser = async() => {

    const user = new User({name: 'Harry', age: 22});
    await user.save();
    console.log(user);
    console.log('User created');
}

// makeUser();

async function addAddresses(id) {

    const user = await User.findById(id);

    user.addresses.push({
        lane:'B-598, Nirman Vihar', 
        city:'New Delhi',
        state: 'Delhi',
        country: 'India'
    });
    await user.save();
    //For saving the change we have made
    console.log(user);
}
addAddresses('65a7a7e568ad5f7e38a6bf99');