import { useEffect, useState } from "react";

export const useFetchCharacters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const results = data.results;

    setCharacters(results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return { characters };
};
