import db from "../database/db.js";
import { DataTypes } from "sequelize";

const usersHotels = db.define("sh_hotels", {
    id:  {type: DataTypes.INTEGER, primaryKey: true},
    user_name: {type: DataTypes.STRING},
    user_id:{type: DataTypes.STRING},
    hotelStreet: {type: DataTypes.STRING},
    hotelNumber: {type: DataTypes.STRING},
    hotelComplement: {type: DataTypes.STRING},
    hotelNeighboorhood: {type: DataTypes.STRING},
    hotelCity: {type: DataTypes.STRING},
    hotelState: {type: DataTypes.STRING},
    hotelCountry: {type: DataTypes.STRING},
    hotelPhone: {type: DataTypes.STRING},
    hotelEmail: {type: DataTypes.STRING},
    hotelSite: {type: DataTypes.STRING}}, {
        timestamps: false
});

export default usersHotels;