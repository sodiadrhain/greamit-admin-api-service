let routeConfig = require('../../config/config');

// crud operation for collections happens here

// first endpoint {create}
// second endpoint {reads}
// third endpoint {updates}
// fouth endpoint {deletes} 

routeConfig.app.post('/collection/create', async (req, res) => {
    let createCollection = routeConfig.db.collection('collections')
    await createCollection.add({
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname
      });
     res.json({message:'done'});
});

routeConfig.app.get('/collection/read', async (req, res) => {
    let getCollections = []
    const collections = await routeConfig.db.collection('collections').get()
    if (collections.docs.length > 0) {
      for (const collection of collections.docs) {
       getCollections.push(collection.data())
    }}
    res.json(getCollections);
  });

  routeConfig.app.post('/collection/update', async (req, res) => {
    let updateCollection = routeConfig.db.collection('collections').doc(req.body.uID)
    await updateCollection.update({
      email: req.body.email,
      username: req.body.username
    })
    res.json({message:'done'});
  });

  routeConfig.app.post('/collection/delete', async (req, res) => {
    await routeConfig.db.collection('collections').doc(req.body.uID).delete()
    res.json({message:'done'});
  });