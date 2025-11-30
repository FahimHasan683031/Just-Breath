import { Request, Response } from "express";
import Stripe from "stripe";
import config from "../../../config";
import stripe from "../../../config/stripe";
import { logger } from "../../../shared/logger";


const handleStripeWebhook = async (req: Request, res: Response): Promise<void> => {
  const signature = req.headers["stripe-signature"] as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, signature, config.stripe.webhookSecret as string);
  } catch (error: any) {
    logger.error("Webhook verification failed:", error.message);
    res.status(400).send(`Webhook Error: ${error.message}`);
    return;
  }

  const eventType = event.type;
  const data = event.data.object as any;

  try {
    if (eventType === "checkout.session.completed") {
      const session = await stripe.checkout.sessions.retrieve(data.id, { expand: ["payment_intent"] });
      const paymentIntent = session.payment_intent as Stripe.PaymentIntent;

      // await handlePaymentSuccess({
      //   sessionId: session.id,
      //   paymentIntentId: paymentIntent.id,
      //   metadata: session.metadata,
      //   amount: paymentIntent.amount,
      //   currency: paymentIntent.currency,
      // });
    }
  } catch (error: any) {
    logger.error("Webhook handler error:", error);
    res.status(500).send("Webhook internal error");
    return;
  }

  res.sendStatus(200);
};

export default handleStripeWebhook;
