import { Sequelize } from 'sequelize';
import { DataTypes } from "sequelize";

import sequelize from '../utils/database';

const PriceGroup = sequelize.define('price_groups', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   price_group: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   table_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
   },
   is_free: {
      type: DataTypes.BOOLEAN,
   },
   extra_day: {
      type: DataTypes.INTEGER,
   },
}, {
   timestamps: false  // Disable timestamps
});


export interface PriceGroupType {
   id: number;
   price_group: string;
   table_id: number
   is_free: boolean
   extra_day: number

}


export default PriceGroup;