import React, { useState } from "react";
import { API_KEY } from "../secret";

function Searchbar({ setResult }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${API_KEY}`
    );
    const result = await data.json();
    setChoices([...result]);
  };
  const handleChoice = async (lat, lon) => {
    const weatherdata = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const info = await weatherdata.json();
    setResult(info);
    setSearch("");
    setChoices([]);
  };
  const [search, setSearch] = useState("");
  const [choices, setChoices] = useState([]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="searchbar"
          placeholder="Search a city.."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setChoices([]);
          }}
        />
        <button type="submit">🔍</button>
      </form>
      {choices.length === 0 ? (
        ""
      ) : (
        <div className="choices">
          {choices.map((choice, i) => (
            <div
              key={"choice" + i}
              className="choice"
              onClick={() => handleChoice(choice.lat, choice.lon)}
            >
              {choice.name}, {choice.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
