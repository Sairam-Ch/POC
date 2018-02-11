var ApiService = require('../services/service.js');

var ApiActions = function (app) {
    this.app = app;
    this.apiServiceInstance = new ApiService(app);
};

module.exports = ApiActions;

