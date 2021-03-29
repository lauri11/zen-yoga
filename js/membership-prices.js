const pricesTypes = [
    {
        "data-item-type": "five-classes",
        "value": 70
    },
    {
        "data-item-type": "ten-classes",
        "value": 125
    },
    {
        "data-item-type": "private-class",
        "value": 50
    },
    {
        "data-item-type": "one-month-unlimited",
        "value": 120
    },
    {
        "data-item-type": "6-month-unlimited",
        "value": 600
    },
    {
        "data-item-type": "three-month",
        "value": 350
    },
    {
        "data-item-type": "one-year-unlimited",
        "value": 1000
    }
];

const apiKey = '4de0ccb964ee2ee37b6131cd';
let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest`;

async function fetchRatesForCurrency(currency) {
    let headers = new Headers({
        '': ''
    });
    const response = await fetch('https://v6.exchangerate-api.com/v6/4de0ccb964ee2ee37b6131cd/latest/USD', );
    // const response = await fetch(`${url}/${currency.toUpperCase()}`);
    const data = await response.json();
    console.log(data);
    return data;
}

const selectElement = document.querySelector('#currency-select');
selectElement.addEventListener('change', updatePrices);

async function updatePrices() {
    const selectedCurrency = selectElement.value;
    const rates = await fetchRatesForCurrency(selectedCurrency);
    pricesTypes.forEach(priceItem => {
        const newPrice = priceItem * rates.rates[selectedCurrency];
        document.querySelector(`[data-item-type="${priceItem['data-item-type']}"]`)
            .innerHTML = newPrice.toString();
    });
}