import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Unit = sequelize.define("Unit", {
  unit_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcion: { type: DataTypes.STRING, allowNull: false }
});
export default Unit;