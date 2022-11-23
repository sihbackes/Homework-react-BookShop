import { Component } from "react";
import { Card, Col } from "react-bootstrap";

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
          style={{ opacity: this.state.selectedBook ? "20%" : "" }}
        >
          <Card.Img
            variant="top"
            className="image"
            src={book.img}
            onClick={() => {
              this.setState({
                selectedBook: !this.state.selectedBook,
              });
            }}
          />
          <Card.Body>
            <Card.Title className="truncate">{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
