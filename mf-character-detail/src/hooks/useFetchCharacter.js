import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useFetchCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const characterData = await response.json();
        setCharacter(characterData);
      } catch (error) {
        console.error("Error fetching character details: " + error);
      }
    };
    getCharacter();
  }, [id]);

  return { character };
};
