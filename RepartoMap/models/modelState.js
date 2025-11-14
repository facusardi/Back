import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const State = sequelize.define("State", {
  id_state: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, allowNull: false }
});
export default State;