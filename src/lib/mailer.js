const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "24976bb93d53b0",
    pass: "95af01d8618da4"
  }
});

  module.exports = transport;