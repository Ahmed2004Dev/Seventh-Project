import { DataTypes, Model } from "sequelize";
import { sequelizeDB } from "../connectDB.js";
import { userModel } from "./user.model.js";

export class postModel extends Model { id }

postModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "p_id"
        },
        title: {
            type: DataTypes.STRING(3000),
            allowNull: false,
            field: "p_title"
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "p_content"
        },
    },
    {
        sequelize:sequelizeDB, 
        tableName: "posts",
        createdAt:true,
        updatedAt:true,
        paranoid : true
    },
);

userModel.hasMany(postModel,
    {
        foreignKey: "userID",
        onDelete:"cascade",
        onUpdate:"cascade"
    });
postModel.belongsTo(userModel,
    {
        foreignKey: "userID",
        onDelete:"cascade",
        onUpdate:"cascade",
    });