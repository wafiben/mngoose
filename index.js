const express = require("express");
const app = express();
const PORT = 7000;
const mongoose = require("mongoose");
const User = require("./Models/User");
const URL =
  "mongodb+srv://wafi:54900777@cluster0.wf3zh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.listen(PORT, () => {
  console.log(`sever is running on port  ${PORT}`);
});
mongoose.connect(URL).then(() => {
  console.log("the database is connected");
});
/* const userOne = new User({ name: "amin", age: 30 });
console.log(userOne);
userOne.save().then((data) => {
  console.log(`${data} is saved `);
});
const userTwo = new User({ name: "asma", age: 18 });
userTwo.save().then((data) => {
  console.log(`${data} is saved `);
});
const arrayOfUsers = [
  { name: "ali", age: 30 },
  { name: "oussama", age: 50 },
  { name: "karim", age: 24 },
];
User.create(arrayOfUsers); */
/* User.find().then((data) => {
  const users = data;
  console.log(users);
});
User.findOne({ name: "karim" }).then((data) => {
  console.log(data);
}); */
/* User.findOneAndUpdate(
  { _id: "61fea234344690493dbff7d8" },
  { name: "tamim", age: 47 },
  {
    new: true,
    upsert: true,
  }
).then(()=>{
    console.log('changed')
}) */
User.findByIdAndDelete({ _id: "61fea234344690493dbff7d5" }).then(() =>
  console.log("deleted")
);
User.remove().then(() => {
  console.log("all data are removed ");
});
