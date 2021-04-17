import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Alert } from "reactstrap";
import Header from "../header/header";
import { GetBooks } from "../../redux/actions/books";
import { selectBooks } from "../../redux/selectors/books";

import BookCard from "../book-card/book-card";

const Catalog = (props) => {

    useEffect(() => {
        props.getBooks();
    }, []);

    const cardItemsCount = useSelector((state) => {
        return Object.values(state.basket.books).reduce((acc, curr) => acc + curr, 0);
    })

    return (
        <div>
            <hr />
            В корзине предметов: {cardItemsCount} &middot; <Link to="/basket">Перейти в корзину</Link>
            <hr />
            <Header />

            <Row xs={"3"}>
                {
                    props.books && props.books.map(currentBook => {
                        return (
                            <BookCard key={`book-${currentBook.id}`} book={currentBook} />
                        )
                    })
                }
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({
    books: selectBooks(state)
})

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(new GetBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);