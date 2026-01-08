import react from "react";
import "./Nav.scss";

class Nav extends react.Component {
  render() {
    return (
      <div class="topnav">
        <a class="active" href="/">
          Home
        </a>
        <a href="/todo">Todos</a>
        <a href="/about">About</a>
      </div>
    );
  }
}

export default Nav;
