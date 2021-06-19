const LoadProductService = require("../services/LoadProductService");
const User = require("../models/User");
const Order = require("../models/Order");
const mailer = require("../../lib/mailer");
const Cart = require("../../lib/cart");

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
            const cart  = Cart.init(req.session.cart);
            const buyer_id = req.session.userId;

            const filteredItems = cart.items.filter( item => item.product.id != buyer_id );

            const createOrdersPromise = filteredItems.map( async item => {
                let { product, price: total, quantity } = item;
                const { price, id: product_id, user_id: seller_id } = product;
                const status = "open";

                const order = await Order.create({
                    seller_id,
                    buyer_id,
                    product_id,
                    price,
                    total,
                    quantity,
                    status
                });

                product = await LoadProductService.load("product", { where: { id: product_id }});

                const seller = await User.findOne( { where: { id: seller_id }});

                const buyer = await User.findOne( { where: { id: buyer_id }});

                await mailer.sendMail({
                    to: seller.email,
                    from: "no-reply@newsartstore.com.br",
                    subject: "Novo pedido de compra",
                    html: email(seller, product, buyer)
                });
                return order;
            }); 
            
            await Promise.all(createOrdersPromise);

            return res.render("orders/success");

        }catch(err) {
            console.error(err);
            return res.render("orders/error");
        }
    }
}