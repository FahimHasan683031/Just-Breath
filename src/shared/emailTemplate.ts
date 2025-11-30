
import config from '../config'
import { ICreateAccount, IResetPassword } from '../interfaces/emailTemplate'

const createAccount = (values: ICreateAccount) => {
  console.log(values, 'values')
  const data = {
    to: values.email,
    subject: `Verify your account, ${values.name}`,
    html: `
<body style="margin:0; padding:0; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0"
             style="max-width:640px; margin:40px auto; background-color:#ffffff; border-radius:14px;
                    overflow:hidden; box-shadow:0 5px 25px rgba(0,0,0,0.08);">
        
        <!-- Header -->
        <tr>
          <td align="center" style="background-color:#f1f8f4; padding:35px 20px; border-top:1px solid #e6f4ea;">
            <img src="https://api.goroqit.com/image/1761168795060-ant6f7.png" alt="Go.Roqit"
                 style="width:210px; height:auto; filter:drop-shadow(0 0 6px rgba(0,0,0,0.3));">
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:45px;">
            <h1 style="color:#1b4332; font-size:26px; font-weight:700; margin-bottom:15px; text-align:center;">
              Verify Your Email 🚀
            </h1>

            <p style="color:#3a5a40; font-size:16px; line-height:1.6; margin-bottom:25px; text-align:center;">
              Hey <strong>${values.name}</strong>, welcome aboard! 🎉<br>
              Please verify your email to activate your account.
            </p>

            <!-- OTP Box -->
            <div style="background:linear-gradient(145deg,#d8f3dc,#b7e4c7); border:2px solid #52b788; 
                        border-radius:12px; padding:25px 0; text-align:center; margin:30px auto; max-width:300px;">
              <span style="font-size:40px; font-weight:700; color:#1b4332; letter-spacing:6px;">
                ${values.otp}
              </span>
            </div>

            <p style="color:#3a5a40; font-size:15px; line-height:1.6; text-align:center;">
              This code will expire in <strong>5 minutes</strong>.<br>
              If you didn’t request this, you can safely ignore it.
            </p>

            <!-- Tip -->
            <div style="margin-top:35px; background-color:#fff8e1; border-left:6px solid #ffd54f; 
                        border-radius:8px; padding:15px 18px;">
              <p style="margin:0; color:#4a4a4a; font-size:14px;">
                🔒 For security reasons, never share this code with anyone.
              </p>
            </div>

            <!-- Button -->
            <div style="text-align:center; margin-top:45px;">
              <a href="https://goroqit.com/otp-verify" 
                 style="background-color:#2d6a4f; color:#ffffff; padding:14px 32px; font-size:16px; 
                        font-weight:600; border-radius:10px; text-decoration:none; display:inline-block; 
                        box-shadow:0 4px 12px rgba(45,106,79,0.3); transition:all 0.3s;">
                Open Go.Roqit 🚀
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" style="background-color:#f1f8f4; padding:25px 20px; border-top:1px solid #e6f4ea;">
            <p style="margin:0; color:#52796f; font-size:13px;">
              © ${new Date().getFullYear()} <strong>Go.Roqit</strong>. All rights reserved.
            </p>
            <p style="margin:6px 0 0; color:#3a5a40; font-size:13px;">
              Powered by <strong style="color:#1b4332;">Go.Roqit API</strong> 🚀
            </p>
          </td>
        </tr>

      </table>
    </body>
    `,
  }
  return data
}

