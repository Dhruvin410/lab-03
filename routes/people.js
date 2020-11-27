const { index, show, create} = require('../controllers/people');

module.exports = router => {
  router.get('/people', index);
  router.get('/people/:id', show);
  router.post('/people', create);
};