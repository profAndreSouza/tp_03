import { Router } from "express"
import { CourseController } from "./controller/CourseController"

const routes = Router()

routes.get('/', (req, res) => {
    return res.json('ok')
})

routes.get('/course', new CourseController().view)
routes.post('/course', new CourseController().create)

export default routes;