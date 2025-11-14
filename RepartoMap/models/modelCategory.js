import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";


const Category = sequelize.define("Category", {
  caregory_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, allowNull: false }
});

export default Category; 