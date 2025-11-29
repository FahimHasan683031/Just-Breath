
import { AuthRoutes } from '../app/modules/auth/auth.route'
import express, { Router } from 'express'
import { PublicRoutes } from '../app/modules/public/public.route'
import { categoryRoutes } from '../app/modules/category/category.route'
import { UserRoutes } from '../app/modules/user/user.route'

const router = express.Router()

const apiRoutes: { path: string; route: Router }[] = [

  { path: '/auth', route: AuthRoutes },
  { path: '/public', route: PublicRoutes },
  { path: '/category', route: categoryRoutes },
  { path: '/user', route: UserRoutes },

]

apiRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
