// importa o modelo da tabela dos modelos
 import userModel from "../models/model.js"

// define todos os controles do crud
// GE All Users
export const getAllUser = async (req, res) => {
    try {
        const users = await userModel.findAll(); 
        res.json(users);
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Get a ID User
export const getUser = async (req, res) => {
    try {
        const user = await userModel.findAll({
            where: {
                id:req.params.id
            } 
        }); 
        res.json(user[0]);
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Get a  User by Mail
export const getUserByMail = async (req, res) => {
    try {
        const userByMail = await userModel.findAll({
            where: {
                usermail:req.params.usermail
            } 
        }); 
        res.json(userByMail[0]);
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// insert All User
export const insUser = async (req, res) => {
    try {
        const addUser = await userModel.create(req.body);
        res.json({
            'message': "User created."
        });
    } catch (error) {
        res.json( {message: error.message} )
    }
}


// updae user
export const updateUser = async (req, res) => {
    try {
        const upUser = await userModel.update( req.body, {
            where: {id:req.params.id}
        }); 
        res.json({
            'message': "User updated."
        });
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// delet user
export const deletUser = async (req, res) => {
    try {
        const delUser = await userModel.destroy({
            where: {id:req.params.id}
        }); 
        res.json({
            'message': "User removed."
        });
    } catch (error) {
        res.json( {message: error.message} )
    }
}