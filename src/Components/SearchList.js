import React from "react";
import Card from "../Components/card";

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map((person) => (
    <Card key={person.id} person={person} />
  ));
  return <div>{filtered}</div>;
}

export default SearchList;
