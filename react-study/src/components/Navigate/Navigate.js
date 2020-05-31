import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "./Navigate.css";

import { Link } from "react-router-dom";

const Navigate = () => (
  <div className="Navigate">
    <Navbar bg="dark" variant="dark">
      <Link to="/home">
        <Navbar.Brand>Animal Lover</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Nav.Link><Link className="nav-link" to="/home">Home</Link></Nav.Link>
        <Nav.Link><Link className="nav-link" to="/login">List</Link></Nav.Link>
        <Nav.Link><Link className="nav-link" to="/login">Login</Link></Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  </div>
);

export default Navigate;
