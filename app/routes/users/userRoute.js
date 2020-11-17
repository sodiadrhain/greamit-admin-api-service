let routeConfig = require('../../config/config').route;
let dbConfig = require('../../config/config').db;
const auth = require('../../middleware/auth');

// crud operation for users happens here

// first endpoint {create}
// second endpoint {reads}
// third endpoint {updates}
// fouth endpoint {deletes} 

routeConfig.post('/user/create', async (req, res) => {
    let createUser = dbConfig.collection('users')
    await createUser.add({
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname
      });
     res.json({message:'done'});
});

routeConfig.get('/user/read', auth, async (req, res) => {
    let getUsers = []
    const users = await dbConfig.collection('users').get()
    if (users.docs.length > 0) {
      for (const user of users.docs) {
       getUsers.push(user.data())
    }}
    res.json(getUsers);
  });

  routeConfig.post('/user/update', async (req, res) => {
    let updateUser = dbConfig.collection('users').doc(req.body.uID)
    await updateUser.update({
      email: req.body.email,
      username: req.body.username
    })
    res.json({message:'done'});
  });

  routeConfig.post('/user/delete', async (req, res) => {
    await dbConfig.collection('users').doc(req.body.uID).delete()
    res.json({message:'done'});
  });

  module.exports = routeConfig;