const mongoose = require("mongoose")
const User = require("./User")

//This is a clone folder

mongoose.connect("mongodb://localhost/testdb", () =>{
    console.log('Connected');
}, e =>console.error(e))

//=========================================
// run()
// async function run() {
// const user = await User.create({name: "Jim", age:18})
// // const user = new User(  {name: "Tom", age:18})
// // await user.save()
// console.log(user)
// }
// ===========================================
// update the users name, same code as above. Updating name from Jim to Sally.
// run()
// async function run() {
// const user = await User.create({name: "Jim", age:18})
// user.name = "Sally"
// await user.save()
// console.log(user)
// }
// ============================================

// run()
// async function run() {
//     try{
//     const user = await User.create({
//         name: "Cooper", 
//         email: "Nothing@gmail.com",
//         age:  4,
//         address: {
//         pincode: 1233,
//         street: "25th North",
//         city: " New England"
//         },


               
//         })
//         user.updatedat = 55,
//         await user.save()
//         console.log(user)

//     }catch(e) {
//         console.log(e.message);
//     }

// }

//===============================
// Without Validation

run()
async function run() {
    try{
   const user = await User.where("name").equals("Tom") 
   console.log(user);
    }catch(e) {
        console.log(e.message);
    }

}







