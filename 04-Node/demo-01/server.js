import express from 'express';
const app = express();
const PORT = 5000;

// End points || Request URLs || Routes
// localhost:5000/
app.get("/",(request,response)=>{
    // do whatever
    response.send("home route")
})

app.get("/test", (request, response) => {
    response.json({ test: "test test" })
});

app.use((req,res)=>{
    res.status(404).json({message: "🚫 Route not found"})
})

app.listen(PORT,()=>{
    console.log('server is listening !!!!');
})