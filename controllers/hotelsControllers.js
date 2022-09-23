import usersHotels from "../models/hotelsModels.js";

// metodos para hotels
// getAllHotels
export const getAllHotels = async (req, res) => {
    try {
        const hotels = await usersHotels.findAll(); 
        res.json(hotels);
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// getAnHotel
export const getHotel = async (req, res) => {
    try {
        const hotel = await usersHotels.findAll({
            where: {
                id:req.params.id
            } 
        }); 
        res.json(hotel[0]);
    } catch (error) {
        res.json( {message: error.message} )
    }
}


// AddAnHotel
export const addHotel = async (req, res) => {
    try {
        const addHotel = await usersHotels.create(req.body);
        res.json({
            'message': "Hotel created."
        });
    } catch (error) {
        res.json( {message: error.message} )
    }
}


// ModifyAnHotel
export const updateHotel = async (req, res) => {
    try {
        const upHotel = await usersHotels.update( req.body, {
            where: {id:req.params.id}
        }); 
        res.json({
            'message': "Hotel updated."
        });
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// DeleteAnHotel
export const deletHotel = async (req, res) => {
    try {
        const delUser = await usersHotels.destroy({
            where: {id:req.params.id}
        }); 
        res.json({
            'message': "Hotel removed."
        });
    } catch (error) {
        res.json( {message: error.message} )
    }
}