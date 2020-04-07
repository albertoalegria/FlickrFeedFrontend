import React, { Component } from "react";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Post from "./Post";
import PostModal from "./PostModal";

export default class Feed extends Component {
  state = {
    show: false,
    current: null,
  };

  hide = (post) => {
    this.setState((prevState) => ({
      show: !prevState.show,
      current: post,
    }));
  };

  render() {
    const posts = this.props.posts;

    return (
      <Container>
        {this.state.show ? (
          <PostModal
            show={this.state.show}
            hide={this.hide}
            post={this.state.current}
          />
        ) : (
          <div />
        )}

        <Row>
          {posts.map((p) => (
            <Post key={p.author + p.title} hide={this.hide} post={p} />
          ))}
        </Row>
      </Container>
    );
  }
}

// PropTypes
Feed.propTypes = {
  posts: PropTypes.array.isRequired, // Required property
};
