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

      <Buttonstyled onClick={() => setValue("")}>Clear</Buttonstyled>
    </>
  );
};

export default Typeahead;
