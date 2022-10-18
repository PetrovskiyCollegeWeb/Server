import {Router} from 'express';
import {getMaps} from "./maps/getMaps";
const routes = Router()

routes.get('/get', getMaps)

export default routes