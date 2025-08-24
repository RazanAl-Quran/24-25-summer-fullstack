import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// import userRoutes from '../routes/users';

import userRoutes from './routes/users.js';

const app = express();
dotenv.config();
// 
// const PORT = 5000;
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


// home route
// localhost:5000/
app.get("/", (req, res) => {
    // res.send("🚀 Welcome to the Express API Server!");
    res.status(200).json({ message: "🚀 Welcome to the Express API Server!" });

});

app.use("/api/users", userRoutes);
// app.use("/api/admins", adminRoutes);


// let usersData = [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob", age: 30 }
// ];
// // get all users
// // localhost:5000/api/users/
// app.get('/api/users/',(req,res)=>{
//     res.json(usersData);
// }) 


// test route
// localhost:5000/test
// app.get("/test", (request, response) => {
//     response.json({ test: "test test" })
// });

app.use((req, res) => {
    res.status(404).json({ message: "🚫 Route not found" });
});


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);

})