const resetPassword = (values: IResetPassword) => {
  console.log(values, 'values')
  const data = {
    to: values.email,
    subject: `Reset your password, ${values.name}`,
    html: `
    <body style="margin:0; padding:0; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0"
             style="max-width:640px; margin:40px auto; background-color:#ffffff; border-radius:14px;
                    overflow:hidden; box-shadow:0 5px 25px rgba(0,0,0,0.08);">
        
        <!-- Header -->
        <tr>
          <td align="center" style="background-color:#f1f8f4; padding:35px 20px; border-top:1px solid #e6f4ea;">
            <img src="https://api.goroqit.com/image/1761168795060-ant6f7.png" alt="Go.Roqit"
                 style="width:210px; height:auto; filter:drop-shadow(0 0 6px rgba(0,0,0,0.3));">
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:45px;">
            <h1 style="color:#1b4332; font-size:26px; font-weight:700; margin-bottom:15px; text-align:center;">
              Password Reset Request 🔐
            </h1>

            <p style="color:#3a5a40; font-size:16px; line-height:1.6; margin-bottom:25px; text-align:center;">
              Hi <strong>${values.name}</strong>, 👋<br>
              We received a request to reset your password for your <strong>Go.Roqit</strong> account.<br>
              Use the verification code below to complete the process:
            </p>

            <!-- OTP Box -->
            <div style="background:linear-gradient(145deg,#d8f3dc,#b7e4c7); border:2px solid #52b788;
                        border-radius:12px; padding:25px 0; text-align:center; margin:30px auto; max-width:300px;">
              <span style="font-size:40px; font-weight:700; color:#1b4332; letter-spacing:6px;">
                ${values.otp}
              </span>
            </div>

            <p style="color:#3a5a40; font-size:15px; line-height:1.6; text-align:center;">
              This code is valid for <strong>5 minutes</strong>.<br>
              If you didn’t request this, please ignore this email — your account is safe and unchanged.
            </p>

            <!-- Tip -->
            <div style="margin-top:35px; background-color:#fff8e1; border-left:6px solid #ffd54f;
                        border-radius:8px; padding:15px 18px;">
              <p style="margin:0; color:#4a4a4a; font-size:14px;">
                ⚠️ <strong>Security Tip:</strong> Never share your reset code or link with anyone. Go.Roqit will never ask for it.
              </p>
            </div>

            <!-- Button -->
            <div style="text-align:center; margin-top:45px;">
              <a href="https://goroqit.com/otp-verify" target="_blank"
                 style="background-color:#2d6a4f; color:#ffffff; padding:14px 32px; font-size:16px;
                        font-weight:600; border-radius:10px; text-decoration:none; display:inline-block;
                        box-shadow:0 4px 12px rgba(45,106,79,0.3); transition:all 0.3s;">
                🔑 Reset Password
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" style="background-color:#f1f8f4; padding:25px 20px; border-top:1px solid #e6f4ea;">
            <p style="margin:0; color:#52796f; font-size:13px;">
              © ${new Date().getFullYear()} <strong>Go.Roqit</strong>. All rights reserved.
            </p>
            <p style="margin:6px 0 0; color:#3a5a40; font-size:13px;">
              Powered by <strong style="color:#1b4332;">Go.Roqit API</strong> 🚀
            </p>
          </td>
        </tr>

      </table>
    </body>
    `,
  }

  return data
}

