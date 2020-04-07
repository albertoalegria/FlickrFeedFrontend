import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, Image, ModalFooter } from "react-bootstrap";

export default class PostModal extends Component {
  render() {
    const post = this.props.post;

    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.hide.bind(this, post)}
          size="lg"
          centered
        >
          <ModalBody>
            <Image
              src={post.photo}
              fluid
              style={{ height: "80%", width: "100%" }}
            />
          </ModalBody>
          <h4>
            {post.title}
            <small className="text-muted">{" by " + post.author}</small>
          </h4>
          <ModalFooter>
            <br />
            <small className="text-muted">
              {"Date taken " + post.dateTaken}
            </small>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

// PropTypes
PostModal.propTypes = {
  post: PropTypes.object.isRequired, // Required property
};
