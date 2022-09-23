// importa o express
import express from 'express';
import { getAllHotels, getHotel, addHotel, updateHotel, deletHotel } from '../controllers/hotelsControllers.js';


//////////////////
// Hotel Routes
// .get, .post, .put, (url como = ('/:id') )
const hotelsRoutes = express.Router();
hotelsRoutes.get('/', getAllHotels);
hotelsRoutes.get('/:id', getHotel);
hotelsRoutes.post('/', addHotel);
hotelsRoutes.put('/:id', updateHotel);
hotelsRoutes.delete('/:id', deletHotel);

export default hotelsRoutes; 