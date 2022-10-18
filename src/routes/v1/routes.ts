import {Router} from 'express'
import maps from "./maps"
const routes = Router()

routes.use('/maps', maps)

export default routes