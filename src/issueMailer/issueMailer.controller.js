const nodemailer = require("nodemailer");

// Checks if request body values are valid
const hasValidProperties = (req, res, next) => {
  console.log("req.body:", req.body.data);

  if (!req.body.data)
    return next({
      status: 400,
      message: `Missing data from the request body.`,
    });

  next();
};

// Send mail handler
// POST

const sendMail = async (req, res, next) => {
  try {
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_EMAIL_KEY,
        pass: process.env.MAILER_SECRET_KEY,
      },
    });

    let messageDetails = {
      from: process.env.MAILER_EMAIL_KEY,
      to: "joetv.tech@gmail.com",
      subject: "Test Nodemailer Email",
      text: "This is a test email from using the NodeMailer",
      html: `
      <div>
      <h2>${"Issue Location"} ${"Issue Category"}</h2>
      <p></p>
      </div>`,
      attachments: [
        {
          filename: "RobloxScreenShot20200120_124021549.png",
          path: "./RobloxScreenShot20200120_124021549.png",
        },
      ],
    };

    await mailTransporter.sendMail(messageDetails, (err) => {
      if (err) {
        console.log("Error sending email");
      } else {
        console.log("Message was sent successfully!");

        res.status(201).json({ data: { message: "Message sent!" } });
      }
    });
  } catch (error) {
    console.log("Errorsssssss");
  }
};

module.exports = { create: [sendMail] };
