import React, { Component } from "react";
import Feed from "./Feed";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  NavbarBrand,
} from "react-bootstrap";

export default class App extends Component {
  state = {
    search: "",
    posts: [],
  };

  getBaseUrl() {
    return "http://localhost:8080/feed";
  }

  componentDidMount() {
    fetch(this.getBaseUrl())
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch(console.log);
  }

  searchFeed = (e) => {
    e.preventDefault();

    fetch(this.getBaseUrl() + "/search/" + this.state.search)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch(console.log);
  };

  onChangeSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <>
        <Navbar
          className="justify-content-between"
          bg="dark"
          style={{ marginBottom: "2em" }}
        >
          <NavbarBrand style={{ color: "#FFF" }} href="/">
            <img alt="Flickr Logo" src="./logo.png" width="30" height="30" />
            {"\t"}
            Flickr
          </NavbarBrand>
          <Form inline onSubmit={this.searchFeed}>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={this.state.search}
              onChange={this.onChangeSearch}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Navbar>
        <Feed posts={this.state.posts} />
      </>
    );
  }
}
