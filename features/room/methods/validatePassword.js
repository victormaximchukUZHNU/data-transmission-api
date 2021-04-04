const validatePassword = require('../services/validatePassword');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { password } = req.query;
    
    const response = await validatePassword({ shortId: id, password });

    res.status(200).send(response);
  } catch (ex) {
    console.error(ex);
    return res.status(ex.status).send({ message: ex.message });
  }
};