const resendOtp = (values: {
  email: string
  name: string
  otp: string
  type: 'resetPassword' | 'createAccount'
}) => {
  console.log(values, 'values')
  const isReset = values.type === 'resetPassword'

  const data = {
    to: values.email,
    subject: `${isReset ? 'Password Reset' : 'Account Verification'} - New Code`,
    html: `
   <body style="margin:0; padding:0;  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px; margin:40px auto; background-color:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 5px 25px rgba(0,0,0,0.08);">

    <!-- Header -->
    <tr>
      <td align="center" style="background-color:#f1f8f4; padding:35px 20px; border-top:1px solid #e6f4ea;">
        <img src="https://api.goroqit.com/image/1761168795060-ant6f7.png" alt="Go.Roqit"
             style="width:210px; height:auto; filter:drop-shadow(0 0 6px rgba(0,0,0,0.3));">
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:45px;">
        <h1 style="color:#1b4332; font-size:26px; font-weight:700; margin-bottom:15px; text-align:center;">
          ${isReset ? 'Reset Your Password 🔐' : 'Verify Your Account 🚀'}
        </h1>

        <p style="color:#3a5a40; font-size:16px; line-height:1.6; margin-bottom:25px; text-align:center;">
          Hi <strong>${values.name}</strong>, 👋<br>
          ${
            isReset
              ? 'You recently requested to reset your password for your Go.Roqit account.'
              : 'Thanks for joining <strong>Go.Roqit</strong> — we’re thrilled to have you onboard!'
          }<br>
          Please use the code below to complete the process:
        </p>

        <!-- OTP Box -->
        <div style="background:linear-gradient(145deg,#d8f3dc,#b7e4c7); border:2px solid #52b788; border-radius:12px; padding:25px 0; text-align:center; margin:30px auto; max-width:300px;">
          <span style="font-size:40px; font-weight:700; color:#1b4332; letter-spacing:6px;">
            ${values.otp}
          </span>
        </div>

        <p style="color:#3a5a40; font-size:15px; line-height:1.6; text-align:center;">
          This code will expire in <strong>5 minutes</strong>.<br>
          If you didn’t request this, just ignore this email — your account is safe.
        </p>

        <!-- Tip -->
        <div style="margin-top:35px; background-color:#fff8e1; border-left:6px solid #ffd54f; border-radius:8px; padding:15px 18px;">
          <p style="margin:0; color:#4a4a4a; font-size:14px;">
            🔒 <strong>Security Tip:</strong> Keep your OTP confidential. Go.Roqit will never ask for it.
          </p>
        </div>

        <!-- Button -->
        <div style="text-align:center; margin-top:45px;">
          <a href="https://goroqit.com/otp-verify" 
             style="background-color:#2d6a4f; color:#ffffff; padding:14px 32px; font-size:16px; font-weight:600; border-radius:10px; text-decoration:none; display:inline-block; box-shadow:0 4px 12px rgba(45,106,79,0.3); transition:all 0.3s;">
            ${isReset ? 'Reset Password' : 'Open Go.Roqit 🚀'}
          </a>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td align="center" style="background-color:#f1f8f4; padding:25px 20px; border-top:1px solid #e6f4ea;">
        <p style="margin:0; color:#52796f; font-size:13px;">
          © ${new Date().getFullYear()} <strong>Go.Roqit</strong>. All rights reserved.
        </p>
        <p style="margin:6px 0 0; color:#3a5a40; font-size:13px;">
          Powered by <strong style="color:#1b4332;">Go.Roqit API</strong> 🚀
        </p>
      </td>
    </tr>

  </table>
</body>

    `,
  }

  return data
}


const subscriptionActivatedEmail = ({
  user,
  plan,
  amountPaid,
  trxId,
  invoicePdf,
}: {
  user: { name: string; email: string }
  plan: { title: string }
  amountPaid: number
  trxId: string
  invoicePdf: string
}) => {
  return {
    to: user.email,
    subject: `🎉 Subscription Activated – ${plan.title}`,
    html: `
<body style="margin:0; padding:0; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0"
         style="max-width:640px; margin:40px auto; background-color:#ffffff; border-radius:14px;
                overflow:hidden; box-shadow:0 5px 25px rgba(0,0,0,0.08);">

    <!-- Header -->
    <tr>
      <td align="center" style="background-color:#f1f8f4; padding:35px 20px; border-top:1px solid #e6f4ea;">
        <img src="https://api.goroqit.com/image/1761168795060-ant6f7.png" alt="Go.Roqit"
             style="width:210px; height:auto; filter:drop-shadow(0 0 6px rgba(0,0,0,0.3));">
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:45px;">
        <h1 style="color:#1b4332; font-size:26px; font-weight:700; margin-bottom:15px; text-align:center;">
          Subscription Activated 🎉
        </h1>

        <p style="color:#3a5a40; font-size:16px; line-height:1.6; margin-bottom:25px; text-align:center;">
          Hey <strong>${user.name}</strong>, thank you for subscribing to 
          <strong>${plan.title}</strong> on <strong>Go.Roqit</strong> 🚀
        </p>

        <!-- Subscription Summary -->
        <table style="width:100%; border-collapse:collapse; margin:20px 0;">
          <tr>
            <td style="padding:10px 0; font-size:15px; color:#3a5a40;">💳 <strong>Amount Paid:</strong></td>
            <td style="padding:10px 0; font-size:15px; color:#1b4332; text-align:right;">£${amountPaid}</td>
          </tr>
          <tr style="border-top:1px solid #e6f4ea;">
            <td style="padding:10px 0; font-size:15px; color:#3a5a40;">🧾 <strong>Transaction ID:</strong></td>
            <td style="padding:10px 0; font-size:15px; color:#1b4332; text-align:right;">${trxId}</td>
          </tr>
        </table>

        <!-- Invoice Download -->
        <div style="text-align:center; margin:40px 0;">
          <a href="${invoicePdf}"
             style="background-color:#2d6a4f; color:#ffffff; padding:14px 32px; font-size:16px; 
                    font-weight:600; border-radius:10px; text-decoration:none; display:inline-block; 
                    box-shadow:0 4px 12px rgba(45,106,79,0.3); transition:all 0.3s;">
            Download Invoice 📄
          </a>
        </div>

        <!-- Tip -->
        <div style="margin-top:35px; background-color:#fff8e1; border-left:6px solid #ffd54f; 
                    border-radius:8px; padding:15px 18px;">
          <p style="margin:0; color:#4a4a4a; font-size:14px;">
            💡 You can manage your subscriptions anytime from your Go.Roqit Dashboard.
          </p>
        </div>

        <!-- Button -->
        <div style="text-align:center; margin-top:45px;">
          <a href="https://goroqit.com"
             style="background-color:#1b4332; color:#ffffff; padding:14px 32px; font-size:16px; 
                    font-weight:600; border-radius:10px; text-decoration:none; display:inline-block; 
                    box-shadow:0 4px 12px rgba(45,106,79,0.3); transition:all 0.3s;">
             Go.Roqit Dashboard 🚀
          </a>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td align="center" style="background-color:#f1f8f4; padding:25px 20px; border-top:1px solid #e6f4ea;">
        <p style="margin:0; color:#52796f; font-size:13px;">
          © ${new Date().getFullYear()} <strong>Go.Roqit</strong>. All rights reserved.
        </p>
        <p style="margin:6px 0 0; color:#3a5a40; font-size:13px;">
          Powered by <strong style="color:#1b4332;">Go.Roqit API</strong> 🚀
        </p>
      </td>
    </tr>

  </table>
</body>
    `,
  }
}

