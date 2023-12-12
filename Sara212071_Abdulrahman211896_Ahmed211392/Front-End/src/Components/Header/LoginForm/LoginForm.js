import React from "react";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
    const signUpHandler = (e) => {
        e.preventDefault()
        props.updateSignupVisLefter(true);
        props.updateloginFormVisLefter(false)
    }
    
  return (
    <form className={classes.form}>
      <div className={classes.inputs}>
        <input placeholder="E-Mail" type="email" />
        <input placeholder="Password" type="password" />
      </div>

      <div className={classes.actions}>
        <div className={classes.top}>
          <button>Login</button>
          <button>Logout</button>
        </div>

        <div className={classes.bot}>
          <button onClick={signUpHandler}>Signup</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
