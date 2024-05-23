document.addEventListener('DOMContentLoaded', () => {
    const apiURL = 'https://api.coingecko.com/api/v3/coins/markets';
    const currency = 'usd';
    const hotListTable = document.getElementById('hot-list-table');
    const topGainersTable = document.getElementById('top-gainers-table');
    const newCoinsTable = document.getElementById('new-coins-table');

    async function fetchCryptoData() {
        try {
            const cachedData = localStorage.getItem('cachedData');
            if (cachedData) {
                populateTables(JSON.parse(cachedData)); 
            } else {
                const response = await fetch(`${apiURL}?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
                const data = await response.json();
                populateTables(data);
                localStorage.setItem('cachedData', JSON.stringify(data)); 
            }
        } catch (error) {
            console.error('Error fetching cryptocurrency data:', error);
        }
    }

    async function fetchNewCoins() {
        try {
            const response = await fetch(`${apiURL}?vs_currency=${currency}&order=gecko_desc&per_page=5&page=1&sparkline=false`);
            const data = await response.json();
            populateTable(data, newCoinsTable);
        } catch (error) {
            console.error('Error fetching new coins data:', error);
        }
    }

    function populateTables(data) {
        populateTable(data.slice(0, 5), hotListTable); 
        populateTable(getTopGainers(data).slice(0, 5), topGainersTable); 
    }

    function getTopGainers(data) {
        return data.filter(coin => coin.price_change_percentage_24h > 0);
    }
    function populateTable(coins, table) {
        table.innerHTML = ''; 
        coins.forEach(crypto => {
            const row = document.createElement('tr');
    
            const nameCell = document.createElement('td');
            nameCell.innerHTML = `<img src="${crypto.image}" alt="${crypto.name}" width="20" height="20" style="vertical-align:middle; margin-right: 8px;"><span style="font-weight: 450; font-size: 1rem; color:black;"> ${crypto.name}</span>`;
            row.appendChild(nameCell);
    
            const priceCell = document.createElement('td');
            const percentageChange = crypto.price_change_percentage_24h.toFixed(2);
            const changeClass = percentageChange >= 0 ? 'price-up' : 'price-down';
            priceCell.innerHTML = `$${crypto.current_price.toLocaleString()} <br><span class="${changeClass}" style="font-size: 0.8rem; color: ${percentageChange >= 0 ? 'green' : 'red'};">${percentageChange}%</span>`;
            row.appendChild(priceCell);
    
            table.appendChild(row);
        });
    }
    
    
    fetchCryptoData();
    fetchNewCoins();
    setInterval(fetchCryptoData, 30000); 
    setInterval(fetchNewCoins, 30000); 
});
