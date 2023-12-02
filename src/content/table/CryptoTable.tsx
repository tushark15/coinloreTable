import { useEffect, useState } from "react";
import { Table } from "antd";
import { DataTypes } from "../types/DataTypes";
import { columns } from "./util/TableColumns";
import { fetchData } from "../../fetchAPI/GetData";

interface CryptoTableProps {
  searchTerm: string;
}

const CryptoTable = ({ searchTerm }: CryptoTableProps) => {
  const [data, setData] = useState([] as Array<DataTypes>);
  const [filteredData, setFilteredData] = useState([] as Array<DataTypes>);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
      setLoading(false);
    });
    if (parseInt(searchTerm)) {
      setFilteredData(data.filter((item) => item.id.includes(searchTerm)));
    } else {
      setFilteredData(
        data.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={searchTerm ? filteredData : data}
      />
    </div>
  );
};

export default CryptoTable;
