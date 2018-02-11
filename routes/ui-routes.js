/**
 * Created by Sairam on 11/02/18.
 */

var _ = require('underscore');


var Action = require('../actions/api-actions.js');



var UIRoutes = function(app) {

    this.app = app;

    this.actionInstance = new Action(app);
};

module.exports = UIRoutes;

UIRoutes.prototype.init = function() {
    var self = this;
    var app = this.app;

};
