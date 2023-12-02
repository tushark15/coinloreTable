import CryptoTable from "./table/CryptoTable";
import Search from "./components/search/Search";
import { useState } from "react";

const Content = () => {
  const [search, setSearch] = useState("");

  const getSearch = (data: string) => {
    setSearch(data);
  };
  return (
    <div className="d-flex flex-column gap-3 p-3 mainDiv" >
      <div className="d-flex align-items-center justify-content-center">
        <Search sendSearch={getSearch} />
      </div>
      <CryptoTable searchTerm={search} />
    </div>
  );
};

export default Content;
