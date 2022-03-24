import express from 'express'
import ApiController from '../controller/ApiController'
let router = express.Router();
const initAPIRoute = (app) => {
    router.get('/users', ApiController.getAllUsers)
    router.post('/create-user', ApiController.createUser)
    router.put('/update-user', ApiController.updateUser)
    router.delete('/delete-user/:id', ApiController.deleteUser)
    // router.delete('/delete-user', ApiController.deleteUser)
    return app.use('/api/v1', router)
}
// module.exports = initWebRoute
export default initAPIRoute