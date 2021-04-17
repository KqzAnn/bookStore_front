import React from "react";
import { useHistory } from "react-router";
import { Jumbotron, Button, Alert } from "reactstrap";

const Header = () => {
    return (
        <Jumbotron>
            <h1 className="display-6">Book Store</h1>
        </Jumbotron>
    );
}

export default Header;