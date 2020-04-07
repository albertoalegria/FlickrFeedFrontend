import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../styles/Post.css";

export default class Post extends Component {
  render() {
    const post = this.props.post;

    return (
      <Card className="col-md-5 customCard" border="light">
        <Card.Img
          variant="top"
          src={post.photo}
          style={{ borderRadius: "2%", marginTop: "10px" }}
          onClick={this.props.hide.bind(this, post)}
        />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle>{post.author}</Card.Subtitle>
        </Card.Body>
      </Card>
    );
  }
}

// PropTypes
Post.propTypes = {
  post: PropTypes.object.isRequired, // Required property
};
