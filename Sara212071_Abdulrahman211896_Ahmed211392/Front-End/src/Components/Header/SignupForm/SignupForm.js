import React from "react";
import classes from "./SignupForm.module.css";

const SignupForm = () => {
    return (
      <form className={classes.signupForm}>
        <div className={classes.inputs}>
          <input type="text" placeholder="Enter Your Full Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your pasword" />
        </div>

        <div className={classes.actions}>
          <button>Signup</button>
          
          <button>Close</button>
        </div>
      </form>
    );
}

export default SignupForm;