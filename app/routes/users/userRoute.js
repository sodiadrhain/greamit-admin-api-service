let routeConfig = require('../../config/config');

// crud operation for users happens here

// first endpoint {create}
// second endpoint {reads}
// third endpoint {updates}
// fouth endpoint {deletes} 

routeConfig.app.post('/user/create', async (req, res) => {
    let createUser = routeConfig.db.collection('users')
    await createUser.add({
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname
      });
     res.json({message:'done'});
});

routeConfig.app.get('/user/read', async (req, res) => {
    let getUsers = []
    const users = await routeConfig.db.collection('users').get()
    if (users.docs.length > 0) {
      for (const user of users.docs) {
       getUsers.push(user.data())
    }}
    res.json(getUsers);
  });

  routeConfig.app.post('/user/update', async (req, res) => {
    let updateUser = routeConfig.db.collection('users').doc(req.body.uID)
    await updateUser.update({
      email: req.body.email,
      username: req.body.username
    })
    res.json({message:'done'});
  });

  routeConfig.app.post('/user/delete', async (req, res) => {
    await routeConfig.db.collection('users').doc(req.body.uID).delete()
    res.json({message:'done'});
  });