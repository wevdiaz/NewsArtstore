const { addOne, removeOne } = require("../../lib/cart");
const Cart = require("../../lib/cart");

const LoadProductService = require("../services/LoadProductService");

module.exports = {

    async index(req, res) {
        try {
            let { cart } = req.session;

            cart = Cart.init(cart);

            return res.render("cart/index", { cart });

        }catch(err) {
            console.error(err);
        }
    },

    async addOne(req, res) {
        const { id } = req.params;

        const product = await LoadProductService.load("product", { where: { id }});

        let { cart } = req.session;

        cart = Cart.init(cart).addOne(product);

        req.session.cart = cart;

        return res.redirect("/cart");
    },

    async removeOne(req, res) {
        const { id } = req.params;        

        let { cart } = req.session;

        if (!cart) return res.render("/cart");

        cart = Cart.init(cart).removeOne(id);

        req.session.cart = cart;

        return res.redirect("/cart");
    }
}