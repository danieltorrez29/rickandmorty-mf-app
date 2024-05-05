import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";

const About = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
    >
      <Card style={{ width: "28rem", border: "none" }}>
        <Card.Img variant="top" src={profileImage} />
        <Card.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "40px",
            }}
          >
            <Card.Title>Daniel Torres</Card.Title>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "40px",
            }}
          >
            <Card.Text>
              I'm student of UPTC and I like to design websites
            </Card.Text>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button as={Link} to={"/"} variant="primary">
              Go Home
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
