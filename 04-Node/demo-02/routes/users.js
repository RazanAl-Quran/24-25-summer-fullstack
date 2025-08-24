import express from 'express';


let usersData = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];


const userRoutes = express.Router();

// get all users : READ
// localhost:5000/api/users/
userRoutes.get('/',(req,res)=>{
    res.json(usersData);
}) 


// GET user by ID
// localhost:5000/api/users/2
userRoutes.get("/:id2", (req, res) => {
    // const user = usersData.find(u => u.id == req.params.id);
    // user ? res.json(user) : res.status(404).json({ message: "User not found" });
    const user = usersData.find((user) => {
        if (user.id == req.params.id2) {
            return user;
        }
    });
    if (user) {
        return res.json(user);
    } else {
        return res.status(404).json({ message: "User not found" });
    }

});

// POST create user
userRoutes.post("/", (req, res) => {
    // const newUser = { id: Date.now(), ...req.body };
    // or 
    const newUser = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age
    };
    usersData.push(newUser);
    res.status(201).json(newUser);
});

// DELETE user
userRoutes.delete("/:id", (req, res) => {
    const index = usersData.findIndex(u => u.id == req.params.id);
    if (index !== -1) {
        const removed = usersData.splice(index, 1);
        res.json(removed[0]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// PUT update user
userRoutes.put("/:id", (req, res) => {
    const index = usersData.findIndex(u => u.id == req.params.id);
    if (index !== -1) {
        usersData[index] = { ...usersData[index], ...req.body };
        res.json(usersData[index]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

export default userRoutes;
