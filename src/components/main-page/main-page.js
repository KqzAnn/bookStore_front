import React from "react";
import { Container } from "reactstrap";
import Header from "../header/header";
import Catalog from "../catalog/catalog";
import { Basket } from "../basket/Basket";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";

const MainPage = () => {

    return (
        <Router>
            <Container>

                <Switch>
                    <Route path="/basket">
                        <Basket />
                    </Route>

                    <Route path="/">
                        <Catalog />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}

export default MainPage;