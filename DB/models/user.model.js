import { DataTypes} from'sequelize';
import { sequelizeDB } from '../connectDB.js';


export const userModel = sequelizeDB.define(
  'user',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      field: "u_id"
    },
    name: {
      type: DataTypes.STRING,
      allowNull : false,
      field : "u_name"
    },
    email: {
      type: DataTypes.STRING,
      allowNull : false,
      unique : true,
      field : "u_email",
      validate : {
        isEmail:{Massage:"Must be regist valid email"},
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull : false,
      field : "u_password",
      validate : {
        checkPasswordLength (values){
          if (values.length <= 6) {
            throw new Error("Invalid password" , {cause :{status:405}})
          }
        }
      }
    },
    role: {
      type: DataTypes.ENUM,
      values : ["admin" , "user"],
      defaultValue : "user",
      field:"u_role"
    }
  },
  {
    tableName : "users",
    createdAt : true,
    updatedAt:true,
    hooks : {
      beforeCreate:(values)=>{
        function checkNameLength(values){
          if (values.length <= 2) {
            throw new Error("Invalid Name" , {cause :{status:405}})
          }
        }
        checkNameLength(values.name)
      }
    }
  },
);