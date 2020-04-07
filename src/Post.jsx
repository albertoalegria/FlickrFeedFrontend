import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

export default class Post extends Component {
  getStyle = () => {
    return {
      height: "100%",
      marginLeft: "5%",
      marginBottom: "5%",
      background: "rgba(255, 255, 255, 0.1)",
      border: "none",
    };
  };

  render() {
    const post = this.props.post;

    return (
      <Card style={this.getStyle()} className="col-md-5" border="light">
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
