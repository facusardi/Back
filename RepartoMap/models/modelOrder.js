import {DataTypes} from "sequelize"
import sequelize from "../config/sequelize";
import User from "./modelUser.js";
import State from "./modelState.js";

const Order = sequelize.define("Order", {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {  
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descrption_location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    len_location:{
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    lat_location:{
        type: DataTypes.FLOAT,
        allowNull: false,

    },
    sate_id:{
        type: DataTypes.INTEGER

    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    },
    {
    tableName: 'Order',
    timestamps: true,
    }
);

Order.belongsTo(User, { foreignKey: "user_id" });
Order.belongsTo(State, { foreignKey: "state_id" });

export default Order;