const adminContactNotificationEmail = (payload: {
  name: string
  email: string
  phone?: string
  message: string
}) => {
  return {
    to: config.super_admin.email as string, 
    subject: '📩 New Contact Form Submission – Go.Roqit',
    html: `
<body style="margin:0; padding:0; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0"
         style="max-width:640px; margin:40px auto; background-color:#ffffff; border-radius:14px;
                overflow:hidden; box-shadow:0 5px 25px rgba(0,0,0,0.08);">

    <!-- Header -->
    <tr>
      <td align="center" style="background-color:#f1f8f4; padding:35px 20px; border-top:1px solid #e6f4ea;">
        <img src="https://api.goroqit.com/image/1761168795060-ant6f7.png" alt="Go.Roqit"
             style="width:210px; height:auto; filter:drop-shadow(0 0 6px rgba(0,0,0,0.3));">
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:45px;">
        <h1 style="color:#1b4332; font-size:26px; font-weight:700; margin-bottom:20px; text-align:center;">
          📬 New Contact Form Submission
        </h1>

        <p style="color:#3a5a40; font-size:16px; text-align:center; margin-bottom:25px;">
          A new message has been submitted through the Go.Roqit contact form.
        </p>

        <!-- Contact Details -->
        <table style="width:100%; border-collapse:collapse; margin:20px 0;">
          <tr>
            <td style="padding:10px 0; font-size:15px; color:#3a5a40;">👤 <strong>Name:</strong></td>
            <td style="padding:10px 0; font-size:15px; color:#1b4332; text-align:right;">${payload.name}</td>
          </tr>
          <tr style="border-top:1px solid #e6f4ea;">
            <td style="padding:10px 0; font-size:15px; color:#3a5a40;">📧 <strong>Email:</strong></td>
            <td style="padding:10px 0; font-size:15px; color:#1b4332; text-align:right;">${payload.email}</td>
          </tr>
          <tr style="border-top:1px solid #e6f4ea;">
            <td style="padding:10px 0; font-size:15px; color:#3a5a40;">📞 <strong>Phone:</strong></td>
            <td style="padding:10px 0; font-size:15px; color:#1b4332; text-align:right;">${payload.phone || 'N/A'}</td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="background-color:#f1f8f4; border-left:6px solid #2d6a4f; border-radius:8px; padding:20px; margin-top:25px;">
          <p style="margin:0; font-size:15px; color:#1b4332; line-height:1.6;">
            "${payload.message}"
          </p>
        </div>

        <p style="color:#3a5a40; font-size:14px; margin-top:25px; text-align:center;">
          You can respond directly to <strong>${payload.email}</strong>.
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td align="center" style="background-color:#f1f8f4; padding:25px 20px; border-top:1px solid #e6f4ea;">
        <p style="margin:0; color:#52796f; font-size:13px;">
          © ${new Date().getFullYear()} <strong>Go.Roqit</strong>. All rights reserved.
        </p>
        <p style="margin:6px 0 0; color:#3a5a40; font-size:13px;">
          Powered by <strong style="color:#1b4332;">Go.Roqit API</strong> 🚀
        </p>
      </td>
    </tr>

  </table>
</body>
    `,
  }
}

