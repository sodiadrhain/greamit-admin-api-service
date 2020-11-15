const auth = async (req, res, next) => {
    const token = req.header('Authorization');
    // const data = jwt.verify(token, process.env.JWT_KEY);
    if (token) {
        if (token.replace('Bearer ', '') === process.env.JWT_KEY) {
            req.token = token
            next()
        } else {
            res.status(401).json({ error: 'Not authorized to access this resource' });
        }
        } else {
            res.status(401).json({ error: 'Not authorized to access this resource' });
        }

    // if(data) {
    //     req.token = token
    //     next()
    // } else {
    //     res.status(401).send({ error: 'Not authorized to access this resource' })
    // }
    // try {
    //     // const user = await User.findOne({ _id: data._id, 'tokens.token': token })
    //     // if (!user) {
    //     //     throw new Error()
    //     // }
    //     // req.user = user
    //     req.token = token
    //     next()
    // } catch (error) {
    //     res.status(401).send({ error: 'Not authorized to access this resource' })
    // }

}
module.exports = auth