const db = require("../../config/db");

module.exports = {

    all() {
        db.query(`
            SELECT * FROM cetegories
        `);
    }
}