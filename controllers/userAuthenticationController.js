// importa o modelo da tabela dos modelos
import userAuthenticationModel from "../models/userAuthenticationModel.js";


// Get a  User by Mail
export const getUserByMail = async (req, res) => {
    try {
        const userByMail = await userAuthenticationModel.findAll({
            where: {
                usermail:req.params.usermail
            } 
        }); 
       res.json(userByMail[0]);
    } catch (error) {
        res.json( {message: error.message} )
    }
}
