const currencyFormatter = (currency) => {
    return currency.toLocaleString("id-ID", {style:"currency", currency:"IDR"});
}

module.exports = currencyFormatter;