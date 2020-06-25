import express from 'express';
import PointsCotroller from './controllers/pointsController'
import ItemsCotroller from './controllers/itemsController'


const routes = express.Router();
const pointsController = new PointsCotroller()
const itemsController = new ItemsCotroller()

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)


export default routes
