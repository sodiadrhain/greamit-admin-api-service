let routeConfig = require('../../config/config').route;
let dbConfig = require('../../config/config').db;
const auth = require('../../middleware/auth');

// crud operation for collections happens here

// first endpoint {create}
// second endpoint {reads}
// third endpoint {updates}
// fouth endpoint {deletes} 

routeConfig.post('/collection/create', async (req, res) => {
    let createCollection = dbConfig.collection('collections')
    await createCollection.add({
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname
      });
     res.json({message:'done'});
});

routeConfig.get('/collection/read', auth, async (req, res) => {
    let getCollections = []
    const collections = await dbConfig.collection('collections').get()
    if (collections.docs.length > 0) {
      for (const collection of collections.docs) {
       getCollections.push(collection.data())
    }}
    res.json(getCollections);
  });

routeConfig.post('/collection/update', async (req, res) => {
    let updateCollection = dbConfig.collection('collections').doc(req.body.uID)
    await updateCollection.update({
      email: req.body.email,
      username: req.body.username
    })
    res.json({message:'done'});
  });

routeConfig.post('/collection/delete', async (req, res) => {
  await dbConfig.collection('collections').doc(req.body.uID).delete()
    res.json({message:'done'});
  });

  module.exports = routeConfig;