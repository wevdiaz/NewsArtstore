const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c1134a35e2a7cd",
      pass: "3715e3194b0199"
    }
  });

  module.exports = transport;