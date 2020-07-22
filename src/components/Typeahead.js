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
const Books = styled.ul`
  display: flex;
  flex-direction: column;
  width: 325px;
  box-shadow: 2px 2px 3px 3px whitesmoke;
`;
const Searching = styled.li`
  width: 300px;
  padding: 6px;
  &:hover {
    background-color: #fafad2;
  }
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
      />
      <Buttonstyled onClick={() => setValue("")}>Clear</Buttonstyled>
      <Books>
        {matchingSuggestions.map((suggestion) => {
          return (
            <Searching
              key={suggestion.id}
              //   onClick={() => handleSelect(suggestion.title)} took it out so i dont get localhost everytime i click
            >
              {suggestion.title}
            </Searching>
          );
        })}
      </Books>
    </>
  );
};

export default Typeahead;
