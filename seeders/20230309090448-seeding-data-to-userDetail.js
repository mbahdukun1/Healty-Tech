'use strict';
const fs =require ('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = JSON.parse(fs.readFileSync('./data/userDetail.json', 'utf-8')).map(el=>{
      el.updatedAt=el.createdAt = new Date()
      return el
     })
      return queryInterface.bulkInsert('UserDetails', data, {});
    },
  
     down (queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
      return queryInterface.bulkDelete('UserDetails', null, {});
    }
};
