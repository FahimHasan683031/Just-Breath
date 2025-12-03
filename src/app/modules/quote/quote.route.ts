import express from "express";
import { createQuoteValidationSchema, updateQuoteValidationSchema } from "./quote.validation";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";
import { QuoteController } from "./quote.controller";
import { USER_ROLES } from "../../../enum/user";


const router = express.Router();

router.route("/")
  .post(
    validateRequest(createQuoteValidationSchema),
    QuoteController.createQuoteController 
  )
  .get(
    auth(USER_ROLES.ADMIN),
    QuoteController.getQuotesController
  );


router.route("/:id")
  .get(
    auth(USER_ROLES.ADMIN),
    QuoteController.getQuoteByIdController
  )
  .patch(
    auth(USER_ROLES.ADMIN),
    validateRequest(updateQuoteValidationSchema),
    QuoteController.updateQuoteController
  )
  .delete(
    auth(USER_ROLES.ADMIN),
    QuoteController.deleteQuoteController
  );

  // send payment link
  router.post(
    "/send-payment-link/:id",
    auth(USER_ROLES.ADMIN),
    QuoteController.sendPaymentLinkController
  );

export const QuoteRoutes = router;