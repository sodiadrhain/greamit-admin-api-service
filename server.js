'use strict';
const dotenv = require('dotenv');
dotenv.config();
let getConfig = require('./app/config/config');

require('./app/routes/route');

// app.post('/update',async (req,res) => {
//   let docRef=db.collection('users').doc(req.body.uID)
//   await docRef.update({
//     country:req.body.country,
//     Comments:req.body.comments
//   })
//   res.json({message:'done'});
// })

// app.post('/data',async (req,res)=>{
//   let docRef=db.collection('users')
//   await docRef.add({
//     email: req.body.email,
//     password: req.body.username,
//     fullname: req.body.fullname
//   });
//  res.json({message:'done'});
// })


// app.post('/create',async (req,res)=>{
//   let docRef=db.collection('users')
//   await docRef.add({
//     email: req.body.users.email,
//     password: req.body.users.fullname,
//   });
//    res.json({message:'done'});
// })

// app.get('/', async (req, res) => {
//   let usex = db.collection('collections').get()
// usex = usex.then((resx) => {
//   let usr = []
//   if (resx._docs().length > 0) {
//         for (const user of resx._docs()) {
//          usr.push(user.data())
//       }}
//   console.log(usr)
//   res.json(usr)
// })
// })



// app.get('/', (req,res) => {
//   res.json(usex._docs())
// })



const server = getConfig.app.listen(process.env.SERVER_PORT, function () {

    const host = 'localhost';
    const port = server.address().port;
    
    console.log(`App is listening at http://${host}:${port}`);
 });