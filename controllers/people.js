const People = require('../models/people');

exports.index = async (req, res, next) => {
  try {
    const people = await People.find();
    res.status(200).json(people);
  } catch (error) {
    next(error);
  }
}

exports.show = async (req, res, next) => {
  try {
    const people = await People.findById(req.params.id);
    res.status(200).json(people);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {

  try {
    const { id, name, age, occupation } = req.body;
    const ppl = await People.create({
      id,
      name,
      age,
      occupation
    });
    res.status(200).json({message: 'People was created successfully', status: 'success', people: ppl});
  } catch (error) {
    next(error);
  }
}
