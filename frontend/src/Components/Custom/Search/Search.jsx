import { useState } from "react";
import { SearchFormComponent } from "../Forms/Forms";
import "./search.css";

const Search = () => {
  const [view, setView] = useState("sales");

  return (
    <div className="searchComponent">
      <div className="toggleBtn">
        <button
          className={`${view === "sales" && "activeBtn"}`}
          onClick={() => setView("sales")}>
          Sales
        </button>
        <button
          className={`${view === "rentals" && "activeBtn"}`}
          onClick={() => setView("rentals")}>
          Rentals
        </button>
      </div>

      <SearchFormComponent view={view} />
    </div>
  );
};

export default Search;
