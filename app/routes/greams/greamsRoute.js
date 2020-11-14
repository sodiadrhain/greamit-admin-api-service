let routeConfig = require('../../config/config');

// crud operation for greams happens here

// first endpoint {create}
// second endpoint {reads}
// third endpoint {updates}
// fouth endpoint {deletes} 

routeConfig.app.post('/gream/create', async (req, res) => {
    let createGream = routeConfig.db.collection('greams')
    await createGream.add({
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname
      });
     res.json({message:'done'});
});

routeConfig.app.get('/gream/read', async (req, res) => {
    let getGreams = []
    const greams = await routeConfig.db.collection('greams').get()
    if (greams.docs.length > 0) {
      for (const gream of greams.docs) {
       getGreams.push(gream.data())
    }}
    res.json(getGreams);
  });

  routeConfig.app.post('/gream/update', async (req, res) => {
    let updateGream = routeConfig.db.collection('greams').doc(req.body.uID)
    await updateGream.update({
      email: req.body.email,
      username: req.body.username
    })
    res.json({message:'done'});
  });

  routeConfig.app.post('/gream/delete', async (req, res) => {
    await routeConfig.db.collection('greams').doc(req.body.uID).delete()
    res.json({message:'done'});
  });