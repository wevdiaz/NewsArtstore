const LoadProductService = require("../services/LoadProductService");
const User = require("../models/User");

const mailer = require("../../lib/mailer");

const email = ``

module.exports = {

    async post(req,res) {
        try {

            const product = await LoadProductService.load("product", { where: { id: req.body.id }});

            const seller = await User.findOne( { where: { id: product.user_id }});

            const buyer = await User.findOne( { where: { id: req.session.userId }});

            await mailer.sendMail({
                to: seller.email,
                from: "no-reply@newsartstore.com.br",
                subject: "Novo pedido de compra",
                html:
            });

        }catch(err) {
            console.error(err);
        }
    }
}