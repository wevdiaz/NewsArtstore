const { formatPrice } = require("../../lib/utils");

const Product = require("../models/Product");
const File = require("../models/File");

module.exports = {

    async index(req, res) {
        let results = await Product.all();
        const products = results.rows;

        if (!products) return res.send("Products not found!");

        async function getImage(productId) {
            let results = await Product.files(productId);
            const files = results.rows.map(file => ({
                ...file,
                src: `${req.protocol}://${req.headers.host}${file.path.replace("public", "")}`
            }));

            return files[0];
        }

        
    }
}