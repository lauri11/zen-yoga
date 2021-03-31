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

const signs = {
    'USD': '$',
    'UAH': '&#8372;',
    'EUR': '&#8364;'
};

const apiKey = '4de0ccb964ee2ee37b6131cd';
let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest`;

const baseCurrency = 'USD';

async function fetchRatesForCurrency(currency) {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/4de0ccb964ee2ee37b6131cd/latest/${currency}`,);
    const data = await response.json();
    console.log(data);
    return data;
}

const buttonElements = document.querySelectorAll('.pricing .currency-change button');
buttonElements.forEach(element => {
    element.addEventListener('click', changeStyles);
    element.addEventListener('click', updatePrices);
});

async function updatePrices(event) {
    const selectedCurrency = event.target.value;
    const rates = await fetchRatesForCurrency(baseCurrency);
    const sign = signs[selectedCurrency];
    pricesTypes.forEach(priceItem => {
        const newPrice = Math.round(priceItem.value * rates['conversion_rates'][selectedCurrency.toUpperCase()]);
        document.querySelector(`[data-item-type="${priceItem['data-item-type']}"]`)
            .innerHTML = `${sign}${newPrice}`;
    });
}

function changeStyles(event) {
    document.querySelector('.pricing .currency-change button.active').classList.remove('active');
    event.target.classList.add('active');
}