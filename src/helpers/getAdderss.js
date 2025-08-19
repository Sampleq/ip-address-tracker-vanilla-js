const API_KEY = 'at_xWJGPVImYn4geWbpy0znswUaVLb3I';

async function getAddress(ip = '152.12.22.1') {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
  );

  return await response.json();
}

export { getAddress };
