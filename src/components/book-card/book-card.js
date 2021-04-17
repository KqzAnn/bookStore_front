import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Button } from "reactstrap";
import { AddBasket, RemoveBasket } from "../../redux/actions/basket";
import AuthorLink from "../author-link/author-link";

const BookCard = (props) => {
    const bookCount = useSelector((state) => state.basket.books[props.book.id] || 0);

    const dispatch = useDispatch();

    return (
        <Col>
            <h4>{props.book.title}</h4>

            <p>
                {
                    props.book.author
                }
            </p>

            <p>
                {
                    props.book.genres.map(genre => genre.name).join(" ")
                }
            </p>

            <Alert color={"warning"}>{props.book.price}</Alert>
            <div>
                <Button onClick={() => dispatch(new AddBasket(props.book.id))}>+</Button> {bookCount} <Button onClick={() => dispatch(new RemoveBasket(props.book.id))}>-</Button>
            </div>
            <hr></hr>
            <p></p>
        </Col>
    );
}

export default BookCard;