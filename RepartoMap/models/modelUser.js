import { DataTypes} from "sequelize";
import sequelize from "../config/sequelize.js";

const User = sequelize.define("Users", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    },
    {
    tableName: 'User',
    timestamps: true,
    }
); 

export default User;