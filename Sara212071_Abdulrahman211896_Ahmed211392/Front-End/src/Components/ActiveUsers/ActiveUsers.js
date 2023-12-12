import React, { useState } from "react";
import classes from "./ActiveUsers.module.css";

const ActiveUsers = (props) => {
  const [backVis, updateBackVis] = useState(false)
  const expandClickHandler = () => {
    {true ? updateBackVis(false) : updateBackVis(true)}
  } 
  return (
    <div className={classes.activeUsers}>
      {props.usersList.map((e) => {
        return (
          <div className={`${classes.user} `}>
            <div className={classes.front}>
              <h2>{e.name}</h2>
              <h4>{e.id}</h4>
            </div>
            <button className={classes.expand} onclick={expandClickHandler}>
              +
            </button>
            <div className={`${classes.back} ${backVis ? classes.vis : classes.hidden}`}></div>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveUsers;
