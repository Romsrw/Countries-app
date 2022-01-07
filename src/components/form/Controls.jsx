import { useState, useEffect } from "react";
import { CustomSelect } from "./CustomSelect";
import { Search } from "./Search";
import { ControlWrapper } from "./ControlWrapper";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export const Controls = ({ onSearch, filters }) => {
  return (
    <ControlWrapper>
      <Search
        search={filters.search}
        setSearch={(search) => onSearch((prev) => ({ ...prev, search }))}
      />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={filters.region}
        onChange={(region) => onSearch((prev) => ({ ...prev, region }))}
      />
    </ControlWrapper>
  );
};
