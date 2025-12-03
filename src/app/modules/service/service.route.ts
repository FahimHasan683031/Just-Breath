import express from "express";
import {
  createServiceController,
  getServicesController,
  getServiceByIdController,
  deleteServiceController,
  updateServiceController,
  getActiveServicesController,
} from "./service.controller";
import { createServiceValidationSchema, updateServiceValidationSchema } from "./service.validation";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";
import { fileAndBodyProcessorUsingDiskStorage } from "../../middleware/processReqBody";
import { USER_ROLES } from "../../../enum/user";

const router = express.Router();

router.route("/")
  .post(
    auth(USER_ROLES.ADMIN),
    fileAndBodyProcessorUsingDiskStorage(),
    validateRequest(createServiceValidationSchema),
    createServiceController
  )
  .get(
    auth(USER_ROLES.ADMIN),
    getServicesController
  );

router.route("/active")
  .get(
    getActiveServicesController
  );

router.route("/:id")
  .get(
    getServiceByIdController
  )
  .patch(
    auth(USER_ROLES.ADMIN),
    fileAndBodyProcessorUsingDiskStorage(),
    validateRequest(updateServiceValidationSchema),
    updateServiceController
  )
  .delete(
    auth(USER_ROLES.ADMIN),
    deleteServiceController
  );

export const ServiceRoutes = router;