import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="flex flex-row flex-wrap justify-center mt-4">
      <input
        className="border w-2/5"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input
        className="text-black bg-transparent border border-black p-2 ml-2 cursor-pointer hover:bg-abyssblue hover:text-antiquewhite"
        onClick={callSearchFunction}
        type="submit"
        value="SEARCH"
      />
    </form>
  );
};

export default Search;
