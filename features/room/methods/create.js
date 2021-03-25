const createRoom = require('../services/create');

module.exports = async (req, res, next) => {
  try {
    const room = await createRoom();

    res.status(200).send(room);
  } catch (ex) {
    console.error(ex);
    return res.status(ex.status).send({ message: ex.message });
  }
}