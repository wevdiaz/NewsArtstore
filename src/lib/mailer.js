const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0b5fd2001b7fb9",
    pass: "2163e949db13fb"
  }
});

  module.exports = transport;