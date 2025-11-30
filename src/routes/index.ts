import { AuthRoutes } from '../app/modules/auth/auth.route'
import express, { Router } from 'express'
import { PublicRoutes } from '../app/modules/public/public.route'
import { UserRoutes } from '../app/modules/user/user.route'
import { QuoteRoutes } from '../app/modules/quote/quote.route'
import { ServiceRoutes } from '../app/modules/service/service.route'

const router = express.Router()

const apiRoutes: { path: string; route: Router }[] = [

  { path: '/auth', route: AuthRoutes },
  { path: '/public', route: PublicRoutes },
  { path: '/user', route: UserRoutes },
  { path: '/quote', route: QuoteRoutes },
  { path: '/service', route: ServiceRoutes },

]

apiRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
