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
const Bolding = styled.span`
  font-weight: bold;
`;
const Category = styled.span`
  font-style: italic;
  color: purple;
`;
const Typeahead = ({ suggestions, handleSelect, categories }) => {
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
      {matchingSuggestions.length > 0 && (
        <Books>
          {matchingSuggestions.map((suggestion) => {
            const index = suggestion.title.search(value);
            let firsthalf = suggestion.title.slice(0, index + 1 + value.length);
            let secondhalf = suggestion.title.slice(index + 1 + value.length);
            return (
              <Searching
                key={suggestion.id}
                //   onClick={() => handleSelect(suggestion.title)} took it out so i dont get localhost everytime i click
              >
                <span>
                  {firsthalf}
                  <Bolding> {secondhalf} </Bolding>
                </span>
                <span>
                  in
                  <Category>{categories[suggestion.categoryId].name}</Category>
                </span>
              </Searching>
            );
          })}
        </Books>
      )}
    </>
  );
};

export default Typeahead;
