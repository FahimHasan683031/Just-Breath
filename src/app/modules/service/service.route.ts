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

const router = express.Router();

router.route("/")
  .post(
    // auth('admin'),
    
    fileAndBodyProcessorUsingDiskStorage(),
    validateRequest(createServiceValidationSchema),
    createServiceController
  )
  .get(
    getServicesController
  );

router.route("/")
  .get(
    getActiveServicesController
  );

router.route("/:id")
  .get(
    getServiceByIdController
  )
  .patch(
    // auth('admin'),
    fileAndBodyProcessorUsingDiskStorage(),
    validateRequest(updateServiceValidationSchema),
    updateServiceController
  )
  .delete(
    // auth('admin'),
    deleteServiceController
  );

export const ServiceRoutes = router;