import { Router } from "express";
import { PaymentController } from "./payment.controller";

const router = Router();



router.post(
    "/checkout-session/:quoteId",
    PaymentController.createCheckoutSession
)


export const PaymentRouts =router;