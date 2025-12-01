import express from "express";
import { createQuoteValidationSchema, updateQuoteValidationSchema } from "./quote.validation";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";
import { QuoteController } from "./quote.controller";


const router = express.Router();

router.route("/")
  .post(
    validateRequest(createQuoteValidationSchema),
    QuoteController.createQuoteController 
  )
  .get(
    // auth('admin', 'manager'),
    QuoteController.getQuotesController
  );


router.route("/:id")
  .get(
    // auth('admin', 'manager'),
    QuoteController.getQuoteByIdController
  )
  .patch(
    // auth('admin', 'manager'),
    validateRequest(updateQuoteValidationSchema),
    QuoteController.updateQuoteController
  )
  .delete(
    // auth('admin', 'manager'),
    QuoteController.deleteQuoteController
  );

  // send payment link
  router.post(
    "/send-payment-link/:id",
    QuoteController.sendPaymentLinkController
  );

export const QuoteRoutes = router;