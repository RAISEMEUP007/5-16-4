import { Sequelize } from 'sequelize';

import sequelize from '../utils/database';

const User = sequelize.define('Users', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   name: {
      type: Sequelize.STRING,
   },
   password: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   is_driver: {
      type: Sequelize.BOOLEAN,
   }
});

export default User;