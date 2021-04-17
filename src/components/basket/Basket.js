import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Row, Button } from "reactstrap";
import { ResetBasket } from "../../redux/actions/basket";
import BookCard from "../book-card/book-card";

export const Basket = (props) => {

    const dispatch = useDispatch();

    const bookItems = useSelector((state) => {
        return Object.entries(state.basket.books).map(([bookId, count]) => ({ count, book: state.books.booksById[bookId] })).filter((basketItem) => basketItem.count !== 0)
    })

    const orderHandler = (thisBookItems) => {

        let idOfOrder = 0;

//        fetch('http://localhost:8080/order', {
//            headers: {
//                'Content-Type': 'application/json',
//                'Accept': 'application/json',
//            },
//            method: "post",
//            body: JSON.stringify(
//                {
//                    user: 1
//                }
//            )
//        }).then(
//            response => response.json()
//        ).then(
//            response => idOfOrder = response.id
//        )

        fetch('http://localhost:8080/orderList', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: "post",
            body: JSON.stringify(thisBookItems)
        }).then(
            response => response.json()
        ).then(
            response => {
                idOfOrder = response.id
                dispatch(new ResetBasket())
                alert('Заказ №' + idOfOrder + ' оформлен')
            }
        )
    }

    return <div>
        <hr />
        <Link to="/">Вернуться в каталог</Link>
        <hr />

        <h1>Корзина</h1>

        {bookItems.length > 0 ?
            <div>
                <Row xs={3}>
                    {bookItems.map((bookItem) => (
                        <BookCard key={bookItem.book.id} book={bookItem.book} />
                    ))}
                </Row>
                <hr />
                <Button onClick={() => orderHandler(bookItems)}>Оформить заказ</Button>
            </div>
            : <div>Корзина пуста</div>

        }
    </div >
}

