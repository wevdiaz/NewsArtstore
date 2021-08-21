const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9248aecd9504f5",
    pass: "8d4301d55bdabb"
  }
});

  module.exports = transport;