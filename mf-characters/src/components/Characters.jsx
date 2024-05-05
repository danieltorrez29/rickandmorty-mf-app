import React from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Characters = () => {
  const { characters } = useFetchCharacters();

  return (
    <Row xs={1} md={4} className="g-4">
      {characters.map((character, index) => (
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src={character.image} />
            <Card.Body className="text-center">
              <Card.Title>{character.name}</Card.Title>
              <Link key={character.id} to={`/characters/${character.id}`}>
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Characters;
