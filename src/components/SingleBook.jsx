import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selectedBook: false,
  };
  render() {
    const { book } = this.props;
    return (
      <Col key={book.asin}>
        <Card
          className="mt-3"
          style={{ border: this.state.selectedBook ? "1px solid purple" : "" }}
        >
          <Card.Img
            variant="top"
            className="image"
            src={book.img}
            onClick={() => {
              console.log(book);
              this.setState({
                selectedBook: !this.state.selectedBook,
              });
            }}
          />
          <Card.Body>
            <Card.Title className="truncate">{book.title}</Card.Title>
            {this.state.selectedBook && (
              <div>
                <CommentArea bookId={book.asin} />
                <AddComment bookId={book.asin} />
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
