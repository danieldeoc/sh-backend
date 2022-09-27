// importa a database
import db from "../database/db.js";
// importa o datatypes do sequelize
import { DataTypes } from "sequelize";

///////////////////////////////
// USer database Mode
const userAuthenticationModel = db.define('users', {
    usermail: {type: DataTypes.STRING},
    userpass: {type: DataTypes.STRING},
    userhash: {type: DataTypes.STRING}}, {
        timestamps: false
    });
export default userAuthenticationModel;