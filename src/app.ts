import cors from 'cors'
import express, { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import router from './routes'
import { Morgan } from './shared/morgan'
import cookieParser from 'cookie-parser'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import handleStripeWebhook from './app/modules/payment/handleStripeWebhook'


//application
const app = express();

app.use('/webhook',
    express.raw({ type: 'application/json' }),
    handleStripeWebhook
);

const allowedOrigins = [
  'https://goroqit.com',
  'https://www.goroqit.com',   // add www version
  'http://goroqit.com',        // optional if non-SSL
  'http://localhost:3000',
  'http://10.10.7.45:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || origin.endsWith('.goroqit.com') || origin === 'https://goroqit.com') {
      callback(null, true);
    } else {
      console.log('🚫 Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Stripe webhook route



//morgan
app.use(Morgan.successHandler)
app.use(Morgan.errorHandler)
//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
//file retrieve
app.use(express.static('uploads'))

//router
app.use('/api/v1', router)

//live response
app.get('/', (req: Request, res: Response) => {
res.send(`
  <div style="
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1f1f1f, #282828);
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffffff;
    margin: 0;
  ">
    <div style="
      text-align: center;
      background: #2c2c2c;
      border: 2px solid #3CB371;
      border-radius: 16px;
      padding: 3rem 2.5rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      max-width: 600px;
    ">
      <img src="https://i.ibb.co.com/jks76tpB/8a6289d738dfae4e5ecc32ab7b4cd261fd2b5e71.png" 
           alt="Just Breath Logo" 
           style="margin-bottom: 1.5rem; height: 80px; width: auto;" />

      <h1 style="
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #3CB371;
      ">
        👋 Welcome to Just Breath API
      </h1>

      <p style="
        font-size: 1rem;
        line-height: 1.7;
        color: #ffffffcc;
      ">
        You’ve reached the <code style="color:#3CB371;">root</code> of the Just Breath server.<br>
        Everything’s running smoothly and securely. ✅<br><br>
        Explore the API endpoints or head back to the app for takeoff. 🚀
      </p>

      <a href="https://justBreath.com" target="_blank" style="
        display: inline-block;
        margin-top: 2rem;
        padding: 0.9rem 2rem;
        border-radius: 12px;
        background: #3CB371;
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: background 0.3s ease;
      " onmouseover="this.style.background='#2e8b57'" onmouseout="this.style.background='#3CB371'">
        🌐 Visit Just Breath App
      </a>

      <p style="
        margin-top: 2.5rem;
        font-size: 0.9rem;
        color: #ffffff88;
      ">
        © ${new Date().getFullYear()} — Just Breath Server<br>
        Built with 💚 and innovation
      </p>
    </div>
  </div>
`);


})


//global error handle
app.use(globalErrorHandler)
app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "Endpoint not found 🚫",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Looks like you’ve taken a wrong turn — this route doesn’t exist on the Just Breath API.",
      },
      {
        path: "/api/v1/docs",
        message: "Need directions? Check out our API documentation for valid endpoints. 📘",
      },
    ],
    tip: "Pro Tip 💡: Always double-check your endpoint URL, HTTP method, and version prefix before sending requests.",
    roast: "It’s okay, even rockets miss their trajectory sometimes. 🚀 Adjust course and try again!",
    timestamp: new Date().toISOString(),
  });
});

export default app
