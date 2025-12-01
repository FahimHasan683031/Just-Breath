import { Router } from "express";
import { PaymentController } from "./payment.controller";

const router = Router();



router.post(
    "/checkout-session/:quoteId",
    PaymentController.createCheckoutSession
)

router.get(
    "/",
    PaymentController.getPaymentsController
)
router.get(
    "/:id",
    PaymentController.getPaymentByIdController
)



export const PaymentRouts =router;