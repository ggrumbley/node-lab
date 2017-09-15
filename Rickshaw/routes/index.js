const DriversCtrl = require('../controllers/driverCtrl');

module.exports = (app) => {
  app.post('/api/drivers', DriversCtrl.create);
  app.put('/api/drivers/:id', DriversCtrl.edit);
  app.delete('/api/drivers/:id', DriversCtrl.delete);
  app.get('/api/drivers', DriversCtrl.index);
}