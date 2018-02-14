'use strict';
module.exports = (sequelize, DataTypes) => {
  var Msg = sequelize.define('Msg', {
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Msg;
};