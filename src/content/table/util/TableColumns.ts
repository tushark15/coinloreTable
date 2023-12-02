import { ColumnsType } from "antd/lib/table";
import { DataTypes } from "../../types/DataTypes";
import { RankFilters, PriceFilters, PercantageChangeFilters } from "./Filters";
export const columns: ColumnsType<DataTypes> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => parseInt(a.id) - parseInt(b.id),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Market Cap(USD)",
    dataIndex: "market_cap_usd",
    key: "market_cap_usd",
    sorter: (a, b) =>
      parseFloat(a.market_cap_usd) - parseFloat(b.market_cap_usd),
  },
  {
    title: "Price (BTC)",
    dataIndex: "price_btc",
    key: "price_btc",
    sorter: (a, b) => parseFloat(a.price_btc) - parseFloat(b.price_btc),
  },
  {
    title: "Price(USD)",
    dataIndex: "price_usd",
    key: "price_usd",
    filters: PriceFilters,
    sorter: (a, b) => parseFloat(a.price_usd) - parseFloat(b.price_usd),
    onFilter: (value, record) => {
      const price = parseFloat(record.price_usd);
      if (value === "0-1") {
        return price >= 0 && price <= 1;
      } else if (value === "1-10") {
        return price >= 1 && price <= 10;
      } else if (value === "10-100") {
        return price >= 10 && price <= 100;
      } else if (value === "100-1000") {
        return price >= 100 && price <= 1000;
      } else if (value === "1000-10000") {
        return price >= 1000 && price <= 10000;
      } else if (value === "10000-100000") {
        return price >= 10000 && price <= 100000;
      } else if (value === "100000-1000000") {
        return price >= 100000 && price <= 1000000;
      }
      return false;
    },
  },

  {
    title: "Rank",
    dataIndex: "rank",
    key: "rank",
    filters: RankFilters,
    sorter: (a, b) => a.rank - b.rank,
    onFilter: (value, record) => {
      const rank = record.rank;
      if (value === "1-10") {
        return rank >= 1 && rank <= 10;
      } else if (value === "11-20") {
        return rank >= 11 && rank <= 20;
      } else if (value === "21-30") {
        return rank >= 21 && rank <= 30;
      } else if (value === "31-40") {
        return rank >= 31 && rank <= 40;
      } else if (value === "41-50") {
        return rank >= 41 && rank <= 50;
      } else if (value === "51-60") {
        return rank >= 51 && rank <= 60;
      } else if (value === "61-70") {
        return rank >= 61 && rank <= 70;
      } else if (value === "71-80") {
        return rank >= 71 && rank <= 80;
      } else if (value === "81-90") {
        return rank >= 81 && rank <= 90;
      } else if (value === "91-100") {
        return rank >= 91 && rank <= 100;
      }
      return false;
    },
  },

  {
    title: "Percantage Change (24h)",
    dataIndex: "percent_change_24h",
    key: "percent_change_24h",
    filters: PercantageChangeFilters,
    sorter: (a, b) =>
      parseFloat(a.percent_change_24h) - parseFloat(b.percent_change_24h),
    onFilter: (value, record) => {
      const change = parseFloat(record.percent_change_24h);

      if (value === "-25-10") {
        return change >= -25 && change <= -10;
      } else if (value === "-10-0") {
        return change >= -10 && change <= 0;
      } else if (value === "0-10") {
        return change >= 0 && change <= 10;
      } else if (value === "10-25") {
        return change >= 10 && change <= 25;
      }

      return false;
    },
  },
];
