const LoadProductService = require("../services/LoadProductService");
const User = require("../models/User");

const mailer = require("../../lib/mailer");

const email = (seller, product, buyer) => `
    <h2>Olá ${seller.name}</h2>
    <p>Você tem um novo pedido de compra do seu produto</p>
    <p>Produto: ${product.name}</p>
    <p>Preço: ${product.formattedPrice}</p>
    <p></br></br></p>
    <h3>Dados do comprador</h3>
    <p><strong>Nome:</strong> ${buyer.name}</p>
    <p><strong>Email:</strong> ${buyer.email}</p>
    <p><strong>Endereço:</strong> ${buyer.address}</p>
    <p><strong>CEP:</strong> ${buyer.cep}</p>
    <p></br></br></p>
    <p><strong>Entre em contato com o comprador para finalizar a venda!</strong></p>
    <p></br></br></p>
    <p>Atenciosamente, Equipe NewsArtstore</p>
`

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
                html: email(seller, product, buyer)
            });

            return res.render("orders/success");

        }catch(err) {
            console.error(err);
            return res.render("orders/error");
        }
    }
}