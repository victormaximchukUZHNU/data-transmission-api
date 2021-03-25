const showRoom = require('../services/show');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const room = await showRoom(id);

    res.status(200).send(room);
  } catch (ex) {
    console.error(ex);
    return res.status(ex.status).send({ message: ex.message });
  }
};
