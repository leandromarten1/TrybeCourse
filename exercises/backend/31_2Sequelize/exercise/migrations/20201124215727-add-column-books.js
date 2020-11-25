"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("Books", "updatedAt", Sequelize.DATE),

  down: async (queryInterface, Sequelize) =>
    queryInterface.removeColumn("Books", "updatedAt"),
};
