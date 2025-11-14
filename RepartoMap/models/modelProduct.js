import { DataTypes} from "sequelize";
import sequelize from "../config/sequelize";

const Product = sequelize.define("Product", {
  id_producto: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcion: { type: DataTypes.STRING, allowNull: false }
});

Product.belongsTo(Presentation, { foreignKey: "presentation_id" });


export default Product;