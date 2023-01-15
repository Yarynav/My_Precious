const JewelModel = require('../models/jewelModel');
const { validateQueryString } = require('../helpers/validations');
const { hateoas } = require('../helpers/hateoas');

const getJewels = async (req, res) => {
  try {
    const queryString = validateQueryString(req, res);
    if (queryString.error) {
      res.status(queryString.error.status).json(queryString.error);
      return;
    }
    const data = await JewelModel.list(queryString);
    res.status(200).json(hateoas(data, queryString.page));
  } catch (e) {
    console.log(e);
    res.status(500).json({ msj: 'Ha ocurrido un error en el servidor' });
  }
};

const getFilterJewels = async (req, res) => {
  try {
    const queryString = validateQueryString(req, res);
    if (queryString.error) {
      res.status(queryString.error.status).json(queryString.error);
      return;
    }
    const data = await JewelModel.listFilter(queryString);
    res.status(200).json(hateoas(data, queryString.page));
  } catch (e) {
    res.status(500).json({ msj: 'Ha ocurrido un error en el servidor' });
  }
};

module.exports = {
  getJewels,
  getFilterJewels,
};
