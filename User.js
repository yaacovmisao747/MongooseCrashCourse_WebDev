const mongoose = require("mongoose")

mongoose.set('strictQuery', true)

const userAddressSchema = new mongoose.Schema({
    pincode: String,
    city: String,
    street: String
})

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    age: {
        type: Number,
        required: true, 
        min:3,
        max:20,
        validate: {
            validator: v => v % 2 ===0,
            // message: props => `${props.value} is not even`
        }
    },
    address: userAddressSchema,
    updatedat: {
        immutable: true,
        type: Date,
        default: () => Date.now()
    }
    
})

module.exports = mongoose.model("UserP", userSchema)
// module.exports = mongoose.model("UserQ", userAddressSchema)
