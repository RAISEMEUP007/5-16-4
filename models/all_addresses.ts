import { Sequelize } from 'sequelize';

import sequelize from '../utils/database';

const AllAddresses = sequelize.define('all_addresses', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   number: {
      type: Sequelize.STRING,
   },
   street: {
      type: Sequelize.STRING,
   },
   plantation: {
      type: Sequelize.STRING,
   },
   property_name: {
      type: Sequelize.STRING,
   },
   property_type: {
      type: Sequelize.STRING,
   },
   voucher_potential: {
      type: Sequelize.FLOAT,
   },
   fif_potential: {
      type: Sequelize.FLOAT,
   },
   guests: {
      type: Sequelize.STRING,
   },
   bedrooms: {
      type: Sequelize.STRING,
   },
   rental_company: {
      type: Sequelize.STRING,
   },
   xploriefif: {
      type: Sequelize.BOOLEAN,
   },
   xplorievoucher: {
      type: Sequelize.BOOLEAN,
   },
   geolat: {
      type: Sequelize.STRING,
   },
   geolong: {
      type: Sequelize.STRING,
   },
});

export default AllAddresses;