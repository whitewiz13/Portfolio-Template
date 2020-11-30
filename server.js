//Required Packages
const express = require('express');
const cors = require('cors'); 
const path = require('path');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Setting port for live project
const port = process.env.PORT || 3001;

//-------Build Code (Server React pages)------
const publicPath  = path.join(__dirname, 'client/build');
app.use(express.static(publicPath));

//-------Get methods---------
app.get('/', function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.get('/.well-known/pki-validation/D6DE5AEE3912E92CAA4FD1F2EB64CE18.txt',function(req,res){
    res.sendFile(path.join(publicPath,"/D6DE5AEE3912E92CAA4FD1F2EB64CE18.txt"));
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port,()=>{
    console.log("Server running at port : ",port);
});