const { formatPrice } = require("../../lib/utils");

const Product = require("../models/Product");


module.exports = {

    async index(req, res) {
        
        try {

            let results,
                params = {};


            const { filter, category } = req.query;

            if (!filter) return res.redirect("/");

            params.filter = filter;


            return res.render("search/index", { products });

        }catch(err) {
            console.error(err);
        }
    }
}