export const fetchData = async () => {
    const response = await fetch(
      `https://api.coinlore.net/api/tickers/?start=0&limit=100`
    );
    const data = await response.json();
    return data.data
  };