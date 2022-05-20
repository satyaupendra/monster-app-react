import React from "react";
import "./App.css";
import CardList from "./components/card-list/CardListComponent";
import SearchBar from "./components/search-bar/SearchBarComponent";
import { useState, useEffect } from "react";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchString)
    );
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchString]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchString(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodox</h1>
      <SearchBar onsearchChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
