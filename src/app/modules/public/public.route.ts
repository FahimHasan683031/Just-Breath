import express from 'express'
import { PublicController } from './public.controller'
import validateRequest from '../../middleware/validateRequest'
import {  PublicValidation } from './public.validation'
import { USER_ROLES } from '../../../enum/user'
import auth from '../../middleware/auth'

const router = express.Router()

router.post(
  '/',
  auth(USER_ROLES.ADMIN),
  validateRequest(PublicValidation.create),
  PublicController.createPublic,
)

router.post(
  '/contact',
  validateRequest(PublicValidation.contactZodSchema),
  PublicController.createContact,
)
router.get('/contact', auth(USER_ROLES.ADMIN), PublicController.getAllContacts)
router.get('/:type', PublicController.getAllPublics)

router.delete('/:id', PublicController.deletePublic)





export const PublicRoutes = router
