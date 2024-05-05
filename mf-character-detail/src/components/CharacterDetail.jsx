import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useFetchCharacter } from "../hooks/useFetchCharacter";
import Loader from "mf_loader/LoaderComponent";

const CharacterDetail = () => {
  const { character } = useFetchCharacter();

  if (!character) {
    return <Loader />;
  }

  return (
    <div className="container text-center">
      <div className="d-flex justify-content-center">
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={character.image} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
              {character.status === "Alive" ? "🟢" : "🔴"}: {character.status}
              <br />
              {character.species === "Human" ? "🌎" : "👽"}: {character.species}
              <br />
              {character.gender === "Male" ? "🧔🏻‍♂️" : "👩🏻"}: {character.gender}
            </Card.Text>
            <Button as={Link} to={"/characters"} variant="outline-primary">
              Go to characters
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CharacterDetail;