const userContactConfirmationEmail = (payload: {
  name: string
  email: string
  message: string
}) => {
  return {
    to: payload.email,
    subject: '💬 Thank You for Contacting Go.Roqit',
    html: `
<body style="margin:0; padding:0; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0"
         style="max-width:640px; margin:40px auto; background-color:#ffffff; border-radius:14px;
                overflow:hidden; box-shadow:0 5px 25px rgba(0,0,0,0.08);">

    <!-- Header -->
    <tr>
      <td align="center" style="background-color:#f1f8f4; padding:35px 20px; border-top:1px solid #e6f4ea;">
        <img src="https://api.goroqit.com/image/1761168795060-ant6f7.png" alt="Go.Roqit"
             style="width:210px; height:auto; filter:drop-shadow(0 0 6px rgba(0,0,0,0.3));">
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:45px;">
        <h1 style="color:#1b4332; font-size:26px; font-weight:700; margin-bottom:20px; text-align:center;">
          Thank You for Contacting Us 💚
        </h1>

        <p style="color:#3a5a40; font-size:16px; line-height:1.6; text-align:center;">
          Dear <strong>${payload.name}</strong>,<br>
          We’ve received your message and our team will get back to you soon!
        </p>

        <!-- Your Message -->
        <div style="background:linear-gradient(145deg,#d8f3dc,#b7e4c7); border:2px solid #52b788; 
                    border-radius:12px; padding:25px 20px; text-align:center; margin:30px auto; max-width:500px;">
          <p style="font-size:15px; color:#1b4332; line-height:1.6; margin:0;">
            <em>“${payload.message}”</em>
          </p>
        </div>

        <p style="color:#3a5a40; font-size:15px; line-height:1.6; text-align:center;">
          We appreciate you taking the time to reach out to <strong>Go.Roqit</strong>.<br>
          Expect a reply from our team shortly 🚀
        </p>

        <!-- Button -->
        <div style="text-align:center; margin-top:40px;">
          <a href="https://goroqit.com"
             style="background-color:#2d6a4f; color:#ffffff; padding:14px 32px; font-size:16px; 
                    font-weight:600; border-radius:10px; text-decoration:none; display:inline-block; 
                    box-shadow:0 4px 12px rgba(45,106,79,0.3); transition:all 0.3s;">
            Visit Go.Roqit 🌐
          </a>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td align="center" style="background-color:#f1f8f4; padding:25px 20px; border-top:1px solid #e6f4ea;">
        <p style="margin:0; color:#52796f; font-size:13px;">
          © ${new Date().getFullYear()} <strong>Go.Roqit</strong>. All rights reserved.
        </p>
        <p style="margin:6px 0 0; color:#3a5a40; font-size:13px;">
          Powered by <strong style="color:#1b4332;">Go.Roqit API</strong> 🚀
        </p>
      </td>
    </tr>

  </table>
</body>
    `,
  }
}

