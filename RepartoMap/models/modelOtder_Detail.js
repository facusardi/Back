import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";


export const Order_Detail = sequelize.define("Order_Detail", {
  order_detail_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cost_unit: { type: DataTypes.INTEGER },
  cant: { type: DataTypes.INTEGER }
});

Order_Detail.belongsTo(Order, { foreignKey: "order_id" });
Order_Detail.belongsTo(Product, { foreignKey: "product_id" });