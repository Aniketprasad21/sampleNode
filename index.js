const express = require('express');
const app = express();

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    if(email==="aniketprasad211299@gmail.com" && password==="Aniket@21"){
        return res.send({login: "success"})
    }
})

app.get("/", (req, res) => {
    return res.send({success: true, msg: "App is running successfully"})
})

app.listen(5000, () => {
    console.log("App is running")
})