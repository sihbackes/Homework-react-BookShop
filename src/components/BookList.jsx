import fantasy from "../data/fantasy.json";
import { Component } from "react";
import { Container, Row, InputGroup, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
  };
  render() {
    return (
      <>
        <Container>
          <InputGroup className="mb-3 mt-5">
            <Form.Control
              type="text"
              placeholder="Book Title"
              aria-label="Book Title"
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </InputGroup>

          <h1>Book List</h1>
          <Row sm={2} md={3} lg={4}>
            {fantasy
              .filter((element) =>
                element.title.toLocaleLowerCase().includes(this.state.search)
              )
              .map((book) => (
                <SingleBook book={book} key={book.asin} />
              ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
