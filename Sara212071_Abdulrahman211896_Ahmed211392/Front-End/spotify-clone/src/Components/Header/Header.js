import React from "react";
import classes from "./Header.module.css";
// import LoginForm from "./LoginForm/LoginForm";

const Header = (props) => {
  const loginClickHandler = () => {
    props.loggState(false);
    props.formVisLefter(true);
  };

  const logoutClickHandler = () => {
    props.loggState(true);
    props.formVisLefter(false);
  };

  const profileClickHandler = () => {
    props.porfileLefter()
  }

  return (
    <header className={classes.header}>
      {!props.loginStateLefter ? (
        <button onClick={loginClickHandler}>Login</button>
      ) : (
        ""
      )}
      {props.loginStateLeftera ? (
        <button onClick={logoutClickHandler}>Logout</button>
      ) : (
        ""
      )}

      <button onClick={profileClickHandler} className={classes.profile}>
        Profile
      </button>
    </header>
  );
};

export default Header;
