import React from "react";
import styled from "styled-components";
const Buttonstyled = styled.button`
  background-color: blue;
  color: lightgrey;
  margin-left: 10px;
  border-radius: 3px;
  font-size: 10px;
  border: none;
  padding: 8px;
`;
const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");
  const matchingSuggestions = suggestions.filter((book) => {
    if (value.length > 2) {
      return book.title.toLowerCase().includes(value);
    }
  });

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleSelect(ev.target.value);
          }
        }}
      />
      <ul>
        {matchingSuggestions.map((suggestion) => {
          return (
            <li
              key={suggestion.id}
              onClick={() => handleSelect(suggestion.title)}
            >
              {suggestion.title}
            </li>
          );
        })}
      </ul>
      <Buttonstyled onClick={() => setValue("")}>Clear</Buttonstyled>
    </>
  );
};

export default Typeahead;
