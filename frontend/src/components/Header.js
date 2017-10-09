import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          Udacity Readable
        </Menu.Item>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
