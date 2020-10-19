let express = require("express");
let app = express();

//serve the full html
//??? why is this without get first? 
app.use('/', express.static('public'));

//whatever comes after signs/: is a REQUEST PARAMETER
//key is "signs" and value is "sign" whats after ":""  in the url (where you make request)
// app.get('/signs/:sign', (req, res) => {
//     // ??? req.params is an object
//     console.log(req.params.sign);
//     //store the value 
//     let user_sign = req.params.sign;
//     //object with requested info for user   
// });

//tell where to listen (address or port)this message (BIG EAR..) should show in the monitor/console
app.listen(3000, ()=> {
    console.log("BIG EAR at localhost 3000");
});
