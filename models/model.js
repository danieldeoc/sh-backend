// importa a database
import db from "../database/db.js";
// importa o datatypes do sequelize
import { DataTypes } from "sequelize";

const userModel = db.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    username: {type: DataTypes.STRING},
    usermail: {type: DataTypes.STRING},
    userpass: {type: DataTypes.STRING},
    hotelname: {type: DataTypes.STRING},
    date: {type: DataTypes.DATE},
    userhash: {type: DataTypes.STRING}}, {
        timestamps: false
    });

export default userModel;