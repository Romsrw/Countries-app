import { InputContainer } from "./InputContainer";
import { IoSearch } from "react-icons/io5";
import { Input } from "./Input";

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
    </InputContainer>
  );
};
