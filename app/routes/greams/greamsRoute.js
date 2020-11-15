let routeConfig = require('../../config/config').route;
let dbConfig = require('../../config/config').db;
const auth = require('../../middleware/auth');

// crud operation for greams happens here

// first endpoint {create}
// second endpoint {reads}
// third endpoint {updates}
// fouth endpoint {deletes} 

routeConfig.post('/gream/create', async (req, res) => {
    let createGream = dbConfig.collection('greams')
    await createGream.add({
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname
      });
     res.json({message:'done'});
});

routeConfig.get('/gream/read', auth, async (req, res) => {
    let getGreams = []
    const greams = await dbConfig.collection('greams').get()
    if (greams.docs.length > 0) {
      for (const gream of greams.docs) {
       getGreams.push(gream.data())
    }}
    res.json(getGreams);
  });

  routeConfig.post('/gream/update', async (req, res) => {
    let updateGream = dbConfig.collection('greams').doc(req.body.uID)
    await updateGream.update({
      email: req.body.email,
      username: req.body.username
    })
    res.json({message:'done'});
  });

  routeConfig.post('/gream/delete', async (req, res) => {
    await dbConfig.collection('greams').doc(req.body.uID).delete()
    res.json({message:'done'});
  });