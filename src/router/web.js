import express from 'express'
import homeController from '../controller/HomeController'
let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)
    router.post('/create-new-user', homeController.createUser)
    router.get('/detail/user/:id', homeController.getDetailUser)
    router.post('/detele-user', homeController.deteteUser)
    router.get('/edit-user/:id', homeController.getDataUserEdit)
    router.post('/update-user', homeController.updateUser)
    // router.get('/uploadFile', homeController.getUploadFile)
    // router.post('/upload-profile-pic', homeController.handleUploadFile)
    return app.use('/', router)
}
// module.exports = initWebRoute
export default initWebRoute