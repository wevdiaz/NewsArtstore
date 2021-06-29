const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9c726bd050a510",
    pass: "90c0f30e93fd0b"
  }
});

  module.exports = transport;