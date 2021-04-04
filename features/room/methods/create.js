const createRoom = require('../services/create');

module.exports = async (req, res, next) => {
  try {
    const { password } = req.body;

    const room = await createRoom(password);

    res.status(200).send(room);
  } catch (ex) {
    console.error(ex);
    return res.status(ex.status).send({ message: ex.message });
  }
};
