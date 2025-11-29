import express from "express";
import { createCategoryController, deleteCategoryController, getCategoriesController, updateCategoryController } from "./category.controller";
import { createCategoryValidationSchema } from "./category.validation";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
const router = express.Router()

router.route("/")
    .post(
        
        validateRequest(createCategoryValidationSchema),
        createCategoryController
    )
    .get(
        getCategoriesController
    )

router
    .route("/:id")
    .patch(  updateCategoryController)
    .delete( deleteCategoryController)

export const categoryRoutes = router;