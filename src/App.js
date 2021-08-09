import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import Age from "./Component/Profile/Age";
import Profession from "./Component/Profile/Profession";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import { Card, Container, Button } from "react-bootstrap";

function App() {
  return (
    <div className="Id">
      <Container>
        <Card>
          <Card.Body>
            <div className="Pic">
              <ProfilePhoto />
            </div>
          </Card.Body>
          <div className="Name">
            <FullName />
          </div>
          <div className='Age'>
            <Age />
          </div>
          <div className="Address">
            <Address />
          </div>
          <div className="Job">
            <Profession />
          </div>
          <Button variant="primary">Don't Ask For More </Button>
        </Card>
      </Container>
    </div>
  );
}

export default App;
