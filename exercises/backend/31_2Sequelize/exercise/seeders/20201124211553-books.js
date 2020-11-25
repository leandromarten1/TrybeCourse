"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("Books", [
      {
        title: "O morro dos ventos uivantes",
        author: "Emily Bronte",
        pageQuantity: 300,
        createdAt: new Date(),
      },
      {
        title: "A garota do lago",
        author: "Charlie Donlea",
        pageQuantity: 234,
        createdAt: new Date(),
      },
      {
        title: "O Peregrino",
        author: "Jhony Bunyan",
        pageQuantity: 187,
        createdAt: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Books", null, {}),
};