const sendPaymentLinkEmail = ({
  data,
  paymentUrl,
}: {
  data: any
  paymentUrl: string
}) => {
  return {
    to: data.email,
    subject: `💳 Complete Your Payment – ${data.serviceType.title}`,
    html: `
<body style="margin:0; padding:0; font-family:'Inter','Segoe UI',Tahoma,Geneva,Verdana,sans-serif; background:#f7f7f7;">
  <table width="100%" cellpadding="0" cellspacing="0"
         style="max-width:640px; margin:40px auto; background:#ffffff; border-radius:16px;
                overflow:hidden; border:1px solid #e5e5e5; box-shadow:0 4px 20px rgba(0,0,0,0.06);">

    <!-- Header -->
    <tr>
      <td align="center" style="background:#2c2c2c; padding:35px 20px; border-bottom:1px solid #d9f3e4;">
        <img src="https://i.ibb.co.com/jks76tpB/8a6289d738dfae4e5ecc32ab7b4cd261fd2b5e71.png"
             alt="Just Breath Logo"
             style="height:85px; width:auto; margin-bottom:10px;" />
        <h1 style="color:#3cb371; font-size:24px; font-weight:700; margin:0;">
          Payment Required to Confirm Your Service
        </h1>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:40px;">

        <p style="color:#444; font-size:15px; line-height:1.7; text-align:center;">
          Hello <strong style="color:#3CB371;">${data.fullName}</strong>,  
          You need to complete your payment to confirm your <strong>${data.serviceType.title}</strong> service. 💚
        </p>

        <!-- Service Summary -->
        <h2 style="color:#3CB371; font-size:19px; margin-bottom:15px; margin-top:30px;">🧾 Service Details</h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0; color:#666; font-size:15px;">Service Type:</td>
            <td style="padding:8px 0; color:#222; text-align:right;">${data.serviceType.title}</td>
          </tr>

          <tr style="border-top:1px solid #e8e8e8;">
            <td style="padding:8px 0; color:#666;">Preferred Date:</td>
            <td style="padding:8px 0; color:#222; text-align:right;">
              ${new Date(data.preferredDateTime).toLocaleString('en-US')}
            </td>
          </tr>

          <tr style="border-top:1px solid #e8e8e8;">
            <td style="padding:8px 0; color:#666;">Address:</td>
            <td style="padding:8px 0; color:#222; text-align:right;">
              ${data.serviceAddress}
            </td>
          </tr>

          <tr style="border-top:1px solid #e8e8e8;">
            <td style="padding:8px 0; color:#666;">Property Size:</td>
            <td style="padding:8px 0; color:#222; text-align:right;">
              ${data.propertySize} sq ft
            </td>
          </tr>

          <tr style="border-top:1px solid #e8e8e8;">
            <td style="padding:8px 0; color:#666;">Cleaning Frequency:</td>
            <td style="padding:8px 0; color:#222; text-align:right;">
              ${data.cleaningFrequency}
            </td>
          </tr>

          <tr style="border-top:1px solid #e8e8e8;">
            <td style="padding:12px 0; color:#555; font-size:16px;">Total Price:</td>
            <td style="padding:12px 0; color:#3CB371; font-size:18px; font-weight:700; text-align:right;">
              £${data.serviceType.price}
            </td>
          </tr>
        </table>

        <!-- Notes Box -->
        <div style="background:#f1f8f4; padding:15px 18px; border-radius:12px; border-left:4px solid #3CB371; margin-top:25px;">
          <p style="margin:0; color:#444; font-size:14px;">
            💬 <strong>Notes:</strong> ${data.additionalNotes || "No additional notes"}
          </p>
        </div>

        <!-- Payment Button -->
        <div style="text-align:center; margin:45px 0 30px;">
          <a href="${paymentUrl}"
             style="background:#3CB371; padding:14px 38px; color:#ffffff; font-size:17px;
                    font-weight:600; border-radius:12px; text-decoration:none;
                    box-shadow:0 4px 14px rgba(60,179,113,0.35); display:inline-block;">
            💳 Make Payment
          </a>
        </div>

      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td align="center" style="background:#f9f9f9; padding:22px; border-top:1px solid #e6e6e6;">
        <p style="margin:0; color:#777; font-size:12px;">
          © ${new Date().getFullYear()} — Just Breath Services
        </p>
        <p style="margin:5px 0 0; color:#777; font-size:12px;">
          Built with 💚 for your comfort
        </p>
      </td>
    </tr>

  </table>
</body>
    `,
  }
}



export const emailTemplate = {
  createAccount,
  resetPassword,
  resendOtp,
  subscriptionActivatedEmail,
  userContactConfirmationEmail,
  adminContactNotificationEmail,
  sendPaymentLinkEmail,
}
