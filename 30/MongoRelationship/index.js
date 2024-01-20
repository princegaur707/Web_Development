const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/relationship')
    .then(() => console.log('DB Connected'));

const userSchema = new mongoose.Schema({
    name: String,
    age:Number,
    addresses: [
        {
            _id: { id: false },
            lane: String,
            city: String,
            state: String,
            country: String
        }
    ],
  
});


const User = mongoose.model('User', userSchema);

const makeUser = async()=> {
    
    const user = new User({ name: 'Vivek', age: 21 });
    await user.save();
    console.log('User Created')
    console.log(user);
  
}

// makeUser();


async function addAddress(id) {
    
    const user = await User.findById(id);

    user.addresses.push({
        lane: 'Mall Road',
        city: 'Shimla',
        state: 'Himachal Pradesh',
        country: 'India'
    });

    await user.save();
    console.log(user);

}

addAddress('65a7a8d62bd777aefa8fd07f');