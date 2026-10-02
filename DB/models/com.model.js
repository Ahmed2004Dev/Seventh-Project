import { DataTypes, Model } from "sequelize";
import { sequelizeDB } from "../connectDB.js";
import { postModel } from "./post.model.js";
import { userModel } from "./user.model.js";

export class comModel extends Model { id }

comModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "com_id"
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "com_title"
        },
    },
    {
        sequelize: sequelizeDB,
        tableName: "comments",
        createdAt: true,
        updatedAt: true,
    },
);

postModel.hasMany(comModel, {
    foreignKey: "postID",
    onDelete: "cascade",
    onUpdate: "cascade",
})
comModel.belongsTo(postModel, {
    foreignKey: "postID",
    onDelete: "cascade",
    onUpdate: "cascade",
})

userModel.hasMany(comModel, {
    foreignKey: "userID",
    onDelete: "cascade",
    onUpdate: "cascade",
})
comModel.belongsTo(userModel, {
    foreignKey: "userID",
    onDelete: "cascade",
    onUpdate: "cascade",
})