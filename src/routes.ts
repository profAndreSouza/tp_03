import { Router } from "express"
import { AppController } from "./controller/AppController"
import { CourseController } from "./controller/CourseController"

const routes = Router()

routes.get('/', new AppController().index)

routes.get('/course', new CourseController().view)
routes.post('/course', new CourseController().create)

export default routes;