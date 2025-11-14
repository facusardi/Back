import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import Unit from "./modelUnit";
import Category from "./modelCategory";

const Presentation = sequelize.define("Presentation", {
  presentation_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, allowNull: false }
});

Presentation.belongsTo(Unit, { foreignKey: "unit_id" });
Presentation.belongsTo(Category, { foreignKey: "category_id" });


export default Presentation;