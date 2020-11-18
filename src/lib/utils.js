module.exports = {

    formatPrice(price) {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(price/100);
    },

    date(timestamp) {
        const date = new Date(timestamp);

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth()}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        const hour = date.getHours();
        const minutes = date.getMinutes();

        return {
            day,
            month,
            year,
            hour,
            minutes,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    }
}