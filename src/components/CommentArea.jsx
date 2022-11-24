import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjNjMGQ0YmUzZDAwMTU4NDVmZTYiLCJpYXQiOjE2NjkyOTI1MjgsImV4cCI6MTY3MDUwMjEyOH0.qxWKL8aYO5zXizDr84vkG2BZYYdilNrEPxz4PkHr1MU",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ comments: data });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  componentDidMount() {
    this.fetchComments();
  }
  render() {
    console.log(this.props.bookId);
    return (
      <div>
        <ListGroup>
          {this.state.comments.map((element, i) => (
            <ListGroup.Item key={i}>{element.comment}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default CommentArea;
