import express from 'express'
import { DashboardControllers } from './dashboard.controller'
import auth from '../../middleware/auth'
import { USER_ROLES } from '../../../enum/user'


const router = express.Router()

router.get(
  '/statistics',
  auth(USER_ROLES.ADMIN),
  DashboardControllers.getDashboardStatistics,
)


export const DashboardRoutes = router
